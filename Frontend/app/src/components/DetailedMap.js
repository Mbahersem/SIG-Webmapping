import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css'; // Importation du fichier CSS

import CustomPopup from './CustomPopup.js';

const ZoomControl = ({ setZoom }) => {
    const map = useMap();
    useEffect(() => {
        map.on('zoomend', () => {
            setZoom(map.getZoom());
        });
    }, [map, setZoom]);
    return null;
}

const DetailedMap = () => {
    const position = [7.3697, 10.3547]; // Coordonnées du Cameroun
    const minzoom = 6;
    const [zoom, setZoom] = useState(6);
    const [countryData, setCountryData] = useState(null);
    const [regionsData, setRegionsData] = useState(null);
    const [departementsData, setDepartementsData] = useState(null);
    const [arrondissementsData, setArrondissementsData] = useState(null);
    
    


    /* const fetchData = async () => {
        try {
            
          
        } catch (err) {
            console.error('Error occurred when loading data: ', err);
        }
    } */
        
    useEffect(() => {
        //fetchData();
        const loadGeoJsonFile = async (fileNumber, setData) => {

        	fetch(`/geojson/geoBoundaries-CMR-ADM${fileNumber}_simplified.geojson`)
        	     .then(response => response.json())
        	     .then(data => {setData(data);console.log(data);})
        	     .catch(error => console.error('Error fetching GeoJSON:',error));
        	return null;
             
    	}
    
        loadGeoJsonFile('0',setCountryData);
        loadGeoJsonFile('1',setRegionsData);
        loadGeoJsonFile('2',setDepartementsData);
        loadGeoJsonFile('3',setArrondissementsData);
        
    }, []);

    const styleFeature = (feature) => ({
        color: 'blue',
        weight: 2,
        fillOpacity: 0.5,
    });

    const onEachFeature = (feature, layer) => {
        layer.on({
            mouseover: (e) => {
                const layer = e.target;
                layer.setStyle({
                    weight: 5,
                    color: 'orange',
                    fillOpacity: 0.7,
                });
                layer.bringToFront();
            },
            mouseout: (e) => {
                const layer = e.target;
                layer.setStyle(styleFeature(feature)); // Rétablir le style original
            },
            click: (e) => {
                const popupContent = document.createElement('div');
            // Rendre le composant React dans le conteneur
            	ReactDOM.render(<CustomPopup feature={feature} />, popupContent);
                layer.bindPopup(popupContent).openPopup();
            },
        });
    };

    return (
        <MapContainer center={position} zoom={zoom} minZoom={minzoom} style={{ height: '100%', width: '100%' }} scrollWheelZoom={true}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            <ZoomControl setZoom={setZoom} />
            {zoom <= 6 && countryData && (
                <GeoJSON data={countryData} style={styleFeature} onEachFeature={onEachFeature} />
            )}
            {zoom > 6 && zoom < 8 && regionsData && (
                <GeoJSON data={regionsData} style={styleFeature} onEachFeature={onEachFeature} />
            )}
            {zoom >= 8 && zoom < 9 && departementsData && (
                <GeoJSON data={departementsData} style={styleFeature} onEachFeature={onEachFeature} />
            )}
            {zoom >= 9 && arrondissementsData && (
                <GeoJSON data={arrondissementsData} style={styleFeature} onEachFeature={onEachFeature} />
            )}
            
            <div className="legend">
		<h3>Légende</h3>
		<i style={{ background: 'green' }}></i><span>RDPC</span><br />
		<i style={{ background: 'red' }}></i><span>UPC</span><br />
		<i style={{ background: 'orange' }}></i><span>UDC</span><br />
		<i style={{ background: 'yellow' }}></i><span>BDC</span><br />
		<i style={{ background: 'grey' }}></i><span>SDF</span><br />
           </div>
        </MapContainer>
    );
}

export default DetailedMap;

