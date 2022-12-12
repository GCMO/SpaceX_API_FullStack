import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import Header from './components/Header';
import MasterList from './components/MasterList';

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      
       <div className="App">
        <Header/>
        <MasterList />
      </div>
      
    </ApolloProvider>
  );
}

export default App;
