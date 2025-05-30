import "../scss/style.scss";
import anchors from "./files/anchors.js";
import burger from "./files/burger.js";
import headerScroll from "./files/headerScroll.js";
import introTagsToggle from "./files/introTagsToggle.js";
import linkHover from "./files/linkHover.js";
import map from "./files/map.js";
import mediaAdaptive from "./files/mediaAdaptive.js";
import sliders from "./files/sliders.js";
import spoller from "./files/spoller.js";

spoller();
linkHover();
sliders();
burger();
mediaAdaptive();
map();
anchors();
introTagsToggle();
headerScroll();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});

// Fancybox.show([{src: "#modal-pay", type: "inline"}])
