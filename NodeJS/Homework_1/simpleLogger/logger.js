const fs = require("fs");

function logMessage(message) {
  fs.appendFile("log.txt", `${message}\n`, (err) => {
    if (err) {
      console.error("Ошибка при записи в файл:", err);
    } else {
      console.log("Сообщение успешно записано в файл!");
    }
  });
}
module.exports = { logMessage };
