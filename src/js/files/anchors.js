export default function anchors() {
  document.querySelectorAll("[data-anchor]").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      let href = this.getAttribute("href").substring(1);

      const scrollTarget = document.getElementById(href);

      console.log(scrollTarget)

      if (scrollTarget) {
        window.scrollBy({
          top: scrollTarget.getBoundingClientRect().top,
          behavior: "smooth",
        });
      }
    });
  });
}