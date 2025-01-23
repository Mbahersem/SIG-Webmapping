import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

import { addClient } from './socketStreamManager.js';
import { Server } from 'socket.io';
import { createServer } from 'http';
import cors from 'cors'; 

const corsOptions = {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
};

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: corsOptions
});

httpServer.listen(3008, () => {
    console.log('Server is running on port 3008');
});

import { CountBureauPerParty } from '../database/model/countBureauPerParty.js';
const model = new CountBureauPerParty(); 

var clients = []

io.on('connection', (socket) => {
    console.log('CONNECTED from ' + socket.handshake.address.replace("::ffff:", ""));

    addClient(socket);

    socket.on('send', function (data) {
        var msg = JSON.parse(data);
        console.log('DATA received from ' + socket.handshake.address.replace("::ffff:", "") + ':' + data);

        socket.emit('message', model.countByArea(msg.geom));
    });

    socket.on('error', () => {
        console.log("There has been an error with " + socket.handshake.address.replace("::ffff:", ""));
        socket.disconnect();
    });

    socket.on('disconnect', () => {
        console.log("Communication disconnected " + socket.handshake.address.replace("::ffff:", ""));
    });
});

