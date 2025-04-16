import "../scss/style.scss";
import burger from "./files/burger.js";
import linkHover from "./files/linkHover.js";
import sliders from "./files/sliders.js";
import spoller from "./files/spoller.js";

spoller();
linkHover();
sliders();
burger();

Fancybox.bind("[data-fancybox]");
