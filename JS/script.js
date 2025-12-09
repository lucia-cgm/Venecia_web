// SCROLL - Cambio de tamaños
function shrinkHeader() {
    "use strict";
    var scroll = $(window).scrollTop();
    var threshold = $(window).height() / 2;
    if (scroll > threshold) {
        $("nav").css("height", "8vh");
        $("a").css("fontSize", "0.8rem");
        $("logo").css("flex-direction", "row");
        $("logo").css("width", "3rem");
        $("logo").css("background-color", "var(--white-color)");
    } else {
        $("nav").css("height", "12vh");
        $("a").css("fontSize", "1rem");
        $("logo").css("flex-direction", "column");
        $("logo").css("width", "5rem");
        $("logo").css("background-color", "var(--black-color)");
    }
}

$(document).ready(function () {
    "use strict";
    $(window).scroll(function () {
        shrinkHeader();
    });
});