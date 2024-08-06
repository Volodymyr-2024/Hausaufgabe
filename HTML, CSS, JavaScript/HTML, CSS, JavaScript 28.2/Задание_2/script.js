// Задание 2
// У вас есть блок с id "colorBlock" и кнопка с id "colorButton".
// При клике на кнопку, измените цвет блока на случайный цвет. Используйте Math.random() для генерации RGB-компонент

const buttonColor = document.getElementById("colorButton");

function getRandomColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}

buttonColor.addEventListener("click", function () {
  const blockColor = document.getElementById("colorBlock")
  blockColor.style.backgroundColor = getRandomColor()
})
