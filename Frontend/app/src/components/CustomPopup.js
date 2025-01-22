import React, {useEffect, useState} from 'react';
import { connect } from 'socket.io-client';
import './map.css';
import './CustomPopup.css';

const client = connect('http://192.168.99.245:3000');

const CustomPopup = ({ feature }) => {

    //const [data]

    
    client.on('message',(data)=>{
            let msg = JSON.parse(data);
            console.log(data);
    });
        
    useEffect(()=>{
    
        
    	client.emit('send', JSON.stringify({"geom": feature.geometry.coordinates}));
        
         
    },[]);
    
    return (
      <div style={{ padding: '10px', fontSize: '14px' }}>
        <h3 style={{ margin: '0' }}>{feature.properties.shapeName}</h3>
        <ul>
          {/* <li>Population: {feature.properties.population}</li> */}
		<i style={{ background: 'green' }}></i><span>RDPC</span><br />
		<i style={{ background: 'red' }}></i><span>UPC</span><br />
		<i style={{ background: 'orange' }}></i><span>UDC</span><br />
		<i style={{ background: 'yellow' }}></i><span>BDC</span><br />
		<i style={{ background: 'grey' }}></i><span>SDF</span><br />
        </ul>
      </div>
    );
  };
 export default CustomPopup;
