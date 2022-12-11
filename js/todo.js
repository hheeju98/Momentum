const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event){
const li = event.target.parentElement; // target = 클릭된 html element(property가지고 있음)
li.remove();
}

function paintToDo(newTodo){
const li = document.createElement("li");
const span = document.createElement("span");
span.innerText = newTodo;
const button = document.createElement("button");
button.innerText = "❌";
button.addEventListener("click", deleteToDo);
li.appendChild(span);
li.appendChild(button);
toDoList.appendChild(li);
}

function handleToDoSubmit(event){
event.preventDefault();
const newTodo = toDoInput.value; // 비우기전에 newTodo에 값 저장
toDoInput.value = "";
paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);