const fs = require("fs");

fs.writeFile("info.txt", "Node.js is awesome!", "utf-8", (err) => {
  if (err) {
    console.error("Ошибка записи в файл", err);
    return;
  }
  console.log("Файл успешно записан");
});

fs.readFile("info.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Ошибка чтения файла", err);
    return;
  }
  console.log(`Прочитанные данные из файла: ${data}`);
});
