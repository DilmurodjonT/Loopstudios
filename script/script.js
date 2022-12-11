let hamburgerMenu = document.querySelector(".header__hamburger");
let headerMenu = document.querySelector("#header-menu");
let menuX = document.querySelector("#menu-x");

hamburgerMenu.addEventListener("click", () => {
  headerMenu.classList.toggle("nav--show");
});

menuX.addEventListener("click", () => {
  headerMenu.classList.remove("nav--show");
});
