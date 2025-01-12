import express from "express";
import connection from "./db.js";

const app = express();
const port = 3000;
app.use(express.json());

app.get("/products", (req, res) => {
  connection.query("SELECT * FROM products", (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Ошибка при получении данных" });
    }
    res.json(results);
  });
});
app.post("/products", (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ message: "Название и цена обязательны" });
  }

  const query = "INSERT INTO products (name, price) VALUES (?, ?)";
  connection.query(query, [name, price], (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Ошибка при добавлении продукта" });
    }
    res
      .status(201)
      .json({ message: "Продукт успешно добавлен", id: results.insertId });
  });
});

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
