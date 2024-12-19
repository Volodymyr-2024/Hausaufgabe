const EventEmitter = require("events");
const emitter = new EventEmitter();

const sendMessage = (userName, message, emitter) => {
  emitter.emit("message", userName, message);
};
emitter.on("message", (userName, message) => {
  console.log(`${userName}: ${message}`);
});

sendMessage("User1", "Привет, как дела?", emitter);
sendMessage("User2", "Привет, все отлично!", emitter);
sendMessage("User3", "Как погода?", emitter);
