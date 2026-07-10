const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navIcon = document.querySelector(".nav-icon");
const year = document.querySelector("#year");
const copyEmail = document.querySelector("#copy-email");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    if (navIcon) {
      navIcon.textContent = isOpen ? "✕" : "☰";
    }
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      if (navIcon) {
        navIcon.textContent = "☰";
      }
    }
  });
}

if (copyEmail) {
  copyEmail.addEventListener("click", async () => {
    const email = copyEmail.dataset.email || "";
    try {
      await navigator.clipboard.writeText(email);
      copyEmail.textContent = "Email Copied";
      window.setTimeout(() => {
        copyEmail.textContent = "Copy Email";
      }, 1800);
    } catch {
      copyEmail.textContent = email;
    }
  });
}
