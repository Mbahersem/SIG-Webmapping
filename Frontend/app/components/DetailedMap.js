import React, {useEffect, useState} from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


const DetailedMap = ()=>{
    const position = [7.3697, 10.3547]; // Coordonnées du Cameroun
    const minzoom = 6;
    const [zoom, setZoom] = useState(6);
    const onZoom = (e)=>{
        setZoom(e.target.getZoom());
    }

    const [countryData, setCountryData] = useState(null);
    const [regionsData, setRegionsData] = useState(null);
    const [departementsData, setDepartementsData] = useState(null);
    const [arrondissementsData, setArrondissementsData] = useState(null);

    // const fetchData = async ()=>{
    //     try {
    //         const country = await fetch('api/data/countryData') 
    //         const regions = await fetch('api/data/regionsData');
    //         const departements = await fetch('api/data/departementsData');
    //         const arrondissements = await fetch('api/data/arrondissementsData');

    //         setCountryData( await country.json());
    //         setRegionsData( await regions.json());
    //         setDepartementsData( await departements.json());
    //         setArrondissementsData( await arrondissements.json());
    //     }catch(err){
    //         console.error('Error occured when loading data: ', err);
    //     }
    // }

    useEffect(()=>{
        //fetchData();

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
              
              const popupContent = <CustomPopup feature={feature} />;
              layer.bindPopup(popupContent).openPopup();
            },
            mouseout: (e) => {
              const layer = e.target;
              layer.setStyle(styleFeature(feature));
              layer.closePopup();
            },
          });
        };
    },[]);

    return (
    <MapContainer center={position} zoom={zoom} minZoom={minzoom} onZoom={onZoom} style={{ height: '100%', width: '100%' }} scrollWheelZoom={true}>
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
    </MapContainer>
    )
}
export default DetailedMap;