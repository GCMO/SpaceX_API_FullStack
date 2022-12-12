// import express from 'express';
// import { ApolloServer } from 'apollo-server-express';
// import schema from './graphql/schema';
 

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

import express from 'express';
import express_graphql from 'express-graphql';
import  { buildSchema } from 'graphql';

var app = express();


app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));