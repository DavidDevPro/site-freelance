import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ScrollToTop } from "./components/shared";
import {
  HomePage,
  ContactPage,
  LoginPage,
  LegalPage,
  PrivacyPage,
  NewAccountPage,
  ForgotPasswordPage,
} from "@/pages";
import "./App.css";
import { Toaster } from "./components/ui/sonner";

function App() {
  const basename = import.meta.env.MODE === "production" ? "/" : "";
  return (
    <Router basename={basename}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mentions-legales" element={<LegalPage />} />
        <Route path="/politique-de-confidentialite" element={<PrivacyPage />} />
        <Route path="/new-account" element={<NewAccountPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
