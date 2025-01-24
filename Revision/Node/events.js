const event = require("events");
const { EventEmitter } = require("stream");
const eventEmitter = new EventEmitter();

eventEmitter.on("event", () => {
    console.log("Event triggered");
});

eventEmitter.emit("event");
