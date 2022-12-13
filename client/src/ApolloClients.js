import { ApolloClient, InMemoryCache } from '@apollo/client';


export const spaceXClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://api.spacex.land/graphql"
  });

// For fetcing to localhost
export const localClient = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache()
  });