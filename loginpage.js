const form = document.getElementById("form");
const fname = document.getElementById("firstname");
const lname = document.getElementById("lastname");
const email = document.getElementById("email");
const pass = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  let fn = fname.value.trim();
  let ln = lname.value.trim();
  let em = email.value.trim();
  let ps = pass.value.trim();

  if (!validateName(fn)) {
    displayError("Invalid first name.");
    return;
  }

  if (!validateName(ln)) {
    displayError("Invalid last name.");
    return;
  }

  if (!validateEmail(em)) {
    displayError("Invalid email address.");
    return;
  }

  if (!validatePassword(ps)) {
    displayError(
      "Password must be at least 6 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
    );
    return;
  }

  // Store data in localStorage
  const userData = {
    firstname: fn,
    lastname: ln,
    email: em,
    password: ps,
  };
  console.log(userData);
  localStorage.setItem("UserData", JSON.stringify(userData));

  // Display success message
  alert(
    "Registration successful! Data saved to localStorage:\n" +
      JSON.stringify(userData, null, 2)
  );


  // Redirect to login page
  window.location.href = "index.html";
}

function validateName(name) {
  return /^[a-zA-Z]+$/.test(name);
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()]).{6,}$/.test(
    password
  );
}

function displayError(message) {
  alert(message);
}