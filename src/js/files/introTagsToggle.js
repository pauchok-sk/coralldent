export default function introTagsToggle() {
  const tagsWrapper = document.querySelector(".s-intro__tags");

  if (tagsWrapper) {
    const btn = tagsWrapper.querySelector(".s-intro__tag-btn");

    if (tagsWrapper.querySelectorAll("a").length > 3) {
      btn.addEventListener("click", () => {
        btn.classList.toggle("_active");
        tagsWrapper.classList.toggle("_open");
      });
    } else {
      btn.remove();
    }
  }
}
