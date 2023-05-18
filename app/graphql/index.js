// /graphql/index.js

// Dependencia que crea un servidor
const { ApolloServer } = require("@apollo/server");
// Playground incluido en @apollo/server
const {
  ApolloServerPluginLandingPageLocalDefault,
} = require("@apollo/server/plugin/landingPage/default");
// Middleware de Express también en @apollo/server
const { expressMiddleware } = require("@apollo/server/express4");
const { loadFiles } = require("@graphql-tools/load-files");

const resolvers = {
  Query: {
    hello: () => "Hola mundillo",
    getPerson: (_, { name, age }) =>
      `Hello, my name is ${name}, I'm ${age} years old`,
    getInt: (_, { age }) => age,
    getFloat: (_, { price }) => price,
    getString: () => "palabra",
    getBoolean: () => true,
    getID: () => "1212",
    getNumbers: (_, { numbers }) => numbers,
    getProduct: () => {
      return {
        id: "1212",
        name: "Product 1",
        price: 100.16,
        description: "bla bla bla",
        image: "http://image.sas",
        createdAt: new Date().toISOString(),
      };
    },
  },
};

const useGraphQL = async (app) => {
  const server = new ApolloServer({
    typeDefs: await loadFiles("./app/**/*.graphql"),
    resolvers,
    playground: true,
    plugins: [ApolloServerPluginLandingPageLocalDefault],
  });

  await server.start();

  // Uso del middleware en Express
  app.use(
    expressMiddleware(server, {
      context: async ({ req }) => ({
        token: req.headers.token,
      }),
    })
  );
};

module.exports = useGraphQL;
