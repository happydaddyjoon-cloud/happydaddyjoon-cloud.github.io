const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");

const closeNavigation = () => {
  document.body.classList.remove("nav-open");
  nav?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
};

navToggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open") ?? false;
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    closeNavigation();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeNavigation();
  }
});

const observeHeader = () => {
  if (!header) return;
  header.toggleAttribute("data-scrolled", window.scrollY > 8);
};

observeHeader();
window.addEventListener("scroll", observeHeader, { passive: true });
