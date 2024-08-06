// Задание 1. Создайте HTML-страницу с кнопкой "Кликни меня" и блоком, в котором будет отображаться количество кликов.

// Задание 2. Используя JavaScript, при клике на кнопку увеличивайте счетчик кликов и изменяйте цвет фона блока. Если 
// количество кликов делится на 5 без остатка, цвет фона должен изменяться на случайный цвет.

// Задание 3. При достижении 10 кликов выведите сообщение под блоком с количеством кликов: "Поздравляем! Вы достигли 10 кликов!"

const btn = document.querySelector('.btn');
const counter = document.querySelector('.counter');
const newCounter = document.querySelector('.new_counter')
let click = 0;
btn.addEventListener("click", () => {
  click++;
  counter.textContent = `Количество кликов: ${click}`;
  if (click % 2 === 0) {                                                                     // начало выполнения задания 2
    btn.style.background = 'cadetblue'
  }  else {
    btn.style.background = 'blue'
  } 
  if (click % 5 === 0) {
    btn.style.background = '#' + Math.floor(Math.random() * 16777215).toString(16)
  }                                                                                          // конец выполнения задания 2
if (click === 10) {
    newCounter.style.display = 'block'                                                       // выполнение задания 3
}
})
