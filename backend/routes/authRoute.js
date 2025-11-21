import authController from '../controllers/authController.js'
import { loginSchemaFull, logoutSchema, registerSchemaRequest } from '../schemas/authSchemas.js'

export default async function authRoutes(fastify) {
  const db = fastify.sqliteDb;

  // ------------------ REGISTER ------------------
  fastify.post('/register', { schema: registerSchemaRequest, attachValidation: true }, async (request, reply) => {
    await authController.register(request, reply, db)
  });

  // ------------------ LOGIN ------------------
  fastify.post('/login', { schema: loginSchemaFull }, async (request, reply) => {
    await authController.login(request, reply, db)
  });

  // ------------------ LOGOUT ------------------
  fastify.post('/logout', { schema: logoutSchema }, async (request, reply) => {
    await authController.logout(request, reply, db)
  })
}