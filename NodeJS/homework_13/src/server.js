import { connectDB } from "../config/db.js";
import app from "./app.js";
import "dotenv/config";

const PORT = process.env.PORT || 3333;

connectDB();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello, World!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
