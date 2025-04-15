export default function linkHover() {
  const containers = document.querySelectorAll(".hover-container");

  if (containers.length) {
    containers.forEach((c) => {
      const items = c.querySelectorAll("a");

      items.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          if (item.classList.contains("_unhover") && item.classList.contains("_hover")) return;
          console.log("h")
          item.classList.add("_hover");
        });
        item.addEventListener("mouseleave", () => {
          item.classList.add("_unhover");

          setTimeout(() => {
            item.classList.remove("_hover");
            item.classList.remove("_unhover");
          }, 300);
        });
      });
    });
  }
}
