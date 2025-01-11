import React, {useEffect, useState} from 'react';
import './CustomPopup.css';

const CustomPopup = ({ feature }) => {
    return (
      <div style={{ padding: '10px', fontSize: '14px' }}>
        <h3 style={{ margin: '0' }}>{feature.properties.name}</h3>
        <ul> {/* Tu peux mettre les parametres qui gèrent les pourcentages de votes ici */}
          {/* <li>Population: {feature.properties.population}</li> */}
        </ul>
      </div>
    );
  };
  