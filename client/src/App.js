import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Header/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorite" element={<Favorites />} />
            </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
