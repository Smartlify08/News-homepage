document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav

  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".navlinks");
  burger.addEventListener("click", () => {
    console.log(navLinks);
    navLinks.classList.toggle("active-nav");

    burger.classList.toggle("rotate");
  });
});
