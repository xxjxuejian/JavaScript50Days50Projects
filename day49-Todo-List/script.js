const inputEl = document.getElementById("input");
const todosEl = document.getElementById("todos");
const formEl = document.getElementById("form");

// 根据从LocalStorage中保存的todos,创建todos
const todos = JSON.parse(localStorage.getItem("todos"));
if (todos) {
  todos.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item.text;
    li.classList.add("todo");
    if (item.completed) {
      li.classList.add("completed");
    }
    todosEl.appendChild(li);
  });
}

// 阻止表单的默认行为
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
});

// 按下回车键的时候，创建一个todo,并更新LS
inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let text = inputEl.value.trim();
    if (text !== "") {
      const li = document.createElement("li");
      li.innerText = text;
      li.classList.add("todo");
      todosEl.appendChild(li);
      inputEl.value = "";
    }

    updateLS();
  }
});

// todo上点击或者完成，或者取消完成
todosEl.addEventListener("click", (e) => {
  if (e.target.nodeName === "LI") {
    e.target.classList.toggle("completed");
    updateLS();
  }
});

// 右键菜单，删除todo
todosEl.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  e.target.remove();
  updateLS();
});

// 使用LocalStorage保存todos,每次需要更新
function updateLS() {
  const todoElArr = document.querySelectorAll(".todo");
  const todoList = [];

  todoElArr.forEach((item) => {
    todoList.push({
      text: item.textContent,
      completed: item.classList.contains("completed"),
    });
  });

  // console.log(todoList);
  localStorage.setItem("todos", JSON.stringify(todoList));
}
