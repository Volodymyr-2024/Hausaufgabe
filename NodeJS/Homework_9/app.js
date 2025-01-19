import express from "express";
import "dotenv/config";
import bcrypt from "bcrypt";
import User from "./models/user.js";
import { checkPasswordChange } from "./middleware/checkPasswordChange.js";
import { checkAdminRole } from "./middleware/checkAdminRole.js";
import authRoutes from "./routes/auth.js";

const app = express();
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/auth", checkPasswordChange);
const PORT = process.env.PORT || 3333;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email и password обязательны!" });
  }
  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Этот email уже зарегистрирован" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      password: hashedPassword,
      mustChangePassword: false,
    });
    return res.status(201).json({
      message: "Пользователь успешно зарегистрирован",
      user: {
        id: newUser.id,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Ошибка сервера" });
  }
});

app.post("/change-password", async (req, res) => {
  const { email, newPassword } = req.body;
  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }
    const isSamePassword = await bcrypt.compare(newPassword, user.password);
    if (isSamePassword) {
      return res
        .status(400)
        .json({ message: "Новый пароль не может быть таким же, как старый" });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    user.mustChangePassword = false;

    await user.save();

    res.status(200).json({ message: "Пароль успешно изменен" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(403).json({ message: "Отсутствует токен" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Неверный токен" });
    }
    req.user = decoded;
    next();
  });
};

app.post("/delete-account", verifyToken, async (req, res) => {
  const { password } = req.body;
  const { email } = req.user;
  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Неверный пароль" });
    }

    await user.destroy();

    res.status(200).json({ message: "Аккаунт успешно удален" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

app.get("/admin", verifyToken, checkAdminRole, (req, res) => {
  res
    .status(200)
    .json({ message: "Добро пожаловать в панель администратора!" });
});

app.post("/change-email", verifyToken, async (req, res) => {
  const { currentPassword, newEmail } = req.body;
  const { email } = req.user;

  if (!newEmail || !currentPassword) {
    return res
      .status(400)
      .json({ message: "Новый email и пароль обязательны!" });
  }

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      currentPassword,
      user.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Неверный пароль" });
    }

    const existingUser = await User.findOne({ where: { email: newEmail } });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Этот email уже зарегистрирован" });
    }

    user.email = newEmail;
    await user.save();

    res.status(200).json({
      message: "Email успешно обновлен",
      user: { id: user.id, email: user.email },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
