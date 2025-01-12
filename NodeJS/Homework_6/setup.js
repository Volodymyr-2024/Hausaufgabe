import connection from "./db.js";

const createUserTable = `
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
  )
`;
connection.query(createUserTable, (err, result) => {
  if (err) {
    console.error("Ошибка при создании таблицы", err.stack);
    return;
  }
  console.log("Таблица 'products' создана или уже существует");
  
});
connection.end();

