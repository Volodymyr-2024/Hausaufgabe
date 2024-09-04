const modal = document.getElementById("modal");
const openButton = document.getElementById("open_button");
const closeButton = document.getElementById("close_button");

openButton.addEventListener("click", () => {
  modal.showModal();
});

closeButton.addEventListener("click", () => {
  modal.close();
});
modal.addEventListener("click", () => {
  modal.close();
});
