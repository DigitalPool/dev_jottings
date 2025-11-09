import dotenv from 'dotenv'
import Fastify from 'fastify'

// dotenv.config({ path: '/custom/path/to/.env' })
dotenv.config()

// Create Fastify instance
const fastify = Fastify({
  logger: true
})

const PORT = process.env.PORT || 3000
const DATABASE_PATH = process.env.DATABASE_PATH





// Declare a route
fastify.get('/', (request, reply) => {
  reply.send({ hello: 'world' })
})

// Run the server!
fastify.listen({ PORT }, (err, address) => {
  if (err) throw err
  // Server is now listening on ${address}
})