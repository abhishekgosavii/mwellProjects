// document.getElementById("loginForm").addEventListener("submit", function(event) {
//     event.preventDefault();
    
//     // Get input values
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;
  
//     // Check if username and password are correct (Demo: username = "user", password = "password")
//     if (username === "user" && password === "password") {
//       document.getElementById("loginMessage").innerText = "Congo";
//       // Redirect to a new page or perform other actions after successful login
//       // Example: window.location.href = "dashboard.html";
//     } else {
//       document.getElementById("loginMessage").innerText = "Incorrect username or password.";
//     }
//   });
  
function validateForm(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-msg');

  // Replace this with your own validation logic
  if (username === 'mwell' && password === '123') {
    // For demo purposes, assuming a successful login
    // errorMessage.textContent = 'Login successful!';
    // errorMessage.style.color = 'green';
    alert("Congrats login success.")
    window.location.href = "dashboard.html";
    // You can redirect the user to a new page or perform other actions after successful login
  } else {
    // errorMessage.textContent = 'Invalid username or password';
    alert("Incorrect Password")
  }
}