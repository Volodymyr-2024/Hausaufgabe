import express from "express";
import "dotenv/config";
import { connectToDatabase, getDb } from "./db/index.js";
import { ObjectId } from "mongodb";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3333;

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(
      "Failed to start the server due to MongoDB connection issue",
      err
    );
  });

app.post("/products", async (req, res) => {
  try {
    const db = getDb();
    const product = req.body;
    if (!product.name || !product.price || !product.description) {
      return res
        .status(400)
        .json({ error: "Name, proce and description are required" });
    }
    const result = await db.collection("products").insertOne(product);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "A failed to create product" });
  }
});

app.get("/products", async (req, res) => {
  try {
    const db = getDb();
    const products = await db.collection("products").find().toArray();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const db = getDb();
    const productId = req.params.id;
    if (!ObjectId.isValid(productId)) {
      return res.status(400).json({ error: "Invalid product ID" });
    }
    const product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(productId) });
    if (!product) {
      return res.status(400).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const db = getDb();
    const productId = req.params.id;
    const updateData = req.body;
    if (!ObjectId.isValid(productId)) {
      return res.status(400).json({ error: "Invalid product ID" });
    }
    const result = await db.collection("products").updateOne(
      {
        _id: new ObjectId(productId),
      },
      { $set: updateData }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Product is not found" });
    }
    res.status(200).json({ message: "Product is updated" });
  } catch (error) {
    res.status(500).json({ error: "Failed to create products" });
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const db = getDb();
    const productId = req.params.id;
    if (!ObjectId.isValid(productId)) {
      return res.status(400).json({ error: "Invalid product ID" });
    }
    const result = await db
      .collection("products")
      .deleteOne({ _id: new ObjectId(productId) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product" });
  }
});
