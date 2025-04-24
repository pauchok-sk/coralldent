export default function introTagsToggle() {
  const tagsWrapper = document.querySelector(".s-intro__tags");

  if (tagsWrapper) {
    const btn = tagsWrapper.querySelector(".s-intro__tag-btn");
    
    window.addEventListener("resize", init);
    
    init();
    
    function init() {
      const height = document.querySelector(".s-intro__tags a").clientHeight + 2;
      if (!window.matchMedia("(max-width: 767px)").matches) {
        btn.style.display = "none";
        tagsWrapper.style.height = `auto`;
        return;
      }

      if (tagsWrapper.clientHeight <= height) {
        btn.style.display = "none";
        tagsWrapper.style.height = `auto`;
      } else {
        btn.style.display = "flex";
        tagsWrapper.style.height = `${height + 1}px`;

        btn.addEventListener("click", () => {
          btn.classList.toggle("_active");
          tagsWrapper.classList.toggle("_open");
        });
      }
    }
  }
}
