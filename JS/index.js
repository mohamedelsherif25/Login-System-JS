let emailLogin = document.getElementById("input-email-login");
let passwordLogin = document.getElementById("input-password-login");
let buttonLogin = document.getElementById("btn-login-tohome");
let massageForUser = document.getElementById("errorMassage");

let users = [];

if (JSON.parse(localStorage.getItem("all users") != null)) {
  users = JSON.parse(localStorage.getItem("all users"));
}

function checkLogin() {
  let massageError;
  let checkEmailAndPass = false;
  for (i = 0; i < users.length; i++) {
    if (
      users[i].email == emailLogin.value &&
      users[i].password == passwordLogin.value
    ) {
      buttonLogin.setAttribute("href", "welcome.page.html");
      checkEmailAndPass = true;
      localStorage.setItem("real user", JSON.stringify(users[i]));
    }
  }
  if (checkEmailAndPass == false) {
    if (users.length == 0) {
      massageError = `<span>Please register first</span>`;
      massageForUser.innerHTML = massageError;
    } else {
      massageError = `<span>Incorrect email or password</span>`;
      massageForUser.innerHTML = massageError;
    }
  }
}

buttonLogin.addEventListener("click", checkLogin);
