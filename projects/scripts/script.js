// MENU TOGGLE
const menu = document.getElementById("menu");
const nav = document.getElementById("nav-links");

menu.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// FOOTER
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;