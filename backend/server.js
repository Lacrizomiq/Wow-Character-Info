const cors = require("@fastify/cors");
const fastify = require("fastify")({ logger: true });
const communityData = require("./data");

fastify.get("/", async (request, reply) => {
  return communityData;
});

fastify.register(cors, {
  origin: "*", // Autorisez toutes les origines
  methods: ["GET", "POST"], // Spécifiez les méthodes autorisées
});

const start = async () => {
  try {
    await fastify.listen({ port: 3001 });
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
