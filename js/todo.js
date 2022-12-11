const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event){
event.preventDefault();
const newTodo = toDoInput.value; // 비우기전에 newTodo에 값 저장
toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);