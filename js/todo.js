const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

const toDos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

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
toDos.push(newTodo);
paintToDo(newTodo);
saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){
    console.log("hello", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach((item)=> console.log("hello", item)); // 각각의 아이템 마다 실행
}