let posicion = 0;


/* =========================
   CARRUSEL CON DESCRIPCIÓN
========================= */

function mover(direccion) {

    const imagenes = document.querySelector(".imagenes");
    const fotos = document.querySelectorAll(".imagenes img");
    const descripcion = document.getElementById("descripcion");
    const total = fotos.length;

    posicion += direccion;

    if (posicion < 0) {
        posicion = total - 1;
    }

    if (posicion >= total) {
        posicion = 0;
    }

    imagenes.style.transform =
        `translateX(-${posicion * 100}%)`;

    // Cambio de texto con fundido
    descripcion.classList.add("oculto");

    setTimeout(function () {

        descripcion.textContent =
            fotos[posicion].dataset.descripcion;

        descripcion.classList.remove("oculto");

    }, 300);

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

const musica = document.getElementById("musica");

function iniciarMusica() {
  musica.play()
    .then(() => {
      ["click", "keydown", "pointerdown", "touchend"].forEach(ev =>
        document.removeEventListener(ev, iniciarMusica)
      );
    })
    .catch(err => console.log("Audio:", err.name, err.message));
}

["click", "keydown", "pointerdown", "touchend"].forEach(ev =>
  document.addEventListener(ev, iniciarMusica)
);