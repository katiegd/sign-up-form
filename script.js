const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const passwordError = document.getElementById("passwordError");
const phone = document.getElementById("phone");

function validatePassword() {
  if (confirmPassword.value !== password.value) {
    passwordError.textContent = "Passwords do not match.";
  } else {
    passwordError.textContent = "";
  }
}

password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validatePassword);

phone.addEventListener("input", function () {
  let phoneValue = this.value.replace(/\D/g, "");
  if (phoneValue.length > 0) {
    phoneValue = phoneValue.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  }
  this.value = phoneValue;
});
