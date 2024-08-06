// Создайте HTML-форму с двумя полями ввода: для логина и пароля, а также кнопкой "Войти".
// Используя JavaScript и DOM, напишите скрипт, который будет проверять, совпадают ли введенные значения
//  с заранее заданными значениями логина и пароля (их нужно самому придумать и заранее указать в скрипте).
// Если значения совпадают, выведите сообщение об успешной аутентификации, в противном случае - сообщение об ошибке.
const form = document.querySelector(".box");
const log = "Nik";
const pass = "12345";
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const login = document.querySelector("#login").value;
  const password = document.querySelector("#password").value;
  const message = document.querySelector(".message");
  if (login === log && password === pass) {
    message.textContent = "Успешная аутентификация!";
    message.style.display = "block";
  } else {
    message.textContent = "Введен неверный логин или пароль!";
    message.style.display = "block";
  }
});
