(function () {
  var btn = document.getElementById("hamburger");
  var menu = document.querySelector(".nav-links");
  if (!btn || !menu) return;

  function close() {
    btn.classList.remove("open");
    menu.classList.remove("open");
  }

  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    btn.classList.toggle("open");
    menu.classList.toggle("open");
  });

  // Close menu when a nav link is clicked
  menu.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", close);
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (menu.classList.contains("open") && !menu.contains(e.target)) {
      close();
    }
  });
})();
