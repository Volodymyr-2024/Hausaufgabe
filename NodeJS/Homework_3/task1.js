const fs = require("fs");

fs.mkdir("myFolder", (err) => {
  if (err) {
    console.error("Ошибка создания директории", err);
    return;
  }
  console.log("Каталог успешно создан");
});

fs.rmdir("myFolder", (err) => {
  if (err) {
    console.error("Ошибка удаления каталога", err);
    return;
  }
  console.log("Каталог успешно удален");
});
