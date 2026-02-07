document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------------
     SCROLL REVEAL
  ----------------------------------- */
  const animated = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  animated.forEach((el) => observer.observe(el));

  /* -----------------------------------
     FOOTER: YEAR + LAST UPDATED
  ----------------------------------- */
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const updatedSpan = document.getElementById("last-updated");
  if (updatedSpan) {
    let modified = new Date(document.lastModified);

    if (isNaN(modified.getTime())) {
      modified = new Date();
    }

    updatedSpan.textContent = modified.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }

});