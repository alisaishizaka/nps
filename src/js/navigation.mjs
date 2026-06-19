function toggleMainMenu(ev) {
  const nav = document.querySelector(".global-nav");
  nav.classList.toggle("show");
  const expanded = nav.classList.contains("show");
  ev.currentTarget.setAttribute("aria-expanded", expanded);
}

function toggleSubMenu(ev) {
  const submenu = ev.currentTarget
    .closest("li")
    .querySelector(".global-nav__submenu");
  if (!submenu) return;

  submenu.classList.toggle("show");
  ev.currentTarget.querySelector(".icon").classList.toggle("rotate");
}

export default function enableNavigation() {
  const menuButton = document.querySelector("#global-nav-toggle");
  if (menuButton) {
    menuButton.addEventListener("click", toggleMainMenu);
  }

  const subMenuToggles = document.querySelectorAll(
    ".global-nav__split-button__toggle"
  );
  subMenuToggles.forEach((toggle) => {
    toggle.addEventListener("click", toggleSubMenu);
  });
}
