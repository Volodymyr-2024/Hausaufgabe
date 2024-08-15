const createForm = document.querySelector("#create-form");

const getTodos = () => {
  const localStorageTodos = JSON.parse(localStorage.getItem("todosStorage"));
  return localStorageTodos;
};
const createTodo = (e) => {
  e.preventDefault();
  const startDate = document.querySelector("#startDate").value;
  const description = document.querySelector("#description").value;
  const localStorageTodos = getTodos();
  const newTodo = {
    // создаем случайный id, чтобы иметь возможность без проблем найти необходимую запись
    id: "todo_" + Math.random().toString(16).slice(2),
    // текущая дата
    createdAt: new Date(),
    startDate,
    description,
    done: false,
  };

  //  проверка на то, что localStorage имеет такой объект и он является массивом
  if (localStorageTodos && Array.isArray(localStorageTodos)) {
    // если условие истинно, добавляем новую запись в массив и записываем в localStorage
    localStorageTodos.push(newTodo);
    localStorage.setItem("todosStorage", JSON.stringify(localStorageTodos));
  } else {
    // если условие ложно, записываем массив с одним элементов в localStorage
    localStorage.setItem("todosStorage", JSON.stringify([newTodo]));
  }
  // вызываем функцию рендера для обновления списка
  renderTodos();
};

//Изменение статуса кнопок списка дел
const filterButtons = document.querySelectorAll(".split-button_button");
let currentFilter = "all"; // По умолчанию выбран фильтр "Все"

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) =>
      btn.classList.remove("split-button_button--active")
    );
    button.classList.add("split-button_button--active");
    currentFilter = button.id.replace("filter-", "");
    renderTodos(); // Перерисовываем список дел в зависимости от текущего фильтра
  });
});

const renderTodos = () => {
  const localStorageTodos = getTodos();
  if (localStorageTodos && Array.isArray(localStorageTodos)) {
    //получаем контейнер элементов
    const container = document.querySelector(".todo-list");
    //обнуляем содержимое
    container.innerHTML = "";
    //проходим по массиву элементов и по одному добавляем в контейнер
    localStorageTodos
    //Фильтруем список дел по классу  
    .filter((todo) => {
        if (currentFilter === "active") return !todo.done;
        if (currentFilter === "done") return todo.done;
        return true; // Если фильтр "Все"
      })

      .forEach((todo) => {
        const startDate = new Date(todo.startDate).toLocaleString("ru-RU", {
          day: "numeric",
          month: "long",
          hour: "numeric",
          minute: "numeric",
        });
        const id = todo.id;
        //разметка элемента
        container.insertAdjacentHTML(
          "beforeend",
          ` 
    <li class="todo-block">
     <label class="checkbox" for="${id}" 
     onclick="toggleTodoDone('${id}')">
      <input type="checkbox" name="${id}" id="${id}" ${
            todo.done ? "checked" : ""
          }/>
     <span class="material-symbols-rounded checkbox_check-icon">
      check 
      </span>
       </label>
        <div class="todo-block_data">
         <p class="todo-block_date">${startDate}</p> 
         <h3 class="todo-block_title">${todo.description}</h3> 
         </div>
         <span class="material-symbols-rounded" onclick="deleteTodo('${id}')">close</span>
          </li> 
          `
        );
      });
  }
};
const toggleTodoDone = (todoId) => {
  const localStorageTodos = getTodos();
  //проверка на то, что localStorage имеет такой объект и он является массивом
  if (localStorageTodos && Array.isArray(localStorageTodos)) {
    //фильтруем массив, удаляя необходимую запись
    const todoIndex = localStorageTodos.findIndex((todo) => todo.id === todoId);
    //присваиваем значение противоположное текущему
    localStorageTodos[todoIndex].done = !localStorageTodos[todoIndex].done;
    //записываем новый массив в localStorage
    localStorage.setItem("todosStorage", JSON.stringify(localStorageTodos));
  }
  //вызываем функцию рендера для обновления списка
  renderTodos();
};
// Удаление элемента:
const deleteTodo = (todoId) => {
  //получаем текущее значение из localStorage
  const localStorageTodos = getTodos();
  //проверка на то, что localStorage имеет такой объект и он является массивом
  if (localStorageTodos && Array.isArray(localStorageTodos)) {
    //фильтруем массив, удаляя необходимую запись
    const newTodos = localStorageTodos.filter((todo) => todo.id !== todoId);
    //записываем новый массив в localStorage
    localStorage.setItem("todosStorage", JSON.stringify(newTodos));
  }
  //вызываем функцию рендера для обновления списка
  renderTodos();
};

createForm.addEventListener("submit", (e) => {
  createTodo(e);
});
renderTodos();
