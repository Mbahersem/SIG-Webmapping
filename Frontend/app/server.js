const WebSocket = require('ws');
const fs = require('fs');
const path = require('path');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Client connected');

    const sendGeoJSON = (fileNumber) => {
        const filePath = path.join(__dirname, `./src/geojson/geoBoundaries-CMR-ADM${fileNumber}_simplified.geojson`);
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return;
            }
            ws.send(data);
        });
    };

    // Envoyer les données GeoJSON pour chaque fichier
    for (let i = 0; i <= 3; i++) {
        sendGeoJSON(i);
    }

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

console.log('WebSocket server is running on ws://localhost:8080');

