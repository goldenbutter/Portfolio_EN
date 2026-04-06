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
     ACTIVE NAV LINK ON SCROLL
  ----------------------------------- */
  const sections = document.querySelectorAll("section[id], div[id='home']");
  const navLinks = document.querySelectorAll(".nav-link");

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === "#" + id);
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach((sec) => sectionObserver.observe(sec));

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

    function formatDate() {
      const locale = document.documentElement.lang === "nb" ? "nb-NO" : "en-US";
      updatedSpan.textContent = modified.toLocaleDateString(locale, {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    }

    formatDate();
    document.addEventListener("languagechange", formatDate);
  }

  /* -----------------------------------
     SCROLL TO TOP BUTTON
  ----------------------------------- */
  const scrollBtn = document.getElementById("scrollTopBtn");

  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

});