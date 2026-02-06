document.addEventListener("DOMContentLoaded", () => {
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
    {
      threshold: 0.15
    }
  );

  animated.forEach((el) => observer.observe(el));
});

/* -----------------------------------
   FOOTER: YEAR + LAST UPDATED
----------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  // Dynamic Year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Last Updated (GitHub Pages friendly)
  const updatedSpan = document.getElementById("last-updated");
  if (updatedSpan) {
    let modified = new Date(document.lastModified);

    // Fallback if browser returns invalid date
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