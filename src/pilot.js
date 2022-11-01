`use strict`;
require('dotenv').config();
const socket = require('socket.io-client')(process.env.HOST || 'http://localhost:3001');


socket.on(`start-flight`, (payload) => {
    setTimeout(() => {
        socket.emit(`took-off`, payload);
        setTimeout(() => {
            socket.emit(`arrived`, payload);
        }, 3000);
    }, 4000);
});

socket.on(`pilot-message`, (payload) => {
    console.log(payload);
});
