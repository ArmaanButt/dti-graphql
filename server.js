const { GraphQLServer } = require("graphql-yoga");

const { evalMetric, resolvers } = require("./resolvers");

const url = "https://api.c3.ai/covid/api/1/outbreaklocation/fetch";

let startServer = async function () {
  try {
    const server = new GraphQLServer({
      typeDefs: "./schema.graphql",
      resolvers,
    });
    server.start(() => console.log("Server is running on localhost:4000"));
  } catch (e) {
    console.log(e);
  }
};

startServer().then(() => {
  console.log("All good");
});
