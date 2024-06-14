let userName = document.getElementById("user-name");
let userEmail = document.getElementById("user-email");
let userPassword = document.getElementById("user-password");
let userMassage = document.getElementById("userMassage");
let buttonSignUp = document.getElementById("btn-signup");
let validEmail;

let users = [];

if (JSON.parse(localStorage.getItem("all users") != null)) {
  users = JSON.parse(localStorage.getItem("all users"));
}

function getUsers() {
  let userDetails = {
    name: userName.value,
    email: userEmail.value,
    password: userPassword.value,
  };
  checkInputsEmpty();
  RegexValidEml();
  check();
  if (
    check() == false &&
    checkInputsEmpty() == false &&
    RegexValidEml() == true
  ) {
    users.push(userDetails);
    validEmail = `<span class="text-success">Success</span>`;
    userMassage.innerHTML = validEmail;
    buttonSignUp.setAttribute("href", "index.html");
    localStorage.setItem("all users", JSON.stringify(users));
  }
}

function check() {
  let check = false;
  for (i = 0; i < users.length; i++) {
    if (users[i].email == userEmail.value) {
      validEmail = `<span class="text-danger">email already exists</span>`;
      userMassage.innerHTML = validEmail;
      check = true;
    }
  }
  return check;
}

function checkInputsEmpty() {
  let check = false;
  if (
    userName.value == "" ||
    userEmail.value == "" ||
    userPassword.value == ""
  ) {
    validEmail = `<span class="text-danger">All inputs is required</span>`;
    userMassage.innerHTML = validEmail;
    check = true;
  }
  return check;
}

function RegexValidEml() {
  let checkReg = false;
  let validEmailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (validEmailRegex.test(userEmail.value) == true) {
    checkReg = true;
  } else {
    validEmail = `<span class="text-danger">Invalid email</span>`;
    userMassage.innerHTML = validEmail;
  }
  return checkReg;
}

buttonSignUp.addEventListener("click", getUsers);
