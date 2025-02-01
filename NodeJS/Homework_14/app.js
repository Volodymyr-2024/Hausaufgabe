import express from "express";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import { Category } from "./modells/Category.js";
import { Product } from "./modells/Product.js";

const app = express();
const PORT = process.env.PORT || 3333;
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

app.post("/categories", async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Category name is required" });
    }
    const newCategory = new Category({ name });
    await newCategory.save();
    res.status(201).json({
      message: "Category created successfully",
      category: newCategory,
    });
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/products", async (req, res) => {
  try {
    const { name, price, categoryName } = req.body;
    if (!name || !price || !categoryName) {
      return res
        .status(400)
        .json({ message: "Name, price and category are required" });
    }
    const category = await Category.findOne({ name: categoryName });
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    const newProduct = new Product({ name, price, category: category._id });
    await newProduct.save();
    res.status(201).json({
      message: "Product created successfully",
      product: newProduct,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find().populate("category", "name");
    res
      .status(200)
      .json({ message: "Products retrieved successfully", products });
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
