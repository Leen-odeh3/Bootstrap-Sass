const form = document.querySelector(".form");
const firstNameInput = document.querySelector(".text1");
const lastNameInput = document.querySelector(".text2");
const emailInput = document.querySelector(".email");
const passwordInput = document.getElementById("passsLogin");
const confirmPasswordInput = document.getElementById("passLoginconfirm");
const togglePasswordLink = document.getElementById("togglePassword");
const toggleConfirmPasswordLink = document.getElementById("toggleConfirmPassword");

function togglePasswordVisibility(inputElement, toggleLink) {
  if (inputElement.type === "password") {
    inputElement.type = "text";
    toggleLink.innerHTML = '<i class="fa-regular fa-eye"></i>';
  } else {
    inputElement.type = "password";
    toggleLink.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
  }
}
togglePasswordLink.addEventListener("click", function (event) {
  event.preventDefault();
  togglePasswordVisibility(passwordInput, togglePasswordLink);
});

const checkbox = document.getElementById("check2");
const createAccountButton = document.querySelector(".button");

checkbox.addEventListener("change", function () {
  createAccountButton.disabled = !checkbox.checked;
});
function validateInput(inputElement, errorElement, errorMessage, regex) {
  if (inputElement.value.trim() === "") {
    errorElement.textContent = `Please enter your ${inputElement.placeholder}.`;
    errorElement.style.color = "red";
    inputElement.style.borderColor = "red";
    return false;
  } else if (regex && !regex.test(inputElement.value)) {
    errorElement.textContent = errorMessage;
    errorElement.style.color = "red";
    inputElement.style.borderColor = "red";
    return false;
  } else {
    errorElement.textContent = "";
    inputElement.style.borderColor = "";
    return true;
  }
}

firstNameInput.addEventListener("blur", function () {
  validateInput(
    firstNameInput,
    document.querySelector(".fname"),
    "First Name should only contain letters.",
    /^[A-Za-z]+$/
  );
});

lastNameInput.addEventListener("blur", function () {
  validateInput(
    lastNameInput,
    document.querySelector(".lname"),
    "Last Name should only contain letters.",
    /^[A-Za-z]+$/
  );
});

emailInput.addEventListener("blur", function () {
  validateInput(
    emailInput,
    document.querySelector(".email-error"),
    "Please enter a valid Email.",
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
  );
});

passwordInput.addEventListener("blur", function () {
  validateInput(
    passwordInput,
    document.querySelector(".des"),
    "Please enter a Password."
  );

});

confirmPasswordInput.addEventListener("blur", function () {
  if (
    confirmPasswordInput.value.trim() !== "" &&
    confirmPasswordInput.value !== passwordInput.value
  ) {
    document.querySelector(".confirm").textContent =
      "Sorry, the provided password does not match the required constraints.";
    document.querySelector(".confirm").style.color = "red";
    confirmPasswordInput.style.borderColor = "red";
  } else {
    document.querySelector(".confirm").textContent = "";
    confirmPasswordInput.style.borderColor = "";
  }
});

form.addEventListener("submit", function (event) {
  let hasError = false;

  if (firstNameInput.value.trim() === "") {
    event.preventDefault();
    document.querySelector(".fname").textContent =
      "Please enter your First Name.";
    document.querySelector(".fname").style.color = "red";
    firstNameInput.style.borderColor = "red";
    hasError = true;
  } else {
    document.querySelector(".fname").textContent = "";
    firstNameInput.style.borderColor = "";
    if (!/^[A-Za-z]+$/.test(firstNameInput.value)) {
      event.preventDefault();
      document.querySelector(".fname").textContent =
        "First Name should only contain letters.";
      document.querySelector(".fname").style.color = "red";
      firstNameInput.style.borderColor = "red";
      hasError = true;
    }
  }

  if (lastNameInput.value.trim() === "") {
    event.preventDefault();
    document.querySelector(".lname").textContent =
      "Please enter your Last Name.";
    document.querySelector(".lname").style.color = "red";
    lastNameInput.style.borderColor = "red";
    hasError = true;
  } else {
    document.querySelector(".lname").textContent = "";
    lastNameInput.style.borderColor = "";
    if (!/^[A-Za-z]+$/.test(lastNameInput.value)) {
      event.preventDefault();
      document.querySelector(".lname").textContent =
        "Last Name should only contain letters.";
      document.querySelector(".lname").style.color = "red";
      lastNameInput.style.borderColor = "red";
      hasError = true;
    }
  }

  if (emailInput.value.trim() === "") {
    event.preventDefault();
    document.querySelector(".email-error").textContent =
      "Please enter your Email.";
    document.querySelector(".email-error").style.color = "red";
    emailInput.style.borderColor = "red";
    hasError = true;
  } else {
    document.querySelector(".email").textContent = "";
    emailInput.style.borderColor = "";
  }

  if (passwordInput.value.trim() === "") {
    event.preventDefault();
    document.querySelector(".des").textContent = "Please enter a Password.";
    document.querySelector(".des").style.color = "red";
    passwordInput.style.borderColor = "red";
    hasError = true;
  }

  if (confirmPasswordInput.value.trim() === "") {
    event.preventDefault();
    document.querySelector(".confirm").textContent =
      "Please confirm your Password.";
    document.querySelector(".confirm").style.color = "red";
    confirmPasswordInput.style.borderColor = "red";
    hasError = true;
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    event.preventDefault();
    document.querySelector(".confirm").textContent =
      "Sorry, the provided password does not match the required constraints.";
    document.querySelector(".confirm").style.color = "red";
    confirmPasswordInput.style.borderColor = "red";
    hasError = true;
  } else {
    document.querySelector(".confirm").textContent = "";
    confirmPasswordInput.style.borderColor = "";
  }

  if (hasError) {
    event.preventDefault();
  }
});

passwordInput.addEventListener('blur', function () {
    const password = passwordInput.value.trim();
    const errorElement = document.querySelector('.des');

    if (password === '') {
        errorElement.textContent = "Please enter a Password.";
        errorElement.style.color = 'red';
    } else if (password.length < 8) {
        errorElement.textContent = "Password must be at least 8 characters long.";
        errorElement.style.color = 'red';
    } else if (!/[A-Z]/.test(password)) {
        errorElement.textContent = "Password must include at least 1 uppercase letter.";
        errorElement.style.color = 'red';
    } else if (!/[0-9]/.test(password)) {
        errorElement.textContent = "Password must include at least 1 number.";
        errorElement.style.color = 'red';
    } else if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
        errorElement.textContent = "Password must include at least 1 special character.";
        errorElement.style.color = 'red';
    } else {
        errorElement.textContent = "";
    }
});
