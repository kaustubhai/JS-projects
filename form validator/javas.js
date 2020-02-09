const form = document.getElementById("formm");
const un = document.getElementById("username");
const em = document.getElementById("email");
const p1 = document.getElementById("pass1");
const p2 = document.getElementById("pass2");

function showError(input, message) {
  const formctrl = input.parentElement;
  formctrl.className = "formp error";
  const m = formctrl.querySelector("small");
  m.innerText = message;
}
function showSuccess(input) {
  const formctrl = input.parentElement;
  formctrl.className = "formp success";
}
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
form.addEventListener("submit", function(e) {
  e.preventDefault();
  if (un.value === "") {
    showError(un, "Enter a proper username");
  } else {
    showSuccess(un);
    console.log(un.value);
  }

  if (em.value === "") {
    showError(em, "Enter a EmailID");
  } else if (!validateEmail(em.value)) {
    showError(em, "Enter a proper EmailID");
  } else {
    showSuccess(em);
  }

  if (p1.value === "") {
    showError(p1, "Enter a proper Password");
  } else {
    showSuccess(p1);
  }

  if (p2.value === "") {
    showError(p2, "Enter same password again");
  } else {
    showSuccess(p2);
  }
});
