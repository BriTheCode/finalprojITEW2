 // Pre-fill email from localStorage if available
 const storedEmail = localStorage.getItem("UserData")
 ? JSON.parse(localStorage.getItem("UserData")).email
 : "";
if (storedEmail) {
 document.getElementById("email").value = storedEmail;
}

// Add event listener for form submission
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function (e) {
 e.preventDefault();

 // Retrieve user credentials from localStorage
 const storedUserData = localStorage.getItem("UserData")
   ? JSON.parse(localStorage.getItem("UserData"))
   : null;

 // Retrieve input values
 const email = document.getElementById("email").value;
 const password = document.getElementById("password").value;

 // Validate input values against stored credentials
 if (
   storedUserData &&
   email === storedUserData.email &&
   password === storedUserData.password
 ) {
   alert("Login successful!");
   // Redirect to dashboard or another page after successful login
   window.location.href = "homepage.html";
 } else {
   alert("Invalid email or password. Please try again.");
 }
});