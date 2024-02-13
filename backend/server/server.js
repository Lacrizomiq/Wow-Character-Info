// server.js
const fastify = require("fastify")({ logger: true });

fastify.get("/community", async (request, reply) => {
  const communityData = [
    {
      title: "Icy Veins",
      content: "Some content about Icy Veins.",
      image: "/path/to/icyveins/image",
    },
    // ...
  ];

  return communityData;
});

fastify.listen(5000, (err, address) => {
  if (err) throw err;
  fastify.log.info(`server listening on ${address}`);
});
