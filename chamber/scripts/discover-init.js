// discover-init.js — sets footer year and last-modified date on discover.html
(function () {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    const modSpan = document.getElementById('last-modified-date');
    if (modSpan) {
        modSpan.textContent = document.lastModified;
    }
})();
