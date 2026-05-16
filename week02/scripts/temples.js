document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu").querySelector("ul");

hamburger.addEventListener("click", () => {
  if (navMenu.style.display === "flex" || navMenu.style.display === "block") {
    navMenu.style.display = "none";
    hamburger.textContent = "☰"; // hamburger icon
  } else {
    navMenu.style.display = "block";
    hamburger.textContent = "✖"; // close icon
  }
});
