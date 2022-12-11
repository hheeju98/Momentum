const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo){
const li = document.createElement("li");
const span = document.createElement("span");
li.appendChild(span);
span.innerText = newTodo;
toDoList.appendChild(li);
}

function handleToDoSubmit(event){
event.preventDefault();
const newTodo = toDoInput.value; // 비우기전에 newTodo에 값 저장
toDoInput.value = "";
paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);