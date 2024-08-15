// Необходимо сделать запрос на https://jsonplaceholder.typicode.com/. По пути(path)  /users получить всех пользователей.
// На веб-странице для каждого пользователя отрисовать карточку и указать следующие данные:
//  id, username, email, address.city, phone и company.name. Стили добавляем произвольно.
function addUsers(user) {
  const users = document.createElement("div");
  users.className = "user_card";
  users.innerHTML = `
    <h3>${user.username}</h3>
    <p><strong>ID:</strong> ${user.id}</p>
    <p><strong>E-mail:</strong> ${user.email}</p>
    <p><strong>Address city:</strong> ${user.address.city}</p>
    <p><strong>Phone:</strong> ${user.phone}</p>
    <p><strong>Company name:</strong> ${user.company.name}</p>
    `;
  return users;
}
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      console.error("Ошибка ответа сервера");
    }
    return response.json();
  })
  .then((data) => {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    data.forEach((item) => {
      const userItem = addUsers(item);
      container.appendChild(userItem);
    });
  })
  .catch((err) => {
    console.error("Ошибка при добавлении пользователя", err)
})
