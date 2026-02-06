/* -----------------------------------
   DARK / LIGHT MODE TOGGLE
   Saves user preference in LocalStorage
----------------------------------- */

const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  root.classList.add("light");
  toggleBtn.textContent = "☀️";
}

// Toggle theme on click
toggleBtn.addEventListener("click", () => {
  root.classList.toggle("light");

  const isLight = root.classList.contains("light");
  toggleBtn.textContent = isLight ? "☀️" : "🌙";

  localStorage.setItem("theme", isLight ? "light" : "dark");
});