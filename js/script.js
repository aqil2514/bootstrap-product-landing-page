const navHeader = document.getElementById("nav-header");
const navSection = document.getElementById("nav-menu");
const navGeneral = document.querySelector("#navigation i");
const blankArea = document.querySelector("#blank-area");

navGeneral.addEventListener("click", function () {
  navSection.classList.add("nav-menu-active");
});

navHeader.addEventListener("click", function () {
  navSection.classList.remove("nav-menu-active");
});

blankArea.addEventListener("click", function () {
  navSection.classList.remove("nav-menu-active");
});

document.addEventListener("click", function (e) {
  console.log(e.target);
});
