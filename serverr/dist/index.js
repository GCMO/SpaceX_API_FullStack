import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
// SCHEMA or collection of type definitions - "typeDefs"
const typeDefs = `#graphql
  type FavoriteLaunch {
    id: ID!
    mission_name: String!
    launch_date_local: String
    launch_year: String
    details: String
    links: String
    rocket: String
    launch_site: String
  }
  
  type Query {
    likes: [FavoriteLaunch]
  }

  type Mutation {
    savedLaunch(
    id: ID!, 
    mission_name: String!, 
    launch_date_local: String, 
    launch_year: String, 
    details: String, 
    links: String, 
    rocket: String, 
    launch_site: String 
    ) : FavoriteLaunch

    deleteLaunch(id: ID!) : FavoriteLaunch
    
    likes: [FavoriteLaunch]
  }
`;
// dummy data -- IN MEMORY DATA
const likes = [
// {
//     id: '1',
//     mission_name: 'FalconSat',
// },
// {
//     id: '2',
//     mission_name: 'DemoSat',
// },
];
// Resolvers define the script for fetching the types expressed in the schema.
const resolvers = {
    Query: {
        likes: () => likes,
    },
    Mutation: {
        savedLaunch: (_, { id, mission_name, launch_date_local, launch_year, details, links, rocket, launch_site, }) => {
            likes.push({
                id,
                mission_name,
                launch_date_local,
                launch_year,
                details,
                links,
                rocket,
                launch_site,
            });
            console.log("LIKES", likes);
            return {
                id,
                mission_name,
                launch_date_local,
                launch_year,
                details,
                links,
                rocket,
                launch_site,
            };
        },
        deleteLaunch: (_, { id }) => {
            const index = likes.findIndex((FavoriteLaunch) => FavoriteLaunch.id === id);
            if (index === -1) {
                throw new Error("FavoriteLaunch not found");
            }
            const [FavoriteLaunch] = likes.splice(index, 1);
            return FavoriteLaunch;
        },
    },
};
// ---> Required logic for integrating with Express
const app = express();
// Our httpServer handles incoming requests to our Express app.
// Below, we tell Apollo Server to "drain" this httpServer,
// enabling our servers to shut down gracefully.
const httpServer = http.createServer(app);
// Same ApolloServer initialization as before, plus the drain plugin
// for our httpServer.
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
// Ensure we wait for our server to start
await server.start();
// Set up our Express middleware to handle CORS, body parsing,
// and our expressMiddleware function.
app.use("/graphql", cors({
    origin: ["http://localhost:3001", "http://localhost:3000"],
}), bodyParser.json(), 
// expressMiddleware accepts the same arguments:
// an Apollo Server instance and optional configuration options
expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
}));
// --- > Modified server startup
await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000/`);
