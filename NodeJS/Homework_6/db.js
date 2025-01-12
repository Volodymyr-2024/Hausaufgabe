import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "product_db",
});

connection.connect((err) => {
  if (err) {
    console.error("ошибка подключения к базе данных:", err.stack);
    return;
  }
  console.log(
    "Подключение к базе данных успешно установлено " + connection.threadId
  );
});

export default connection;
