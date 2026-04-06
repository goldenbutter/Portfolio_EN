const translations = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.skills": "Skills",
    "nav.resume": "Resume",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Header
    "header.subtitle": "Senior Technical Consultant \u2014 Oracle / SQL / PL/SQL \u00b7 Data & ETL \u00b7 DevOps",
    "header.viewcv": "View CV",
    "header.aijourney": "\u26a1 My AI Journey",
    "header.avatar.alt": "Photo of Bithun Chatterjee",

    // Tech Stack
    "section.techstack": "Tech Stack",
    "tech.database": "Database",
    "tech.cloud": "Cloud",
    "tech.devops": "DevOps / IaC",
    "tech.backend": "Backend",
    "tech.frontend": "Frontend",
    "tech.others": "Others",

    // Resume
    "section.resume": "Resume",
    "resume.pdf.src": "assets/pdf/Resume_EN.pdf#view=fitH",
    "resume.pdf.title": "Portfolio PDF",

    // Projects
    "section.projects": "Projects",
    "project.duration": "Duration:",
    "project.github": "View on GitHub \u2192",

    "project.1.title": "Azure Cloud Migration from On\u2011Prem",
    "project.1.desc": "Migrated 5 projects from on\u2011premises to Azure Cloud using multitenant architecture and advanced storage management.",

    "project.2.title": "Matrikkel\u2011Migration",
    "project.2.desc": "Consolidated geodata from 63+ municipalities into a unified database during grid company mergers via Kartverket.",

    "project.3.title": "NRL Implementation Grid Companies",
    "project.3.desc": "Delivered nationwide NRL rollout for 50+ grid companies, enabling standardized aviation\u2011obstacle reporting.",

    "project.4.title": "Conversion of 2D to 3D Database Structures",
    "project.4.desc": "Converted 2D database structures to 3D for 7 grid companies, enabling advanced height calculations.",

    "project.5.title": "Fasit Migration from MSSQL to Oracle",
    "project.5.desc": "Migrated Fasit system from MSSQL to Oracle, improving performance and scalability by 40%.",

    "project.6.title": "Georydd Implementation for Geospatial Data Quality",
    "project.6.desc": "Implemented Georydd for high-voltage pole data validation, achieving 95%+ accuracy.",

    "project.7.title": "URL Shortener (FastAPI + Docker + Kubernetes)",
    "project.7.desc": "Client \u2192 FastAPI Backend (Python) \u2192 In\u2011Memory Storage / Redis \u2192 Kind Cluster (Kubernetes in Docker)",

    "project.8.title": "Microservice Demo (FastAPI + HTML/JS + Docker + Kubernetes)",
    "project.8.desc": "Fullstack microservice using FastAPI, HTML/JS, Docker, Docker Compose & Kubernetes.",

    "project.9.title": "Publications \u2013 Full\u2011Stack Demo (ASP.NET API + React SPA + Docker + Jenkins CI/CD)",
    "project.9.desc": "ASP.NET API + React SPA + Docker + Nginx reverse proxy + Jenkins CI/CD pipeline.",

    "project.10.title": "Multi\u2011tier Web App on AWS with EKS & Ingress (ALB)",
    "project.10.desc": "A Multi-tier Retail Store Application to demonstrate Kubernetes To Production with EKS + Terraform & GitOps With ArgoCD & GitHub Actions via Helm charts and ALB Ingress.",

    "project.11.title": "Terraform\u2011Provisioned Kubernetes Cluster (Scaling) + Sample App + Observability",
    "project.11.desc": "EKS+ AWS with a sample Go application, demonstrating infrastructure as code and container orchestration with HPA/VPA and observability with Prometheus and Grafana.",

    "project.12.title": "WordPress Memory\u2011Limit Incident \u2013 CloudLinux + LiteSpeed + PHP Handler Debugging",
    "project.12.desc": "CloudLinux LVE + LiteSpeed + ALT\u2011PHP handler conflict causing WordPress to load with 128M memory. Full root\u2011cause analysis, MU\u2011plugin fix, and performance improvement from 32% \u2192 90%.",

    "project.13.title": "Mango Juice \u2013 Interactive 3D Scroll Experience (HTML5 Canvas)",
    "project.13.desc": "A premium single-page landing site driving a 200-frame 3D animation sequence on HTML5 canvas. The scene responds in real time to both scroll position and mouse drag \u2014 no WebGL library required.",

    "project.14.title": "Golden Grocery \u2013 Full\u2011Stack Norwegian Store (REST API + Role\u2011Based Auth)",
    "project.14.desc": "Production-grade Norwegian grocery store app with a complete shopping flow from product browsing to order placement. Backed by a secure REST API with role-based authentication and a modern full-stack architecture.",

    "project.15.title": "Elvefisk Booking \u2013 Salmon Beat Demo Sites (Tr\u00f8ndelag)",
    "project.15.desc": "Demo websites for salmon beat owners in the Tr\u00f8ndelag region, showcasing direct online booking as an alternative to third-party platforms \u2014 giving beat owners full control over their reservations.",

    // Contact
    "contact.lets": "LET'S",
    "contact.connect": "CONNECT.",
    "contact.desc.html": "An AI\u2011augmented engineer who builds, orchestrates, and deploys <strong>multi\u2011agent AI systems</strong> \u2014 turning weeks of work into days. Deep expertise in <strong>databases, ETL, cloud migration, automation</strong> and end\u2011to\u2011end <strong>performance optimization</strong>.",
    "contact.cta": "Looking for someone who doesn\u2019t just use AI but architects entire agentic workflows? Let\u2019s talk.",
    "contact.label.name": "Name",
    "contact.label.email": "Email",
    "contact.label.subject": "Subject",
    "contact.label.message": "Message",
    "contact.placeholder.name": "John Doe",
    "contact.placeholder.email": "john@email.com",
    "contact.placeholder.subject": "Project Discussion",
    "contact.placeholder.message": "How can I help you?",
    "contact.send": "Send Signal",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.updated": "Last updated:",

    // Thank You page
    "thankyou.h1": "Thank You!",
    "thankyou.msg": "Your message has been successfully sent. I\u2019ll get back to you as soon as possible.",
    "thankyou.back": "\u2190 Back to Home",

    // Accessibility
    "aria.theme": "Toggle theme",
    "title.theme": "Toggle theme",
    "aria.menu": "Menu",
    "aria.scrolltop": "Scroll to top",
    "title.scrolltop": "Scroll to top",
    "aria.lang": "Bytt til norsk",
    "title.lang": "Bytt til norsk",

    // Meta
    "meta.title": "Bithun Chatterjee \u2014 Portfolio",
    "meta.description": "Portfolio of Bithun Chatterjee \u2014 Oracle, SQL, PL/SQL projects and case studies.",
    "meta.og.title": "Bithun Chatterjee \u2014 Portfolio",
    "meta.og.description": "Oracle, SQL, PL/SQL projects, dashboards & case studies."
  },

  nb: {
    // Nav
    "nav.home": "Hjem",
    "nav.skills": "Ferdigheter",
    "nav.resume": "CV",
    "nav.projects": "Prosjekter",
    "nav.contact": "Kontakt",

    // Header
    "header.subtitle": "Senior teknisk konsulent \u2014 Oracle / SQL / PL/SQL \u00b7 Data & ETL \u00b7 DevOps",
    "header.viewcv": "Se CV",
    "header.aijourney": "\u26a1 Min AI-reise",
    "header.avatar.alt": "Bilde av Bithun Chatterjee",

    // Tech Stack
    "section.techstack": "Teknologier",
    "tech.database": "Database",
    "tech.cloud": "Sky",
    "tech.devops": "DevOps / IaC",
    "tech.backend": "Backend",
    "tech.frontend": "Frontend",
    "tech.others": "Andre",

    // Resume
    "section.resume": "CV",
    "resume.pdf.src": "assets/pdf/Resume_NO.pdf#view=fitH",
    "resume.pdf.title": "CV PDF",

    // Projects
    "section.projects": "Prosjekter",
    "project.duration": "Varighet:",
    "project.github": "Se p\u00e5 GitHub \u2192",

    "project.1.title": "Azure skymigrering fra on-prem",
    "project.1.desc": "Migrerte 5 prosjekter fra lokale servere til Azure Sky ved hjelp av multitenantarkitektur og avansert lagringsadministrasjon.",

    "project.2.title": "Matrikkel-migrering",
    "project.2.desc": "Konsoliderte geodata fra 63+ kommuner i en samlet database under n\u00e6nettselskapssammensl\u00e5inger via Kartverket.",

    "project.3.title": "NRL-implementering for nettselskaper",
    "project.3.desc": "Gjennomf\u00f8rte nasjonal NRL-utrulling for 50+ nettselskaper, som muliggj\u00f8r standardisert rapportering av luftfartshindre.",

    "project.4.title": "Konvertering av 2D til 3D-databasestrukturer",
    "project.4.desc": "Konverterte 2D-databasestrukturer til 3D for 7 nettselskaper, noe som muliggj\u00f8r avanserte h\u00f8ydeberegninger.",

    "project.5.title": "Fasit-migrering fra MSSQL til Oracle",
    "project.5.desc": "Migrerte Fasit-systemet fra MSSQL til Oracle, med 40% forbedring i ytelse og skalerbarhet.",

    "project.6.title": "Georydd-implementering for geospatial datakvalitet",
    "project.6.desc": "Implementerte Georydd for validering av h\u00f8yspenningsm\u00e5stdata, med 95%+ n\u00f8yaktighet.",

    "project.7.title": "URL-forkorter (FastAPI + Docker + Kubernetes)",
    "project.7.desc": "Klient \u2192 FastAPI-backend (Python) \u2192 Minne-lagring / Redis \u2192 Kind-kluster (Kubernetes i Docker)",

    "project.8.title": "Mikrotjeneste-demo (FastAPI + HTML/JS + Docker + Kubernetes)",
    "project.8.desc": "Fullstack-mikrotjeneste med FastAPI, HTML/JS, Docker, Docker Compose og Kubernetes.",

    "project.9.title": "Publications \u2013 Full-stack demo (ASP.NET API + React SPA + Docker + Jenkins CI/CD)",
    "project.9.desc": "ASP.NET API + React SPA + Docker + Nginx omvendt proxy + Jenkins CI/CD-pipeline.",

    "project.10.title": "Flerniv\u00e5 nettapp p\u00e5 AWS med EKS og Ingress (ALB)",
    "project.10.desc": "En flerniv\u00e5 butikkapplikasjon som demonstrerer Kubernetes til produksjon med EKS + Terraform, GitOps med ArgoCD og GitHub Actions via Helm-charts og ALB Ingress.",

    "project.11.title": "Terraform-provisjonert Kubernetes-kluster (skalering) + eksempelapp + observerbarhet",
    "project.11.desc": "EKS+ AWS med en eksempel-Go-applikasjon som demonstrerer infrastruktur som kode og orkestrering av containere med HPA/VPA og observerbarhet med Prometheus og Grafana.",

    "project.12.title": "WordPress minnegrense-hendelse \u2013 CloudLinux + LiteSpeed + PHP-h\u00e5ndterer feilsøking",
    "project.12.desc": "CloudLinux LVE + LiteSpeed + ALT-PHP-h\u00e5ndteringskonflikt som f\u00f8rte til at WordPress lastet med 128M minne. Fullstendig rotårsaksanalyse, MU-plugin-fiks og ytelsesforbedring fra 32% \u2192 90%.",

    "project.13.title": "Mango Juice \u2013 Interaktiv 3D-rulleopplevelse (HTML5 Canvas)",
    "project.13.desc": "En premium landingsside som driver en 200-frames 3D-animasjonssekvens p\u00e5 HTML5 canvas. Scenen responderer i sanntid p\u00e5 b\u00e5de rulleposisjon og musedrag \u2014 uten WebGL-bibliotek.",

    "project.14.title": "Golden Grocery \u2013 Full-stack norsk nettbutikk (REST API + rollebasert autentisering)",
    "project.14.desc": "Produksjonsklar norsk dagligvareapp med komplett handleflyt fra produktblaing til ordrebehandling. Underst\u00f8ttet av et sikkert REST API med rollebasert autentisering og moderne full-stack arkitektur.",

    "project.15.title": "Elvefisk Booking \u2013 Laksebeat demo-nettsider (Tr\u00f8ndelag)",
    "project.15.desc": "Demo-nettsider for laksebeatinnehavere i Tr\u00f8ndelag-regionen, som viser direkte nettbooking som alternativ til tredjepartsplattformer \u2014 og gir innehaverne full kontroll over reservasjonene.",

    // Contact
    "contact.lets": "LA OSS",
    "contact.connect": "SNAKKE.",
    "contact.desc.html": "En AI-forsterket ingenj\u00f8r som bygger, orkestrerer og distribuerer <strong>multi-agent AI-systemer</strong> \u2014 og gj\u00f8r ukers arbeid til dager. Dyp kompetanse innen <strong>databaser, ETL, skymigrering, automatisering</strong> og ende-til-ende <strong>ytelsesoptimalisering</strong>.",
    "contact.cta": "Leter du etter noen som ikke bare bruker AI, men designer hele agentiske arbeidsflyter? La oss snakke.",
    "contact.label.name": "Navn",
    "contact.label.email": "E-post",
    "contact.label.subject": "Emne",
    "contact.label.message": "Melding",
    "contact.placeholder.name": "Ola Nordmann",
    "contact.placeholder.email": "ola@epost.no",
    "contact.placeholder.subject": "Prosjektdiskusjon",
    "contact.placeholder.message": "Hvordan kan jeg hjelpe deg?",
    "contact.send": "Send melding",

    // Footer
    "footer.rights": "Alle rettigheter forbeholdt.",
    "footer.updated": "Sist oppdatert:",

    // Thank You page
    "thankyou.h1": "Takk!",
    "thankyou.msg": "Meldingen din er sendt. Jeg tar kontakt s\u00e5 snart som mulig.",
    "thankyou.back": "\u2190 Tilbake til forsiden",

    // Accessibility
    "aria.theme": "Bytt tema",
    "title.theme": "Bytt tema",
    "aria.menu": "Meny",
    "aria.scrolltop": "Bla til toppen",
    "title.scrolltop": "Bla til toppen",
    "aria.lang": "Switch to English",
    "title.lang": "Switch to English",

    // Meta
    "meta.title": "Bithun Chatterjee \u2014 Portef\u00f8lje",
    "meta.description": "Portef\u00f8lje til Bithun Chatterjee \u2014 Oracle, SQL, PL/SQL-prosjekter og casestudier.",
    "meta.og.title": "Bithun Chatterjee \u2014 Portef\u00f8lje",
    "meta.og.description": "Oracle, SQL, PL/SQL-prosjekter, dashbord og casestudier."
  }
};

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  // Update html lang attribute
  document.documentElement.lang = lang;

  // textContent elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // innerHTML elements (for text with <strong> etc.)
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // placeholder attributes
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // aria-label attributes
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    const key = el.getAttribute("data-i18n-aria");
    if (t[key] !== undefined) el.setAttribute("aria-label", t[key]);
  });

  // title attributes
  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    const key = el.getAttribute("data-i18n-title");
    if (t[key] !== undefined) el.setAttribute("title", t[key]);
  });

  // alt attributes
  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    const key = el.getAttribute("data-i18n-alt");
    if (t[key] !== undefined) el.setAttribute("alt", t[key]);
  });

  // PDF iframe swap
  const resumeIframe = document.getElementById("resume-pdf");
  if (resumeIframe && t["resume.pdf.src"]) {
    resumeIframe.src = t["resume.pdf.src"];
    if (t["resume.pdf.title"]) resumeIframe.title = t["resume.pdf.title"];
  }

  // Meta tags
  document.title = t["meta.title"] || document.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && t["meta.description"]) metaDesc.setAttribute("content", t["meta.description"]);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && t["meta.og.title"]) ogTitle.setAttribute("content", t["meta.og.title"]);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc && t["meta.og.description"]) ogDesc.setAttribute("content", t["meta.og.description"]);

  // Toggle button label (shows target language)
  const btn = document.getElementById("lang-toggle");
  if (btn) btn.textContent = lang === "en" ? "NO" : "EN";

  // Persist choice
  localStorage.setItem("lang", lang);

  // Notify script.js to re-format the date
  document.dispatchEvent(new Event("languagechange"));
}

// Init
const savedLang = localStorage.getItem("lang") || "nb";
applyLanguage(savedLang);

document.getElementById("lang-toggle").addEventListener("click", () => {
  const next = document.documentElement.lang === "en" ? "nb" : "en";
  applyLanguage(next);
});
