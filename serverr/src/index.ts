import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
// import cors from 'cors';
import bodyParser from 'body-parser';
import { typeDefs } from './schema.js';
import { resolvers } from './resolver.js';

interface MyContext {
  token?: String;
}

// // A schema is a collection of type definitions (hence "typeDefs")
// // that together define the "shape" of queries that are executed against your data.

// const typeDefs = `#graphql
//   type FavoriteLaunch {
//     id: ID!
//     mission_name: String!
//   }

//   # The "Query" type is special: it lists all of the available queries that
//   # clients can execute, along with the return type for each. 
  
//   type Query {
//     likes: [FavoriteLaunch]
//   }
// `;

// dummy data
// const liked = [
//     {
//         id: 1,
//         mission_name: 'FalconSat',
//     },
//     {
//         id: 2,
//         mission_name: 'DemoSat',
//     },
// ];

// Resolvers define the technique for fetching the types defined in the schema.
// const resolvers = {
//     Query: {
//         likes: () => liked,
//     },
// };

// ---> Required logic for integrating with Express
const app = express();
// Our httpServer handles incoming requests to our Express app.
// Below, we tell Apollo Server to "drain" this httpServer,
// enabling our servers to shut down gracefully.
const httpServer = http.createServer(app);

// Same ApolloServer initialization as before, plus the drain plugin
// for our httpServer.
const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

// Ensure we wait for our server to start
await server.start();
// Set up our Express middleware to handle CORS, body parsing,
// and our expressMiddleware function.
app.use(
    '/graphql',
    // only if you have a DB to connect to
    // cors<cors.CorsRequest>(), 
    bodyParser.json(),
    // expressMiddleware accepts the same arguments:
    // an Apollo Server instance and optional configuration options
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    }),
  );
  
  // --- > Modified server startup
  await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000/`);
    