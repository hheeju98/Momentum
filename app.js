const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick(){ 
    console.log(loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);