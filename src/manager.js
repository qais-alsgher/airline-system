`use strict`;
const events = require(`../event.js`);
const uuid = require(`uuid`).v4;
require(`./system.js`);
require(`./pilot.js`);

// setInterval(() => {
setTimeout(() => {
    events.emit(`new-flight`, { airLine: `Delta`, flightID: uuid(), pilot: `John Doe`, destination: `Seattle` });
}, 10000);

events.on(`arrived`, () => {
    events.emit(`thank-Message`);
});