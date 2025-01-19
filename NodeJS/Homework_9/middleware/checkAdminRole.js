
export const checkAdminRole = async (req, res, next) => {
  const { role } = req.user;
  
  if (role !== "admin") {
    return res
      .status(403)
      .json({ message: "Доступ запрещен. Требуется роль admin." });
  }

  next();
};
 