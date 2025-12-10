// SCROLL - Cambio de tamaños (jQuery)
function shrinkHeader() {
    "use strict";
    var scroll = $(window).scrollTop();
    var threshold = $(window).height() / 2;
    if (scroll > threshold) {
        $("nav").css({
            "height": "10vh",
            "background-color": "var(--black-color)",
            "border-bottom": "none",
        });
        $("a").css("fontSize", "0.9rem");
        $(".logo").css({
            "flex-direction": "row",
            "width": "4.5rem",
            "gap": "8px",
        });
        $(".logo > :first-child").css("height", "1.8rem");

    } else {
         $("nav").css({
            "height": "12vh",
            "background-color": "transparent",
            "border-bottom": "3px solid rgba(255, 255, 255, 0.5)",
        });
        $("a").css("fontSize", "1rem");
        $(".logo").css({
            "flex-direction": "column",
            "width": "5rem",
            "gap": "0px",
        });
        $(".logo > :first-child").css("height", "2.2rem");

    }
}

$(document).ready(function () {
    "use strict";
    $(window).scroll(function () {
        shrinkHeader();
    });
});



// GALERIA DE IMAGENES
/**
 * Número de imagen que se está presentando
 */
var indice = 1;


/**
 * Presenta la imagen que corresponda a partir del índice
 */
function setImagen() {
    "use strict";
    var i;
    //Se buscan los hijos de #galeria (figure), se calcula cuántos son
    //y se buscan los hijos de #circulos (div)
    var imagenes = document.getElementById("galeria").children;
    var num_imagenes = imagenes.length;
    var circulos = document.getElementById("circulos").children;

    //Se recorren el array figure y el de círculos para ocultar todos
    //los figure y quitarle los class a los círculos
    for (i = 0; i < num_imagenes; i += 1) {
        imagenes[i].style.display = "none";
        circulos[i].className = "";
    }

    //Se muestra el figure correspondiente y se le pone la clase active
    //al círculo asociado a esa posición
    imagenes[indice - 1].style.display = "block";
    circulos[indice - 1].className = "active";
}

/**
 * Función llamada desde el HTML
 * Se le pasa como parámetro el número de orden que ocupa
 * la imagen en la galería
 */
function setImagenActual(n) {
    "use strict";
    indice = n;
    setImagen();
}

/**
 * Cuando se detecta que se ha cargado la página,
 * se muestra la primera imagen
 */
window.onload = function () {
    "use strict";
    setImagen();
};s
