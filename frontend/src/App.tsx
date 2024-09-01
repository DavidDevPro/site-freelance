import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ScrollToTop } from "./components/shared";
import {
  HomePage,
  ContactPage,
  LoginPage,
  LegalPage,
  PrivacyPage,
  ForgotPasswordPage,
  EssentielPlanPage,
  PackageDetailPage,
  NotFoundPage,
  ServiceDetailPage,
} from "@/pages";
import "./App.css";
import { Toaster } from "./components/ui/sonner";
import { basename } from "@/config/config";

function App() {
  return (
    <Router basename={basename}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mentions-legales" element={<LegalPage />} />
        <Route path="/politique-confidentialite" element={<PrivacyPage />} />
        {/* Route dynamique pour les services */}
        <Route path="/services/:serviceName" element={<ServiceDetailPage />} />
        {/* Route dynamique pour les packages */}
        <Route path="/package/:packageName" element={<PackageDetailPage />} />
        {/* Ajout de la route 404 */}
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/essentiel-plan" element={<EssentielPlanPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
