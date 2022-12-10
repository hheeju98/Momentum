const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){ 
  event.preventDefault(); // 브라우저의 디폴트 동작 막아줌(새로고침 막음)
 loginForm.classList.add("hidden");
 const username = loginInput.value;
 localStorage.setItem(USERNAME_KEY, username);
 paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    // show the form
}else{
    paintGreetings(savedUsername);
    // show the greetings
}


