/* -----------------------------------------------
   CONTACT FORM — EmailJS
   Replace the three constants below with your own
   IDs from https://dashboard.emailjs.com
----------------------------------------------- */

const EMAILJS_PUBLIC_KEY = "iJhn-jReBd1OmXEzU";
const EMAILJS_SERVICE_ID = "service_oqselp9";
const EMAILJS_TEMPLATE_ID = "template_2mq3f6v";

(function () {
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

  const form = document.getElementById("contact-form");
  if (!form) return;

  const btn = form.querySelector('button[type="submit"]');
  const btnTextKey = btn.getAttribute("data-i18n");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Disable button and show sending state
    btn.disabled = true;
    const lang = document.documentElement.lang;
    btn.textContent = lang === "nb" ? "Sender..." : "Sending...";

    // Timeout after 15 seconds
    var timeout = new Promise(function (_, reject) {
      setTimeout(function () { reject(new Error("timeout")); }, 15000);
    });

    Promise.race([
      emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form),
      timeout
    ])
      .then(function () {
        window.location.href = "thankyou.html";
      })
      .catch(function (err) {
        console.error("EmailJS error:", err);
        btn.disabled = false;
        btn.textContent = lang === "nb" ? "Send signal" : "Send Signal";
        alert(lang === "nb"
          ? "Noe gikk galt. Vennligst prøv igjen."
          : "Something went wrong. Please try again.");
      });
  });
})();
