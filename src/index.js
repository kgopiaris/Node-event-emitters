const { EventEmitter } = require("events");

const sayHello = () => {
  console.log("Hello!");
};

const sayGoodBye = () => {
  console.log("Goodbye!");
};

/**
 * Creating an event emitter
 */
const customEventEmitter = new EventEmitter();

console.log(customEventEmitter); // with 0 events subscription

/**
 * Subscribing to events
 */
customEventEmitter.on("hello", sayHello);
customEventEmitter.on("goodbye", sayGoodBye);

console.log(customEventEmitter); // with 2 events subscription

/**
 * Emitting events
 */
customEventEmitter.emit("hello");
customEventEmitter.emit("goodbye");

/*
  adding more events on the same name
*/
customEventEmitter.on("hello", sayHello);
customEventEmitter.on("hello", sayHello);

console.log(customEventEmitter); // with 3 events subscription

/**
 * Removing event listeners
 */

customEventEmitter.removeListener("hello", sayHello);

console.log(customEventEmitter);

customEventEmitter.removeAllListeners("hello", sayHello);

console.log(customEventEmitter);

/*
  Event callbacks created with anonymous functions 
  can only removed using removeallListeners
*/

customEventEmitter.on("hello", function() {
  console.log("callback from an anonymous function");
});
