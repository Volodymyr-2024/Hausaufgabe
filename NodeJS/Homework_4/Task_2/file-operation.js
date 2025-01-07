import fs from "fs";
import "dotenv/config";

const filename = process.env.FILENAME;
fs.writeFile(filename, "Hello world!", (err) => {
  if (err) {
    console.error("Ошибка записи в файл", err);
    return;
  }
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      console.error("Ошибка чтения из файла", err);
      return;
    }
    console.log(data);
  });
});
