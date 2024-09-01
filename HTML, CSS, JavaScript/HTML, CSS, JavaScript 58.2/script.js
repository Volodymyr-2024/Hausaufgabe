// Создать функцию, которая будет изменять цвет фона элемента каждую секунду. Цвет должен меняться случайным образом из заданного набора цветов.
const colors = ["#ff0000", "#00ff00", "#0000ff"];
const body = document.body;
const element = document.createElement("canvas");
body.appendChild(element);
function changeColor() {
  setInterval(() => {
    const randomColor = Math.floor(Math.random() * colors.length);
    console.log(randomColor);
    element.style.backgroundColor = colors[randomColor];
  }, 1000);
}
changeColor();
