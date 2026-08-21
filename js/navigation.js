const menuToggle = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector(".main-navigation");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNavigation.classList.toggle("open");

  menuToggle.classList.toggle("open");

  menuToggle.setAttribute(
    "aria-expanded",
    isOpen
  );

  menuToggle.setAttribute(
    "aria-label",
    isOpen
      ? "Navigation schließen"
      : "Navigation öffnen"
  );
});


/* ==============================
   Menü nach Klick schließen
   ============================== */

const navigationLinks =
  document.querySelectorAll(".main-navigation a");

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {

    mainNavigation.classList.remove("open");
    menuToggle.classList.remove("open");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    menuToggle.setAttribute(
      "aria-label",
      "Navigation öffnen"
    );
  });
});