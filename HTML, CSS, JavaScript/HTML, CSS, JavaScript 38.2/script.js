// Создайте простую веб-страницу, где пользователь может вводить текст заметки. Рядом с полем ввода должна быть кнопка "Сохранить",
//  которая сохраняет введенный текст в localStorage. Также добавьте блок, в котором будет отображаться последняя сохраненная заметка.
//   При обновлении страницы заметка должна оставаться на месте.
const textArea = document.getElementById("textarea");
const btn = document.getElementById("btn");
const text = document.getElementById("text");
const value = localStorage.getItem("txt");
window.addEventListener("load", () => {
  if (value) {
    text.textContent = `Сохраненная заметка: ${value}`;
    textArea.value = value;
  }
});
const inputText = () => {
  localStorage.setItem("txt", textArea.value);
  text.textContent = `Сохраненная заметка: ${textArea.value}`;
};
btn.addEventListener("click", inputText);
