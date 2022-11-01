`use strict`;
require('dotenv').config();
const io = require('socket.io')(process.env.PORT || 3001);

io.on('connection', (socket) => {
    console.log('connected', socket.id);

    socket.on(`new-flight`, newflight);
    socket.on(`took-off`, tookoff);
    socket.on(`arrived`, arrived);
    var payloadData;

    function newflight(payload) {
        payloadData = payload;
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

        io.emit(`manager-message`, `Manager: new flight with ID ${payload.flightID} have been scheduled`);
        io.emit(`start-flight`, payload);
    }

    function tookoff(payload) {
        io.emit(`pilot-message`, `flight with ID ${payload.flightID} took off`);
        console.log(`Flight {
        event: 'took-off',
        time: ${new Date().toLocaleString()},
        Details: {
            airLine: ${payload.airLine},
            flightID: ${payload.flightID},
            pilot: ${payload.pilot},
            destination: ${payload.destination},
        }
    }`);
    }

    function arrived(payload) {
        io.emit(`pilot-message`, `flight with ID ${payload.flightID} has arrived`);
        console.log(`Flight {
        event: 'arrived',
        time: ${new Date().toLocaleString()},
        Details: {
            airLine: ${payload.airLine},
            flightID: ${payload.flightID},
            pilot: ${payload.pilot},
            destination: ${payload.destination},
        }
    }`);

        io.emit(`manager-message`, `Manager: we're greatly thankful for the amazing flight,${payload.pilot}`);
    }
});


