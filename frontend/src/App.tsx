import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import "./App.css";
import Contact from "./pages/Contact";
import { Toaster } from "./components/ui/sonner";
import Login from "./pages/Login";
import Mentions from "./pages/Mentions";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import { NavBar } from "./components/NavBar";

function App() {
  const basename = import.meta.env.MODE === "production" ? "/" : "";
  return (
    <Router basename={basename}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mentions-legales" element={<Mentions />} />
        <Route
          path="politique-de-confidentialite"
          element={<PolitiqueConfidentialite />}
        />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
