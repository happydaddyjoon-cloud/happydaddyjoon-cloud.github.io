// 모바일 메뉴 토글
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
navToggle?.addEventListener("click", () => nav.classList.toggle("open"));
nav?.addEventListener("click", (e) => {
  if (e.target.tagName === "A") nav.classList.remove("open");
});
