const sidebarButton = document.querySelector ('#navbar .sidebar-button');
const sidebar = document.querySelector ('#sidebar .container');
const navbar = document.querySelector ('#navbar');
const mainContainer = document.querySelector('#main .container')

sidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    navbar.classList.toggle('slide');
    mainContainer.classList.toggle('slide');
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".sidebar-list");
    const currentPath = window.location.pathname; // Mendapatkan path URL saat ini

    navLinks.forEach(link => {
        // Periksa apakah href tautan cocok dengan path URL
        if (link.getAttribute("href") === currentPath.split("/").pop()) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});