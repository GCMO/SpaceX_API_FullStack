
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';


function App() {
  return (
    
      <Router>
        <div className="App">
          <Header/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorite" element={<Favorites />} />
            </Routes>
        </div>
      </Router>
  );
}

export default App;
