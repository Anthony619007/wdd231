document.addEventListener("DOMContentLoaded", () => {
    // Stamp the hidden timestamp field the moment the form loads
    const timestampField = document.getElementById("timestamp");
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }

    // Wire every "View Benefits" / "?" button to its matching <dialog>
    const dialogButtons = document.querySelectorAll("[data-dialog]");
    dialogButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const dialog = document.getElementById(btn.dataset.dialog);
            if (dialog && typeof dialog.showModal === "function") {
                dialog.showModal();
            }
        });
    });

    // Wire every dialog's close button
    const closeButtons = document.querySelectorAll(".benefits-dialog .dialog-close");
    closeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.closest("dialog").close();
        });
    });
});
