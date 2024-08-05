import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import "./App.css"


function App() {
  const basename = import.meta.env.MODE === "production" ? "/" : "";
  return (
    <Router basename={basename}>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
      
    </Router>
  );
}

export default App;
