const navbar = document.querySelector("nav");
let scrollTimout;

window.addEventListener("scroll", () => {
  if (window.innerWidth > 680) {
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
});
