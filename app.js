const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){ 
  event.preventDefault(); // 브라우저의 디폴트 동작 막아줌(새로고침 막음)
 loginForm.classList.add("hidden");
 const username = loginInput.value;
 greeting.innerText = "Hello " + username;
 greeting.innerText = `Hello ${username}`;
 
 greeting.classList.remove(HIDDEN_CLASSNAME);

}

loginForm.addEventListener("submit", onLoginSubmit);


