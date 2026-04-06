(function () {
  var dot = document.getElementById("cursor-dot");
  var ring = document.getElementById("cursor-ring");
  if (!dot || !ring || matchMedia("(hover: none)").matches) return;

  // Dot follows cursor instantly via mousemove
  document.addEventListener("mousemove", function (e) {
    dot.style.transform = "translate(" + e.clientX + "px," + e.clientY + "px)";
    // Ring follows via CSS transition (0.3s ease-out = trailing effect)
    ring.style.transform = "translate(" + e.clientX + "px," + e.clientY + "px)";

    if (!dot.classList.contains("visible")) {
      dot.classList.add("visible");
      ring.classList.add("visible");
    }
  });

  // Hide when cursor leaves window
  document.addEventListener("mouseout", function (e) {
    if (!e.relatedTarget) {
      dot.classList.remove("visible");
      ring.classList.remove("visible");
    }
  });

  // Grow ring on interactive elements
  document.addEventListener("mouseover", function (e) {
    if (e.target.closest("a, button, input, textarea, .card-link")) {
      ring.classList.add("hover");
    }
  });

  document.addEventListener("mouseout", function (e) {
    if (e.target.closest("a, button, input, textarea, .card-link")) {
      ring.classList.remove("hover");
    }
  });
})();
