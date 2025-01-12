import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  try {
    throw new Error("Тестовая ошибка");
  } catch (error) {
    const errorMessage = `[${new Date().toISOString()}] ${error.message}\n`;
    fs.writeFile("errors.txt", errorMessage, (err) => {
      if (err) {
        console.error("Не удалось записать ошибку в файл", err.message);
      }
    });
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Internal Server Error");
  }
});
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
