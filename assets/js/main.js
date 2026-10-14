// Menu mobile
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.classList.toggle("is-active", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      navToggle.classList.remove("is-active");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Animazione di apparizione delle sezioni allo scroll
const revealEls = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

// Anno corrente nel footer
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Consenso per i contenuti di terze parti (mappa Google Maps).
// La scelta è salvata solo nel browser del visitatore (localStorage).
const CONSENT_KEY = "cookie-consent";
const cookieBanner = document.querySelector("[data-cookie-banner]");
const mapSlots = document.querySelectorAll("[data-map-src]");

function readConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch (e) {
    return null;
  }
}

function saveConsent(value) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch (e) {
    // Storage non disponibile: la scelta vale solo per questa visita
  }
}

function loadMaps() {
  mapSlots.forEach((slot) => {
    if (slot.querySelector("iframe")) return;
    const iframe = document.createElement("iframe");
    iframe.title = slot.dataset.mapTitle || "";
    iframe.src = slot.dataset.mapSrc;
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    iframe.allowFullscreen = true;
    slot.dataset.placeholder = slot.innerHTML;
    slot.classList.remove("map-consent");
    slot.innerHTML = "";
    slot.appendChild(iframe);
  });
}

function unloadMaps() {
  mapSlots.forEach((slot) => {
    if (!slot.querySelector("iframe")) return;
    slot.innerHTML = slot.dataset.placeholder;
    slot.classList.add("map-consent");
  });
}

function setConsent(value) {
  saveConsent(value);
  if (cookieBanner) cookieBanner.hidden = true;
  if (value === "accepted") loadMaps();
  else unloadMaps();
}

document.addEventListener("click", (event) => {
  const target = event.target.closest(
    "[data-consent-accept], [data-consent-reject], [data-cookie-settings]"
  );
  if (!target) return;

  if (target.matches("[data-consent-accept]")) setConsent("accepted");
  else if (target.matches("[data-consent-reject]")) setConsent("rejected");
  else if (cookieBanner) {
    cookieBanner.hidden = false;
    cookieBanner.querySelector("[data-consent-accept]").focus();
  }
});

const storedConsent = readConsent();
if (storedConsent === "accepted") {
  loadMaps();
} else if (!storedConsent && cookieBanner) {
  cookieBanner.hidden = false;
}
