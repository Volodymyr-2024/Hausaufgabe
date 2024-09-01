// Реализовать функцию, которая будет создавать элементы списка на основе массива данных.
// Каждый элемент списка должен содержать кнопку, при нажатии на которую будет происходить удаление этого элемента из списка.
const array = ["item1", "item2", "item3", "item4", "item5"];
const container = document.querySelector(".container");
function createElelment(arr) {
  const ul = document.createElement("ul");
  arr.map((item) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    li.innerHTML = item;
    button.innerText = "Удалить элемент";
    li.appendChild(button);
    ul.appendChild(li);
    container.append(ul);
    button.addEventListener("click", function () {
      li.remove();
    });
  });
}
createElelment(array);
