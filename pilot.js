`use strict`;
const events = require(`./event.js`);
require(`./system.js`);
require(`./manager.js`);

events.on(`new-flight`, () => {
    setTimeout(() => {
        events.emit(`took-off`);
        setTimeout(() => {
            events.emit(`arrived`);
        }, 3000);
    }, 4000);
});
