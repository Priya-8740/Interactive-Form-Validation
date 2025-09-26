const form = document.getElementById("registrationForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("formMessage");
// Utility: Validate email format
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
// Utility: Validate password strength
function isStrongPassword(pass) {
  return pass.length>= 6;
}
// Real-time validation (optional)
[username, email, password, confirmPassword].forEach(input => {
input.addEventListener("input", () =>validateField(input));
});
// Validation function
function validateField(input) {
  let valid = true;
  let msg = "";
 if (input === email && !isValidEmail(input.value)) {
    valid = false;
    msg = "Invalid email format";
  } else if (input === password && !isStrongPassword(input.value)) {
    valid = false;
    msg = "Password too weak (min 6 chars)";
  } else if (input === confirmPassword&&input.value !== password.value) {
    valid = false;
    msg = "Passwords do not match";
  }
if (valid) {
input.classList.remove("error");
input.classList.add("success");
  } else {
input.classList.remove("success");
input.classList.add("error");
  }
message.textContent = msg;
}
// On form submit
form.addEventListener("submit", (e) => {
e.preventDefault();
// Final check before submission
  if (
username.value.trim() === "" ||
!isValidEmail(email.value) ||
!isStrongPassword(password.value) ||
password.value !== confirmPassword.value
  ) {
message.textContent = "Please fix the errors before submitting.";
message.style.color = "red";
  } else {
message.textContent = "Form submitted successfully!";
message.style.color = "green";
 // Optional: Save to localStorage (for Data Storage task)
localStorage.setItem("formData", JSON.stringify({
      username: username.value,
      email: email.value
    }));
 // Reset form
form.reset();
    [username, email, password, confirmPassword].forEach(input  input.classList.remove("success"));
  }
});
