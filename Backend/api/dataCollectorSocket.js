import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

import { addClient } from './socketStreamManager';

import { Server } from 'socket.io';
import { createServer } from 'http';
const io = new Server(createServer().listen(Number(process.env.SOCKETPORT)));

io.on('connection', (socket) => {
    console.log('CONNECTED from ' + socket.handshake.address.replace("::ffff:", ""));

    addClient(socket)

    socket.on('error', () => {
        console.log("There has been an error with " + socket.handshake.address.replace("::ffff:", ""));
        socket.disconnect();
    });

    socket.on('disconnect', () => {
        console.log("Communication disconnected " + socket.handshake.address.replace("::ffff:", ""));
    });

});