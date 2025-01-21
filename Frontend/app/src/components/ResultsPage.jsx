import React, { useState } from "react";
import './style/ResultsPage.css';

function ResultsPage() {
  const [selectedZone, setSelectedZone] = useState('');

  const handleZoneChange = (event) => {
    setSelectedZone(event.target.value);
  };

  return (
    <div className="results-container">
      <div className="header">
        <label htmlFor="zone" className="label">Choisir la zone</label>
        <select 
          id="zone" 
          className="input" 
          value={selectedZone} 
          onChange={handleZoneChange}
        >
          <option value="">-- Sélectionner une zone --</option>
          <option value="zone1">Zone 1</option>
          <option value="zone2">Zone 2</option>
          <option value="zone3">Zone 3</option>
          {/* Ajoutez d'autres options selon vos besoins */}
        </select>
        <button className="button">Ouvrir la carte</button>
      </div>
      <div className="content">
        <div className="left-panel"></div>
        <div className="right-panel">
          <h3 className="results-header">Récapitulatif des résultats</h3>
          <table className="table">
            <tbody>
              {[...Array(10)].map((_, i) => (
                <tr key={i} className="table-row">
                  <td className="table-cell">Données pour la ligne {i + 1}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ResultsPage;