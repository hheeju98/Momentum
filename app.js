const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event){ 
  event.preventDefault(); // 브라우저의 디폴트 동작 막아줌
  console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);