// Используя синтаксис try/catch, отправить запрос на https://jsonplaceholder.typicode.com/posts?userId=1,
// в блоке catch сделать вывод консоль сообщения об ошибке. Для проверки блока catch сделать намеренную ошибку в url запроса.
const requestApi = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Ошибка при запросе");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Ошибка при выводе данных", error.message);
  }
};
requestApi("https://jsonplaceholder.typicoDde.com/posts?userId=1");

// Написать функцию, которая делит одно число на другое, обрабатывая возможные ошибки деления на ноль.
const divideNum = (a, b) => {
  try {
    if (b === 0) {
      throw new Error("Деление на ноль невозможно");
    }
    const result = a / b;
    return console.log(result);
  } catch (error) {
    console.error("Ошибка", error.message);
  }
};
divideNum(10, 2);
divideNum(10, 0);
