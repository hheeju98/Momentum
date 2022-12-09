const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick(){ 
    const username = loginInput.value;
  console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);