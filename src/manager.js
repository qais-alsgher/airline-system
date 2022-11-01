`use strict`;
const events = require(`../event.js`);
const uuid = require(`uuid`).v4;
const { faker } = require('@faker-js/faker');
require(`./system.js`);
require(`./pilot.js`);
let pilot = faker.name.firstName();
setInterval(() => {
    // setTimeout(() => {
    events.emit(`new-flight`, { airLine: faker.company.name(), flightID: uuid(), pilot: pilot, destination: faker.address.city() });
}, 10000);

events.on(`arrived`, () => {
    console.log(`Manager: we're greatly thankful for the amazing flight,${pilot}`);

});