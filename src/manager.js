`use strict`;
const uuid = require(`uuid`).v4;
const { faker } = require('@faker-js/faker');
const socket = require('socket.io-client')(process.env.HOST || 'http://localhost:3001');

let pilot = faker.name.firstName();

setInterval(() => {
    // setTimeout(() => {
    socket.emit(`new-flight`, { airLine: faker.company.name(), flightID: uuid(), pilot: pilot, destination: faker.address.city() });
}, 10000);

socket.on(`manager-message`, (payload) => {
    console.log(payload);
});
