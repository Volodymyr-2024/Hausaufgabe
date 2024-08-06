// Задание 1
// У вас есть блок синего цвета. При наведении на блок меняйте его цвет на красный, а при уходе — возвращайтесь к исходному.

const block = document.querySelector(".block");
block.addEventListener("mouseover", function () {
  block.style.backgroundColor = "red";
});
block.addEventListener("mouseout", function () {
  block.style.backgroundColor = "blue";
});
