export default function headerScroll() {
  const header = document.querySelector(".header");
  if (header) {
    const scrollTopStart =
      window.pageYOffset || document.documentElement.scrollTop;

    toggle(scrollTopStart);

    window.addEventListener("scroll", () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      toggle(scrollTop);
    });

    function toggle(scrollTop) {
      if (scrollTop > 0 && scrollTop) {
        header.classList.add("_fixed");
      } else {
        header.classList.remove("_fixed");
      }
    }
  }
}