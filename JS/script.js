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
        $(".icono_logo").css("fontSize", "0.9rem");
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
        $(".icono_logo").css("fontSize", "1rem");
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



// MENU
// Abre el menu
function openMenu() {
  console.log("Función openMenu");
  document.getElementById("menu").classList.add("active");
  document.getElementById("menu").style.backgroundColor ="white";
}
// CERRAR menu
function closeMenu() {
  console.log("Función closeMenu");
  document.getElementById("menu").classList.remove("active");
  document.getElementById("menu").style.backgroundColor ="transparent";
}



// GALERIA DE IMAGENES
/**
 * Número de imagen que se está presentando
 */
var indice = 1;

function setImagen() {
    "use strict";
    var i;
    //Se buscan los hijos de #galeria (figure), se calcula cuántos son y se buscan los hijos de #circulos (div)
    var imagenes = document.getElementById("galeria").children;
    var num_imagenes = imagenes.length;
    var circulos = document.getElementById("circulos").children;

    //Se recorren el array figure y el de círculos para ocultar todos los figure y quitarle los class a los círculos
    for (i = 0; i < num_imagenes; i += 1) {
        imagenes[i].style.display = "none";
        circulos[i].className = "";
    }

    //Se muestra el figure correspondiente y se le pone la clase active al círculo asociado a esa posición
    imagenes[indice - 1].style.display = "block";
    circulos[indice - 1].className = "active";

    //Se incrementa el índice. Se comprueba si ya es la última imagen del carrusel, en cuyo caso se vuelve a la primera
    if (indice === imagenes.length) {
        indice = 1;
    } else {
        indice += 1;
    }
    //Se añade el temporización de 5s (5000ms)
    setTimeout(setImagen, 4000);
}

/**
 * Función llamada desde el HTML. Se le pasa como parámetro el número de orden que ocupa la imagen en la galería
 */
function setImagenActual(n) {
    "use strict";
    indice = n;
    setImagen();
}

/**
 * Cuando se detecta que se ha cargado la página, se muestra la primera imagen
 */
window.onload = function () {
    "use strict";
    setImagen();
};


// Gráfica de línea
function cargaGraficoLinea() {
    var datos = {
        labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
        datasets: [{
            label: "Recaudacion anual generada por el carnaval",
            borderColor: "rgba(255, 255, 255, 0.7)",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            pointBorderColor: "#ffffff",
            pointBackgroundColor: "#FFFFFF", // Relleno de puntos
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "#24110F",
            pointHoverBorderColor: "white",
            borderWidth: 3,
            tension: 0.3, // Suaviza la línea
            fill: true,
            data: [1.7, 0.78, 0.99, 1.4, 1.5, 1.9]
        }],
    };

    var config = {
        type: "line",
        data: datos,
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: "#ffffffff",
                        font: {
                            size: 14,
                            letterSpacing: 0.5,
                        },
                    }
                },
                tooltip: {
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    titleColor: "black",
                    bodyColor: "black",
                    cornerRadius: 6
                }
            },
            scales: {
                x: {
                    border: {
                        color: "white",
                        width: 1,
                        borderColor: "white"
                    }
                    
                },
                y: {
                    min: 0,
                    max: 2.5,
                    title: {
                        display: true,
                        text: "Billones de euros recaudados(bn)"
                    },
                    border: {
                        color: "white",
                        width: 1,
                    }
                }
            }
        }
    };

    var grafico = document.getElementById("lineas").getContext("2d");
    new Chart(grafico, config);
}

$(document).ready(function () {
    cargaGraficoLinea();
});



// IMAGEN FLOTANTE
const rows = document.querySelectorAll(".row");
const floating = document.getElementById("floating-img");

rows.forEach(row => {
    row.addEventListener("mouseenter", e => {
        const imgSrc = row.getAttribute("data-image");
        floating.innerHTML = `<img src="${imgSrc}">`;
        floating.style.opacity = "1";
    });

    row.addEventListener("mouseleave", e => {
        floating.style.opacity = "0";
    });

    row.addEventListener("mousemove", e => {
        // Mover ventana flotante cerca del cursor
        floating.style.top = (e.clientY + 20) + "px";
        floating.style.left = (e.clientX + 20) + "px";
    });
});


// ANIMACION - SCROLL COSAS
/*jslint devel: true*/
/*eslint-env browser*/
window.onload = function () {
    "use strict";
    AOS.init({
        duration: 1500,
    });
};
