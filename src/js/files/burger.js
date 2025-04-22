export default function burger() {
  const burgerBtn = document.querySelector("#burger-btn");
  const burger = document.querySelector("#burger");

  if (burger) {
    const burgerContainer = burger.querySelector(".burger__container");
    const header = document.querySelector(".header");

    burgerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (burger.classList.contains("_open")) {
        burgerClose();
      } else {
        burgerOpen();
      }
    });

    function burgerClose() {
      burger.classList.remove("_open");
      document.body.classList.remove("body-hidden");
      burgerBtn.classList.remove("_active");
      header.classList.remove("_primary");

      // document.body.removeEventListener("click", burgerClose);
    }

    function burgerOpen() {
      burger.classList.add("_open");
      document.body.classList.add("body-hidden");
      burgerBtn.classList.add("_active");
      if (!header.classList.contains("_white")) header.classList.add("_primary");

      // document.body.addEventListener("click", burgerClose);
    }

    function updateHeightBurger() {
      burger.style.maxHeight = `${window.visualViewport.height}px`;
      burgerContainer.style.padding =
      `${header.clientHeight + 25}px 36px 25px 36px`;
    }

    window.visualViewport.addEventListener("resize", updateHeightBurger);
    window.visualViewport.addEventListener("scroll", updateHeightBurger);

    updateHeightBurger();
  }
}
