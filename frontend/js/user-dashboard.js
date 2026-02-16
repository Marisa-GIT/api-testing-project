document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const role = localStorage.getItem("role");

  if (isLoggedIn !== "true" || role !== "user") {
    window.location.replace("../index.html");
  }

  const logoutBtn = document.querySelectorAll(".logout-btn");

  logoutBtn.forEach(btn => {
    btn.addEventListener("click", () => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("role");
      window.location.replace("../index.html");
    });
  });
});
/*
document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const role = localStorage.getItem("role");

  if (isLoggedIn !== "true" || role !== "user") {
    window.location.replace("../index.html");
  }

  const logoutBtn = document.querySelectorAll(".logout-btn");

  logoutBtn.forEach(btn => {
    btn.addEventListener("click", () => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("role");
      window.location.replace("../index.html");
    });
  });
});

<hr class="my-2 border-[#e5e7eb] dark:border-[#2d3748]"/>
<a class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#ef4444] hover:bg-[#fef2f2] dark:hover:bg-[#2d1a1a] transition-colors" href="../index.html">
<span class="material-symbols-outlined">logout</span>
<span class="text-sm font-medium">Logout</span>
</a>
*/

