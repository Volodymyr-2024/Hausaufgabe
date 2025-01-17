import express from "express";
import "dotenv/config";
import Book from "./models/book.js";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3333;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/books", async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving books" });
  }
});

app.post("/books", async (req, res) => {
  try {
    const { title, author, year } = req.body;
    const book = await Book.create({ title, author, year });
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: "Error creating book" });
  }
});

app.put("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, year } = req.body;
    const book = await Book.update({ title, author, year }, { where: { id } });
    const updateBook = await Book.findByPk(id);
    res.json(updateBook);
  } catch (error) {
    res.status(400).json({ message: "Error updating book" });
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Book.destroy({ where: { id } });
    res.status(200).send("Book deleted");
  } catch (error) {
    res.status(400).json({ message: "Error deleting book" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
