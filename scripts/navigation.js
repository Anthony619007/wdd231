const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.classList.toggle("open", isOpen);
    menuButton.setAttribute("aria-expanded", isOpen);
});
