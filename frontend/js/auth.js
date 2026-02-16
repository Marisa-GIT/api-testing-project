// js/auth.js

function checkAuth(requiredRole) {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const role = localStorage.getItem("role");

    if (isLoggedIn !== "true" || role !== requiredRole) {
        window.location.replace("../index.html");
        return false;
    }
    return true;
}

function setupLogout() {
    // Usamos delegación de eventos para que siempre funcione
    document.addEventListener("click", (e) => {
        const btn = e.target.closest(".logout-btn");
        if (btn) {
            e.preventDefault();
            console.log("Cerrando sesión...");
            localStorage.clear();
            window.location.replace("../index.html");
        }
    });
}

// Ejecutamos el listener de logout automáticamente en cualquier página que cargue este script
setupLogout();