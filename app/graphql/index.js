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
const { buildContext } = require("graphql-passport");
const {
  typeDefs: scalarTypeDefs,
  resolvers: scalarResolvers,
} = require("graphql-scalars");

const resolvers = require("./resolvers");

const useGraphQL = async (app) => {
  const typeDefs = [...(await loadFiles("./app/**/*.graphql")), scalarTypeDefs];
  const allResolvers = [resolvers, scalarResolvers];
  const server = new ApolloServer({
    typeDefs,
    resolvers: allResolvers,
    playground: true,
    plugins: [ApolloServerPluginLandingPageLocalDefault],
  });

  await server.start();

  // Uso del middleware en Express
  app.use(
    expressMiddleware(server, {
      context: async ({ req, res }) =>
        buildContext({
          token: req.headers.token,
          req,
          res,
        }),
    })
  );
};

module.exports = useGraphQL;
