import React, {useEffect, useState} from 'react';
import { connect } from 'socket.io-client';
import './map.css';
import './CustomPopup.css';

const client = connect('http://localhost:3008');

const CustomPopup = ({ feature }) => {
	//const [data]

    
    client.on('message',(data)=>{
            //let msg = JSON.parse(data);
            console.log(data);
    });
        
    useEffect(()=>{
    
        
    	client.emit('send', JSON.stringify({"geom": feature.geometry.coordinates}));
        
         
    },[]);
    
    return (
      <div style={{ padding: '10px', fontSize: '14px' }}>
        <h3 style={{ margin: '0' }}>{feature.properties.shapeName}</h3>
        <ul> {/* Tu peux mettre les parametres qui gèrent les pourcentages de votes ici */}
          {/* <li>Population: {feature.properties.population}</li> */}
        </ul>
      </div>
    );
  };
export default CustomPopup;
