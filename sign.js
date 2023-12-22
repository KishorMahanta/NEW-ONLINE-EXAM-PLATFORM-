const form = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const city= document.getElementById("city").value;
  const districtname = document.getElementById("districtname").value;
  const statename = document.getElementById("statename").value;
  const pincode = document.getElementById("pincode").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  
  if (username === "admin" && password === "1234") {
    window.location.href = "homepage.html";
  } else {
    errorMessage.textContent = "Invalid username or password!";
    errorMessage.style.display = "block";
  }
});
