import { getQuery } from '../utils/helpers.js'

async function authPlugin(fastify, options) {
  fastify.decorateRequest('userId', null);
  const db = fastify.sqliteDb;

  fastify.addHook('preHandler', async (req, reply) => {
    const rawCookie = req.cookies.sessionId;
    if (!rawCookie) {
      return reply.status(401).send({ error: 'Unauthorized' });
    }

    const { value: sessionId, valid } = req.unsignCookie(rawCookie);
    if (!valid) {
      return reply.status(401).send({ error: 'Invalid cookie' });
    }

	console.log("DEBUG: sessionId from authPlugin:", sessionId);
    // Buscar en la DB
    const row = await getQuery(db, "SELECT user_id FROM sessions WHERE token = ?", [sessionId])
    if (!row) {
      return reply.status(401).send({ error: "Session expired or invalid" })
    }

    req.userId = row.user_id;
  });
}

export default authPlugin;