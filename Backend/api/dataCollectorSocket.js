import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

import { addClient } from './socketStreamManager.js';

import { Server } from 'socket.io';
import { createServer } from 'http';
const io = new Server(createServer().listen(Number(process.env.SOCKETPORT)));

import { CountBureauPerParty } from '../database/model/countBureauPerParty.js';
const model = new CountBureauPerParty(); 

var clients = []

io.on('connection', (socket) => {
    console.log('CONNECTED from ' + socket.handshake.address.replace("::ffff:", ""));

    addClient(socket)

    socket.on('send', function (data) {
        var msg = JSON.parse(data);
        debug('DATA received from ' + socket.handshake.address.replace("::ffff:", "") + ':' + data);

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