import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importation de React Router
import LandingPage from "./components/LandingPage";
import Connexion from "./components/LoginPage";
import Inscription from "./components/RegistrationPage";
import Resultats from "./components/ResultsPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Définition des routes et des composants associés */}
        <Route path="/" element={<LandingPage />} /> {/* Page d'accueil */}
        <Route path="/LoginPage" element={<Connexion />} /> {/* Page de connexion */}
        <Route path="/RegistrationPage" element={<Inscription />} /> {/* Page d'inscription */}
        <Route path="/ResultsPage" element={<Resultats />} /> {/* Page des résultats */}
      </Routes>
    </Router>
  );
}

export default App;
