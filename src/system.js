`use strict`;
const events = require(`../event.js`);
require(`./manager.js`);

events.on(`new-flight`, newflight);
events.on(`took-off`, tookoff);
events.on(`arrived`, arrived);
var payloadData;

function newflight(payload) {
    payloadData = payload;
    console.log(`Manager: new flight with ID ${payload.flightID} have been scheduled`);
    console.log(`Flight {
        event: 'new-flight',
        time: ${new Date().toLocaleString()},
        Details: {
            airLine: ${payload.airLine},
            flightID: ${payload.flightID},
            pilot: ${payload.pilot},
            destination: ${payload.destination},
        }
    }`);
}

function tookoff() {
    console.log(`flight with ID ${payloadData.flightID} took off`);
    console.log(`Flight {
        event: 'took-off',
        time: ${new Date().toLocaleString()},
        Details: {
            airLine: ${payloadData.airLine},
            flightID: ${payloadData.flightID},
            pilot: ${payloadData.pilot},
            destination: ${payloadData.destination},
        }
    }`);
}

function arrived() {
    console.log(`flight with ID ${payloadData.flightID} has arrived`);
    console.log(`Flight {
        event: 'arrived',
        time: ${new Date().toLocaleString()},
        Details: {
            airLine: ${payloadData.airLine},
            flightID: ${payloadData.flightID},
            pilot: ${payloadData.pilot},
            destination: ${payloadData.destination},
        }
    }`);
}



