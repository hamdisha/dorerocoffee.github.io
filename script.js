// Selecting the hamburger menu and the navigation menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Adding a click event listener to the hamburger menu
hamburger.addEventListener("click", () => {
    // Toggles the 'active' class on both the hamburger and the menu
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Adding a click event listener to each navigation link
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    // When a link is clicked, remove the 'active' class to close the menu
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));