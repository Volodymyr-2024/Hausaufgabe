// Используя синтаксис async/await отправить get запрос на https://jsonplaceholder.typicode.com/todos/1. Результат вывести в консоль.
async function getRequest(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Ошибка при запросе");
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error("Ошибка при получении данных", err);
  }
}
getRequest("https://jsonplaceholder.typicode.com/todos/1");

// Используя синтаксис async/await отправить get запрос на https://jsonplaceholder.typicode.com/posts. Ответ должен содержать 10 элементов (query-параметр _limit). Результат вывести в консоль.
const getReq = async (url, limit) => {
  try {
    const response = await fetch(`${url}?_limit=${limit}`);
    if (!response.ok) {
      throw new Error("Ошибка при запросе");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Ошибка при получении данных", error);
  }
};
getReq("https://jsonplaceholder.typicode.com/posts", 10);
