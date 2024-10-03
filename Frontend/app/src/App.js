import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
//import './App.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function App() {
  const position = [7.3697, 12.3547]; // Coordonnées du Cameroun
  const zoom = 6;
  const minzoom = 6;

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <MapContainer center={position} zoom={zoom} minZoom={minzoom} style={{ height: '100%', width: '100%' }} scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup> Cameroun </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
