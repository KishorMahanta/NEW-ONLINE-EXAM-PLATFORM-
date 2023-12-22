const form = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("new password").value;

  
  if (username === "admin" && password === "1234") {
    window.location.href = "homepage.html";
  } else {
    errorMessage.textContent = "Invalid username or password!";
    errorMessage.style.display = "block";
  }
});
