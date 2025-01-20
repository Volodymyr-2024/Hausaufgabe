// Нужно еще выполнить задание 4
import express from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";
import { verifyToken } from "./authenticateJWT.js";
import { authoriseRole } from "./authorizeRole.js";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3333;
const jwtSecret = process.env.JWT_Secret || "secret_key";
const users = [
  {
    id: "1",
    username: "user1",
    email: "user1@gmail.com",
    password: "123451",
    role: "admin",
  },
  {
    id: "2",
    username: "user2",
    email: "user2@gmail.com",
    password: "123452",
    role: "user",
  },
  {
    id: "3",
    username: "user3",
    email: "user3@gmail.com",
    password: "123453",
    role: "admin",
  },
];

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((currentUser) => currentUser.email === email);
  if (!user) {
    return res.status(401).json({ message: "User is not found" });
  }
  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    jwtSecret,
    {
      expiresIn: "1d",
    }
  );
  res.status(200).json({ message: "Login successfully", token });
});

app.put("/update-email", verifyToken, (req, res) => {
  const { username, email } = req.body;
  if (!username || !email) {
    return res.status(400).json({ message: "Name or email are required" });
  }
  const user = users.find((currentUser) => currentUser.id === req.user.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  user.email = email;
  res.status(200).json({ message: "User updated successfully", user });
});

app.delete("/delete-account", verifyToken, (req, res) => {
  const { username, email } = req.body;
  if (!username || !email) {
    return res.status(400).json({ message: "Name or email are required" });
  }
  const user = users.find((currentUser) => currentUser.id === req.user.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const newUsers = users.filter((currentUser) => currentUser !== user);
  res
    .status(200)
    .json({ message: `User ${user.id} deleted successfully`, newUsers });
});

app.put("/update-role", verifyToken, authoriseRole("admin"), (req, res) => {
  const { id, role } = req.body;
  if (!id || !role) {
    return res.status(400).json({ message: "ID or role are required" });
  }
  const user = users.find((currentUser) => currentUser.id === req.user.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  user.role = role;
  res.status(200).json({ message: "User role updated successfully", user });
});

app.post("/refresh-token", verifyToken, (req, res) => {
  const { id, email, role } = req.user;
  const newToken = jwt.sign({ id, email, role }, jwtSecret, {
    expiresIn: "1d",
  });
  res.status(200).json({
    message: "Token refreshed successfully",
    token: newToken,
  });
});

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
