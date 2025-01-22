import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importation de React Router
import LandingPage from "./components/LandingPage";
import Connexion from "./components/LoginPage";
import Inscription from "./components/RegistrationPage";
import Resultats from "./components/ResultsPage";
import Map from "./components/Map";
// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import './App.css';

// import DetailedMap from './components/DetailedMap';

// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });

function App() {
  return (
    <Router>
      <Routes>
        {/* Définition des routes et des composants associés */}
        <Route path="/" element={<LandingPage />} /> {/* Page d'accueil */}
        <Route path="/LoginPage" element={<Connexion />} /> {/* Page de connexion */}
        <Route path="/RegistrationPage" element={<Inscription />} /> {/* Page d'inscription */}
        <Route path="/ResultsPage" element={<Resultats />} /> {/* Page des résultats */}
        {/* <Route path="/Map" element={<Map />} /> */}
      </Routes>
    </Router>
    // <div style={{ height: '100vh', width: '100vw' }}>
    //   <DetailedMap/>
    //   <div className="header" style={{ position: 'absolute', zIndex: 1000 }}>
    //     <div className="flag-color"></div> <div className="flag-color">★</div>
    //     <div className="flag-color">PRESIDENTIELLES 2025</div>
    //    </div>
    //   {/*<div style={{ position: 'absolute', zIndex: 1000, 
    //     width: '40px',
    //     height: '40px',
    //     right: '60px', 
    //     bottom: '60px', 
    //     fontSize: '30px', 
    //     padding: '15px', 
    //     borderRadius: '100px',
    //     backgroundColor: '#fff'
    //    }}>&nbsp;🞋</div> */}
    // </div> 
  );
}

export default App;
