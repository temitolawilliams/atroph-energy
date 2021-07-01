const burger = document.querySelector(".nav-icon");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links a");
console.log(navLinks);

function navOut() {
  //slide in the mobile nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", () => {
      nav.classList.toggle("close-links");
    });
  }
}

navOut();
