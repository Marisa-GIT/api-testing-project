const users = [
  { email: "user@test.com", password: "123456", role: "user" },
  { email: "admin@test.com", password: "123456", role: "admin" }
];

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const foundUser = users.find(
    user => user.email === email && user.password === password
  );

  if (foundUser) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", foundUser.role);

    window.location.replace(
      foundUser.role === "admin"
        ? "frontend/admin-dashboard.html"
        : "frontend/user-dashboard.html"
    );
  } else {
    alert("Invalid credentials");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginBtn = document.getElementById("loginBtn");

  function validateForm() {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const isValidEmail = email.includes("@");
    const isValidPassword = password.length >= 6;

    loginBtn.disabled = !(isValidEmail && isValidPassword);
  }

  emailInput.addEventListener("input", validateForm);
  passwordInput.addEventListener("input", validateForm);
});
