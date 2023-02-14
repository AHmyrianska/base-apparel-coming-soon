const form = document.querySelector("form");
const button = document.querySelector("button");
const email = document.querySelector("input[type=email]");
const errorMessage = document.querySelector(".error-text");
const errorIcon = document.querySelector(".error-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  email.blur();
  let emailValue = email.value;

  if (validateEmail(emailValue)) {
    errorMessage.classList.add("hidden");
    errorIcon.classList.add("hidden");
    email.classList.remove("error-border");
    form.reset();
   } else {
    errorMessage.classList.remove("hidden");
    errorIcon.classList.remove("hidden");
    email.classList.add("error-border");
  }
});

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
