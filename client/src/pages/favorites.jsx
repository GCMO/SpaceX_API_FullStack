import FavMasterList from '../components/FavMasterList'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { localClient } from '../ApolloClients';


const favorites = () => {
  return (
    <ApolloProvider client={localClient} >
      <FavMasterList />
    </ApolloProvider>
  )
}

export default favorites