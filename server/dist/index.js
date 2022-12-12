"use strict";
// import express from 'express';
// import { ApolloServer } from 'apollo-server-express';
// import schema from './graphql/schema';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const PORT = 5000;
// const app: express.Application = express();
// const server = new ApolloServer({
//     schema,
// });
// server.applyMiddleware({ app, path: '/graphql' });
// app.use(express.json());
// app.listen(PORT, () => {
//   console.log(`\n🚀  Server running at http://localhost:${PORT}/graphql`);
// });
const express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
//# sourceMappingURL=index.js.map