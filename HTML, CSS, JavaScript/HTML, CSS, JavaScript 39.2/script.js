// Реализовать формы регистрации и логина.
// Данные зарегистрированных пользователей хранить в массиве объектов в localStorage.
// Дляобеихформсделать проверку на пустые поля при отправке.
// Привводеневерного логина или пароля выводить сообщение об ошибке.
// Приуспешномлогине ирегистрации выводит сообщение и очищать поля.

const inputName = document.querySelector(".name");
const inputPhoneNumber = document.querySelector(".phone");
const inputEmail = document.querySelector(".email");
const inputPassword = document.querySelector(".password");
const signUpBtn = document.querySelector(".signup");
const requiredPar = document.createElement("p");
const body = document.querySelector("body");
// Регулярное выражение для проверки, что строка содержит только буквы
const nameRegex = /^[A-Za-zА-Яа-яёЁ]+$/;
// Регулярное выражение для проверки, что номер телефона содержит только цифры после символа +
const phoneNumberRegex = /^\+\d+$/;

// получаем список пользователей из localStorage или присваиваем пустой массив
// вспоминаем как работать с JSON(и методы)
const users = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : [];
// создадим обработчик события для кнопки регистрации
signUpBtn.addEventListener("click", () => {
  // проверим поля на пустые значения
  if (
    inputName.value === "" ||
    inputPhoneNumber.value === "" ||
    inputEmail.value === "" ||
    inputPassword.value === ""
  ) {
    // создадим сообщение об ошибке, если одно из полей пустое
    requiredPar.innerText = "Все поля обязательны";
    requiredPar.style.color = "red";
  } else if (
    //проверим, что имя содержит от 2-х до 24-х символов и только буквы
    inputName.value.length < 2 ||
    inputName.value.length > 24 ||
    !nameRegex.test(inputName.value)
  ) {
    requiredPar.innerText =
      "Имя должно быть от 2-х до 24-х символов и содержать только буквы";
    requiredPar.style.color = "red";
  } else if (
    //проверим, что e-mail содержит минимум 7 символов и '@'
    inputEmail.value.length < 7 ||
    !inputEmail.value.includes("@")
  ) {
    requiredPar.innerText =
      "E-mail должен состоять минимум из 7-ми символов и обязательно содержать @";
    requiredPar.style.color = "red";
  } else if (
    //проверим, что телефон начинается с "+", содержит от 8-ми до 12-ти символов и только числа
    inputPhoneNumber.value[0] !== "+" ||
    inputPhoneNumber.value.length < 9 ||
    inputPhoneNumber.value.length > 13 ||
    !phoneNumberRegex.test(inputPhoneNumber.value)
  ) {
    requiredPar.innerText =
      "Телефон должен начинатся с +, содержать от 8-ми до 12-ти символов и только числа";
    requiredPar.style.color = "red";
  } else if (
    //проверим, что пароль содержит от 5-то до 26-ти символов
    inputPassword.value.length < 5 ||
    inputPassword.value.length > 26
  ) {
    requiredPar.innerText = "Пароль должен содержать от 5-то до 26-ти символов";
    requiredPar.style.color = "red";
  } else {
    let isError = false;
    // проверим, существует ли пользователь с указанной почтой
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === inputEmail.value) {
        isError = true;
      }
    }
    if (isError) {
      requiredPar.innerText = "Пользователь с такой почтой уже существует!";
      requiredPar.style.color = "red";
    } else {
      // создадим объект с данными нового пользователя
      const userData = {
        name: inputName.value,
        phoneNumber: inputPhoneNumber.value,
        email: inputEmail.value,
        password: inputPassword.value,
      };
      // добавим нового пользователя в массив
      users.push(userData);
      localStorage.setItem("users", JSON.stringify(users));
      // очистим поля формы
      inputName.value = "";
      inputPhoneNumber.value = "";
      inputEmail.value = "";
      inputPassword.value = "";
      // создадим сообщение о регистрации
      requiredPar.innerText = "Вы успешно зарегистрировались";
      requiredPar.style.color = "green";
    }
  }
  // выведем сообщение об ошибке или успехе
  document.body.appendChild(requiredPar);
});
// Напишем скрипт авторизации:
const loginInputEmail = document.querySelector(".emailLogin");
const loginInputPassword = document.querySelector(".passwordLogin");
const loginBtn = document.querySelector(".login");
// создадим обработчик события для кнопки авторизации
loginBtn.addEventListener("click", () => {
  let isLoginError = true;
  // проверим, что пользователь с таким именем и паролем существует
  for (let i = 0; i < users.length; i++) {
    if (
      loginInputEmail.value === users[i].email &&
      loginInputPassword.value === users[i].password
    ) {
      isLoginError = false;
    }
  }
  if (isLoginError) {
    // проверим форму на пустые поля
    if (loginInputEmail.value === "" || loginInputPassword.value === "") {
      // создадим сообщение об ошибке, если одно из полей пустое
      requiredPar.innerText = "Необходимо заполнить все поля";
      requiredPar.style.color = "red";
    } else {
      // создадим сообщение об ошибке, если такого пользователя не существует
      requiredPar.innerText = "Вы ввели неверную почту или пароль";
      requiredPar.style.color = "red";
    }
  } else {
    // очистим поля формы
    loginInputEmail.value = "";
    loginInputPassword.value = "";
    // создадим сообщение об авторизации
    requiredPar.innerText = "Вы успешно вошли";
    requiredPar.style.color = "green";
    // очистим содержимое body и создадим кнопку выхода
    body.innerHTML = "";
    const btnLogout = document.createElement("button");
    btnLogout.innerText = "Logout";
    body.append(btnLogout);
  }
  document.body.appendChild(requiredPar);
});
