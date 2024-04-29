// const event = require("events");
// const events = new event.EventEmitter();

import { EventEmitter } from "events";
const events = new EventEmitter();

const greefn = (a) => {
  console.log(a);
};
// events.on("greet", greefn);
events.on("greet", greefn);

// events.emit("greet");
// events.off("greet", greefn);
events.emit("greet", "tenny");
