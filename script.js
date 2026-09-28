/* =========================
   CARRUSEL
========================= */

let posicion = 0;


function mover(direccion) {

    const imagenes = document.querySelector(".imagenes");

    const total =
        document.querySelectorAll(".imagenes img").length;


    posicion += direccion;


    if (posicion < 0) {

        posicion = total - 1;

    }


    if (posicion >= total) {

        posicion = 0;

    }


    imagenes.style.transform =
        `translateX(-${posicion * 100}%)`;

}



/* =========================
   BARRA QUE SE OCULTA
   AL BAJAR
========================= */

let ultimaPosicion =
    window.scrollY;


const barra =
    document.querySelector(".barra");


window.addEventListener(
    "scroll",
    function () {

        const posicionActual =
            window.scrollY;


        /*
        Si baja:
        ocultar barra
        */

        if (
            posicionActual >
            ultimaPosicion
            &&
            posicionActual > 100
        ) {

            barra.classList.add("oculta");

        }

        /*
        Si sube:
        mostrar barra
        */

        else {

            barra.classList.remove("oculta");

        }


        ultimaPosicion =
            posicionActual;

    }
);



/* =========================
   ANIMACIONES AL HACER SCROLL
========================= */

const elementos =
    document.querySelectorAll(".aparecer");


const observador =
    new IntersectionObserver(

        function (entradas) {

            entradas.forEach(
                function (entrada) {

                    if (
                        entrada.isIntersecting
                    ) {

                        entrada.target
                            .classList
                            .add("visible");

                    }

                }
            );

        },

        {

            threshold: 0.15

        }

    );



elementos.forEach(

    function (elemento) {

        observador.observe(elemento);

    }

);