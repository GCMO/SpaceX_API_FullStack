import MasterList from "../components/MasterList"
import DetailList from "../components/DetailList"
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { spaceXClient } from "../ApolloClients";


const home = () => {
  return (
    <ApolloProvider client={spaceXClient}>
        <MasterList />
    </ApolloProvider>
  )
}

export default home