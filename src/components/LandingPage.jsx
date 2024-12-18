import React from "react";
import './style/LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="top-right">
        <a href="/LoginPage" className="button">Connexion</a>
      </div>

      <h1>REPUBLIQUE DU CAMEROUN</h1>
      <p>Bienvenue sur votre plateforme d'inscription et de résultats</p>
      <div className="middle-section">
        <div className="left-box">
          <a href="/RegistrationPage" className="overlay-button">Inscription</a>
        </div>
        <div className="right-box">
            <a href="/ResultsPage" className="overlay-button">Voir les résultats</a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;