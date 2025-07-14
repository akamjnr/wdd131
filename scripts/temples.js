// Set current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Hamburger menu toggle
const toggleButton = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".navigation");

toggleButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    toggleButton.innerHTML = navMenu.classList.contains("show") ? "&#10006;" : "&#9776;";
});
