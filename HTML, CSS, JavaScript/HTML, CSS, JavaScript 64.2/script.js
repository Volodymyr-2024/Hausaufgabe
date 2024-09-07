const navMenu = document.getElementById("navMenu");
const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");
const submenuContainer = document.querySelectorAll(".submenu_container");
const navElement = document.querySelectorAll(".nav-menu__item");

const toggleMenu = () => {
  navMenu.classList.toggle("nav-menu--open");
};
openButton.addEventListener("click", () => {
  toggleMenu();
});
closeButton.addEventListener("click", () => {
  toggleMenu();
});

navElement.forEach((item, index) => {
  item.addEventListener("click", () => {
    submenuContainer[index].classList.toggle("active");
    const p = item.querySelector("p");
    if (p) {
      p.classList.remove("arrow");
      p.classList.toggle("rotate");
    }
    p.classList.add("arrow");
  });
});
