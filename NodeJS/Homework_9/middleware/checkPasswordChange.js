import User from "../models/user.js";

export const checkPasswordChange = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(404).json({ message: "Пользователь не найден" });
  }
  if (user.mustChangePassword) {
    return req.status(400).json({ message: "необходимо сменить пароль" });
  }
  next();
};
