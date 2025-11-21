import dotenv from 'dotenv'
import Fastify from 'fastify'
import { setupDb } from './db'
import path from 'path'
import { fileURLToPath } from 'url'
import fastifyCors from 'fastify-cors'
import fastifyCookie from 'fastify-cookie'
import fastifyStatic from 'fastify-static'
import fastifyMultipart from 'fastify-multipart'
import fastifyPlugin from 'fastify-plugin'
import authRoutes from './routes/auth.js'



const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//declare or assign .env to a variable
const envPath = path.join(__dirname, "./.env")

//Now
//configure environmental variable
// dotenv.config({ path: '/custom/path/to/.env' })
dotenv.config({path: envPath})

//now lets initialize fastify
// Create Fastify instance
const fastify = Fastify({
  logger: true,
  trustProxy: true,
})


await fastify.register(fastifyCors, {
  origin: "https://localhost",
  credentials: true
})

fastify.register(fastifyMultipart, {
  limits: {
    fileSize: 2 * 1024 * 1024,
    files: 1,
  },
  attachFieldsToBody: true
})

const COOKIE_SECRET = process.env.COOKIE_SECRET;
const PORT = process.env.PORT

fastify.register(fastifyCookie, {
  secret: COOKIE_SECRET,
  parseOptions: {},
})

fastify.register(fastifyStatic, {
  secret: COOKIE_SECRET,
  parseOptions: {},
})

//setup Database

setupDb(fastify);

// Register auth route
fastify.register((authRoutes), { prefix: '/auth' })
// if we want and other routes to be available to user withor without checking if they are logged in,
// we just register them directly here. otherwise, if we want only registered/loggedin users to use a route
// then we have to protect that path in a plugin that first checks if they are registered. That is where 
// the middleware comes in.


fastify.register(async function(privateScope) {
  privateScope.register(fastifyPlugin(authRoutes))
  privateScope.register(friendsRoutes, { prefix: '/api'})
  //...

})


// Declare a route
fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' })
})

// Run the server!
try {
  fastify.listen({port: PORT})
  console.info(`Server is now listening on Port: ${PORT}`)
} catch (error) {
  fastify.log.error(error)
  console.error("Error starting Server at Fastify Listen: ", error)
  process.exit(1)
}