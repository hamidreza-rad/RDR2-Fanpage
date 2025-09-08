// search bar
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".character-card");

searchInput.addEventListener("input", function() {
  let value = searchInput.value.toLowerCase();

  cards.forEach(card => {
    let name = card.querySelector("h2").textContent.toLowerCase();
    if (name.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// login system
const authBtn = document.getElementById("authBtn");
const loginBox = document.getElementById("loginBox");
const loginForm = document.getElementById("loginForm");
const welcomeMessage = document.getElementById("welcomeMessage");

let isLoggedIn = false;

authBtn.addEventListener("click", function() {
  if (!isLoggedIn) {
    loginBox.style.display = "block";
  } else {
    isLoggedIn = false;
    welcomeMessage.textContent = "";
    authBtn.textContent = "Login / Sign in";
  }
});

loginForm.addEventListener("submit", function(e) {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (username && email && password) {
    isLoggedIn = true;
    welcomeMessage.textContent = "🤠 Welcome, " + username + "!";
    loginBox.style.display = "none";
    authBtn.textContent = "Logout";
  } else {
    alert("Please fill all fields!");
  }
});