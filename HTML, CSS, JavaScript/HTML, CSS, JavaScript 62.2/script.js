const modal = document.getElementById("modal");
const openButton = document.getElementById("open_button");
const closeButton = document.getElementById("close_button");

openButton.addEventListener("click", () => {
  modal.showModal();
});

closeButton.addEventListener("click", () => {
  modal.close();
});

// К выполненному проекту “Модальное окно dialog” необходимо добавить функционал закрытия модального окна при клике на свободное пространство вне модального окна.
// Для выполнения данного задания необходимо использовать код с урока.

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});
