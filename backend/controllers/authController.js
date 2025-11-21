import bcrypt from 'bcrypt'
import { config } from 'dotenv'
import fs from 'fs'
import path from 'path'
import { pipeline } from 'stream'
import { fileURLToPath } from 'url'
import { promisify } from 'util'
import { escapeHtml, generateSessionToken, getQuery, runQuery, sanitizeAvatarPath } from '../utils/helpers.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pump = promisify(pipeline);
config();

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);


const authController = {
  //Register function
  async register(request, reply, db){
      reply.type('application/json')
    //so we are expecting the user to send their details from the frontend.
    // These details will be in the body of the request
      // before we go deep into registering this user, we can run some testx om their input data and verify if
      // they are correct using a try and catch block
    try {
      
      // we didnt use const here because they must be muttable, and we will be setting them during the code
      let username, email, password;

      // assign avatarFile name to a file in the directory, if user sets theirs, we reassign
      let avatarFilename = 'avatar.png';

      // firstly, we expect that this request is coming from a form that we set in the front end. And this form is 
      // supposed to have different entry types. So we check, does this request which is coming contain a 
      // Content-Type: multipart/form-data? If it does, then yes, this is what we are expecting. 
      // If it dosent, then possibly we can reject it if it is a must to have the avatar, or just collect 
      // the details and try to process it. So looks like client didnt upload image.

      if (request.isMultipart && request.isMultipart()) {
        //  ✔️ request.isMultipart Check: “Does Fastify support multipart on this route?”
        //  ✔️ request.isMultipart() Check: “Is THIS request a multipart/form-data upload?”

        //we are expecting four inputs, username, passwor, email and avatar. so we get them from the request

      username = request.body?.username.value ||''
      email = request.body?.email.value || ''
      password = request.body?.password.value || ''

      // now we will validate these inputs

      if (!username || !email || !password){
        return reply.status(400).send({
          error: 'Missing required fields: username, email password'
        })
      }

      //validate username format
      if(username.length < 3 || username.length > 30 || !validateUsername(username)){
        return reply.status(400).send({
          error: 'Wrong username format'
        })
      }
      if(!validateEmail(email)){
        return reply.status(400).send({
          error: 'Wrong email format'
        })
      }
      if(!validatePassword(password)){
        return reply.status(400).send({
          error: 'Wrong password format'
        })
      }
      
      //now let us check if the user uploaded an image so we reassign it to the avatarFile
      const avatarFile = rquest.body?.avatar;

      if (avatarFile && avatarFile.type === 'file' && avatarFile.fieldname === 'avatar'){
          const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']

          //mime - Multipurpose Internet Mail Extensions
          if (!allowedTypes.includes(avatarFile.mimetype)) {
            return reply.status(400).send({ error: 'Invalid image file type. Allowed types are: ' + allowedTypes.join(', ') })
          }

          const uploadDir = path.join(__dirname, '../public/avatars')
          if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true })

          avatarFilename = generateSafeFilename(avatarFile.mimetype)
          const filePath = path.join(uploadDir, avatarFilename)


          // let us now try to safe the file
          try {
            // Fastify multipart can give the file in two ways: 
            // Small files have a _buf property → you can save them directly using fs.writeFileSync()
            // Larger files are a stream → you must pipe the file stream into a write stream using:
              if (avatarFile._buf) {
                fs.writeFileSync(filePath, avatarFile._buf)
              } else {
                await pump(avatarFile.file, fs.createWriteStream(filePath))
              }

            // next we will verify if the file was successfully saved
            const status = fs.statSync(filePath)

            if (status.size === 0){
              // if no bytes were written. remove the filepath, and inform user about bad file
              fs.unlinkSync(filePath)
              return reply.status(400).send({ error: 'File upload failed - empty file.' })
              // in JavaScript, return inside an async function immediately stops the function
            }

            //but if status.size is not 0, that means the file was successfully saved, so we go ahead and sanitize the path
            // sanitize path function as pasted above is ensuring there is no unsafe or invalid uploads. It checks whether 
            // the filename generated for the uploaded avatar is unsafe or invalid, by checking if the sanitizer returned 
            // its fallback safe path.

            if(sanitizeAvatarPath(avatarFilename) === '/avatar.png'){
              // it means our function detected an issue and returned the safe file we have in memory, so we unlink again
              // and inform client of this error.
              fs.unlinkSync(filePath)
              return reply.status(400).send({ error: 'Invalid image file format' })
            }
          } catch (err) {
            // anyways if any error got away in all our checks, we will still catch it here, and still unlink the filepath and send error status
            console.error('Registration avatar upload error:', e)
            if (fs.existsSync(filePath)) {
              fs.unlinkSync(filePath)
            }
            return reply.status(422).send({ error: 'Avatar upload failed - file could not be processed' })
          }
      }  else {
        // just collect the details and try to process it. So looks like client didnt upload image
        ({ username, email, password } = request.body || {});
      }
  
      //we then use bcrypt to hash the password
      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
      const result = await runQuery(db,
        `INSERT INTO players (username, email, password, wins, losses, avatar)
                             VALUES (?, ?, ?, 0, 0, ?)`,
                             [username, email.toLowerCase(), hashedPassword, `/avatars/${avatarFilename}`]
       )
  
       //now we have to generate session token cookies to help this registered user stay loggedin on the website till the 
       //end of the expiry of the cookie
  
       const sessionToken = generateSessionToken(result.lastID)
       // the run query returns the id of the last field inserted or query ran, so that is why we can use it in to get the 
       // last id of the last query ran, and pass it in out generate session token. Remember this fuction is just 
       // generating some 32 bytes tokens and assinign it to the user's Id. we will then save this token in the data base
       // and also set it as a cookie in the client browser, so anytime it is there, we will check for it and keep the user
       // logged in. When user is trying to do other things and it is not there, we log the user out innemdiately. 
  
      // you can see that here we now store the session token
       await runQuery(db, `INSERT INTO sessions (user_id, token) VALUES (?, ?)`, [result.lastID, sessionToken])
  
       // then we set the cookie
       reply.setCookie('sessionId', sessionToken, {
        httpOnly: true, //prevents client-side JavaScript from reading the cookie
        path: '/', //which URLs on your site the cookie is sent to-> is valid for the entire site
        signed: true, //signed with cookie secret
        secure: true, // can be sent via hhtps only
        maxAge: 365 * 24 * 60 * 60,
        sameSite: 'Strict', //the cookie is only sent if the request originates from the same site
       })
  
        // after we have added the user to the database and set a cookie for them, then we send a reply to 
        // the route, which can be received and checked if success to continue other operations
  
        reply.send({
          success: true,
          userId: result.lastID,
          username: escapeHtml(username),
          avatar: escapeHtml(`/avatars/${avatarFilename}`)
        })
      }
    } catch (err){
      // then we catch error
      // There are somethings we do not want to happen during registration. e.g, we may not want someone
      // registering with a username that is already in use. So in this case, our databases sqlite or mysql
      // always have an error that will be sent based on how we designed the fields. So if you have set 
      // username TEXT UNIQUE, the sqlite database will return an error of "UNIQUE constraint failed", to tell
      // which you can then check in this error function and handle appropriterly or inform the user

       if (err.message && err.message.includes('UNIQUE constraint failed')) {
        return reply.status(409).send({ error: 'Username or email already exists' });
      }

      if (err.message && err.message.includes('database')) {
        console.error('Database error during registration:', err);
        return reply.status(503).send({ error: 'Registration temporarily unavailable. Please try again later.' });
      }

      console.error('Registration error:', err);
        reply.status(422).send({ error: 'Registration could not be completed. Please check your data and try again.' });
      }
    },
  
  // now we design the login route
  // Login function
  async login(request, reply, db) {
     reply.type('application/json');
    try {
      const { username, password } = request.body || {};

      // Los datos ya están validados por Fastify schemas
      const row = await getQuery(db,
        `SELECT id, username, password, avatar, preferred_language, social_features_enabled FROM players WHERE username = ?`,
        [username.trim()]
      );

      if (!row) return reply.status(401).send({ error: 'Invalid credentials' });

      const passwordMatch = await bcrypt.compare(password, row.password);
      if (!passwordMatch) return reply.status(401).send({ error: 'Invalid credentials' });

      // Remove old sessions
      await runQuery(db, "DELETE FROM sessions WHERE user_id = ?", [row.id])

      // Crear nueva sesión
      const sessionToken = generateSessionToken(row.id)
      await runQuery(db, `INSERT INTO sessions (user_id, token) VALUES (?, ?)`, [row.id, sessionToken])

      reply.setCookie('sessionId', sessionToken, {
        httpOnly: true, //prevents client-side JavaScript from reading the cookie
        secure: false, // can be sent via hhtps only
        signed: true, //signed with cookie secret
        sameSite: 'Strict', //the cookie is only sent if the request originates from the same site
        path: '/' //which URLs on your site the cookie is sent to-> is valid for the entire site
      });

      // Set GDPR consent cookie with user's preferences from database
      const consentData = {
        necessary: true,
        analytics: true,
        social: !!row.social_features_enabled,
        timestamp: new Date().toISOString()
      };
      
      reply.setCookie('gdpr_consent', JSON.stringify(consentData), {
        path: '/',
        httpOnly: false, // Allow JavaScript access for frontend
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 365 * 24 * 60 * 60 // 1 year
      });

      reply.send({
        success: true,
        userId: row.id,
        username: escapeHtml(row.username),
        avatar: escapeHtml(row.avatar),
        preferred_language: row.preferred_language || 'en'
      });

    } catch (err) {
      if (err.message && err.message.includes('database')) {
        console.error('Database error during login:', err);
        return reply.status(503).send({ error: 'Login temporarily unavailable. Please try again later.' });
      }
      console.error('Login error:', err);
      reply.status(422).send({ error: 'Login could not be completed. Please try again.' });
    }
  },

  // Logout function
  async logout(request, reply, db) {
    const rawCookie = request.cookies.sessionId
    if (rawCookie) {
      const { value: sessionToken } = request.unsignCookie(rawCookie)
      await runQuery(db, "DELETE FROM sessions WHERE token = ?", [sessionToken])
    }
    reply.clearCookie("sessionId", { path: "/" });
    reply.clearCookie("gdpr_consent", { path: "/" }); // Clear GDPR consent cookie on logout
    reply.send({ success: true });
  }
}

export default authController