import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import "./App.css"
import Contact from './pages/Contact';
import { Toaster } from './components/ui/sonner';
import Login from './pages/Login';



function App() {
  const basename = import.meta.env.MODE === "production" ? "/" : "";
  return (
    <Router basename={basename}>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>} />
        
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
