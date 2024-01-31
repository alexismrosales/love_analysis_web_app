// scroll.js
function smoothScroll(classSelector) {
    const scrollLinks = document.querySelectorAll(classSelector);

    scrollLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const href = link.getAttribute("href");
        const targetElement = document.querySelector(href);
        targetElement.scrollIntoView({ behavior: "smooth" });
      });
    });
  }

module.exports = {smoothScroll};