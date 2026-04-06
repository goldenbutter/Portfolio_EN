(function () {
  if (matchMedia("(hover: none)").matches) return;

  var MAX_ANGLE = 25;

  document.querySelectorAll(".btn").forEach(function (btn) {
    btn.addEventListener("mousemove", function (e) {
      var rect = btn.getBoundingClientRect();
      // -1 to 1 from center
      var x = (e.clientX - rect.left) / rect.width * 2 - 1;
      var y = (e.clientY - rect.top) / rect.height * 2 - 1;

      btn.style.transform =
        "perspective(300px) rotateY(" + (x * MAX_ANGLE) + "deg) rotateX(" + (-y * MAX_ANGLE) + "deg) scale(1.05)";

      // Shine follows cursor position
      var pctX = ((e.clientX - rect.left) / rect.width * 100).toFixed(0);
      var pctY = ((e.clientY - rect.top) / rect.height * 100).toFixed(0);
      btn.style.background =
        "radial-gradient(circle at " + pctX + "% " + pctY + "%, rgba(94,163,255,0.15) 0%, transparent 60%)";
    });

    btn.addEventListener("mouseleave", function () {
      btn.style.transform = "";
      btn.style.background = "";
    });
  });
})();
