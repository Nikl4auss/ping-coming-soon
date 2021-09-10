const emailContainer = document.querySelector(
  ".subscribe-form__mail-container"
);
const emailInput = document.querySelector(".subscribe-form__input");
const sendButton = document.querySelector(".subscribe-form__button");

console.log();

sendButton.onclick = () => {
  isValid(emailInput);
};

let validateEmail = (email) => {
  console.log(email.value);
  let regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let test = regex.test(email.value);
  return test;
};

let warningText = () => {
  let warning = document.createElement("span");
  warning.classList.add("warning-text");
  warning.textContent = "Please provide a valid email address";
  return warning;
};

let isValid = (email) => {
  if (!validateEmail(email)) {
    let warning = warningText();
    if (!emailContainer.contains(warning)) {
      emailContainer.append(warning);
      emailInput.classList.add("subscribe-form__input--warning");
    }
  } else {
    let warning = emailContainer.querySelector(".warning-text");
    if (warning) {
      emailContainer.removeChild(warning);
      emailInput.classList.remove("subscribe-form__input--warning");
    }
  }
};
