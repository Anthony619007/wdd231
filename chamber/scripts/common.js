document.addEventListener("DOMContentLoaded", () => {
    // Mobile Drawer Navigation Controller
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            menuToggle.innerHTML = navMenu.classList.contains("open") ? "&#x2715;" : "&#9776;";
        });
    }

    // Automated Date Timestamp Metrics Hooks (footer, all pages)
    const currentYearEl = document.getElementById("current-year");
    const lastModifiedEl = document.getElementById("last-modified-date");

    if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();
    if (lastModifiedEl) lastModifiedEl.textContent = document.lastModified;
});
