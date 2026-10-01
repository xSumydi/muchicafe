/* MENÚ LATERAL */

const openMenu = document.getElementById("openMenu");

const closeMenu = document.getElementById("closeMenu");

const sideMenu = document.getElementById("sideMenu");

const overlay = document.getElementById("overlay");

const menuLinks = document.querySelectorAll(".menu-link");

function showMenu() {

    sideMenu.classList.add("active");

    overlay.classList.add("active");

}

function hideMenu() {

    sideMenu.classList.remove("active");

    overlay.classList.remove("active");

}

openMenu.addEventListener(
    "click",
    showMenu
);

closeMenu.addEventListener(
    "click",
    hideMenu
);

overlay.addEventListener(
    "click",
    hideMenu
);

/* Cerrar menú al seleccionar una opción */

menuLinks.forEach(function(link) {

    link.addEventListener(
        "click",
        hideMenu
    );

});

/* CARRUSEL */

const drinks = [

    {
        title: "TARO LATTE",
        image: "img/bebida1.png",
        alt: "Taro Latte"
    },

    {
        title: "MATCHA LATTE",
        image: "img/bebida2.png",
        alt: "Matcha Latte"
    },

    {
        title: "CHAI LATTE",
        image: "img/bebida3.png",
        alt: "Chai Latte"
    }

];

let currentDrink = 0;

const drinkTitle =
    document.getElementById("drinkTitle");


const mainDrink =
    document.querySelector(".main-drink");


const leftDrink =
    document.querySelector(".left-drink");


const rightDrink =
    document.querySelector(".right-drink");



/* ACTUALIZAR CARRUSEL */

function updateCarousel() {

    const current =
        drinks[currentDrink];


    const previousIndex =
        (currentDrink - 1 + drinks.length)
        % drinks.length;


    const nextIndex =
        (currentDrink + 1)
        % drinks.length;


    /* Título */

    drinkTitle.textContent =
        current.title;


    /* Imagen principal */

    mainDrink.src =
        current.image;

    mainDrink.alt =
        current.alt;


    /* Imagen izquierda */

    leftDrink.src =
        drinks[previousIndex].image;

    leftDrink.alt =
        drinks[previousIndex].alt;


    /* Imagen derecha */

    rightDrink.src =
        drinks[nextIndex].image;

    rightDrink.alt =
        drinks[nextIndex].alt;


    /* Animación */

    mainDrink.animate(

        [
            {
                opacity: 0,

                transform:
                    "scale(0.90)"
            },

            {
                opacity: 1,

                transform:
                    "scale(1)"
            }
        ],

        {
            duration: 250,

            easing: "ease-out"
        }

    );

}

/* SIGUIENTE BEBIDA */

function nextDrink() {

    currentDrink++;

    if (
        currentDrink >=
        drinks.length
    ) {

        currentDrink = 0;

    }

    updateCarousel();

}

/* BEBIDA ANTERIOR */

function previousDrink() {

    currentDrink--;

    if (
        currentDrink < 0
    ) {

        currentDrink =
            drinks.length - 1;

    }

    updateCarousel();

}

document
    .getElementById("next")
    .addEventListener(
        "click",
        nextDrink
    );


document
    .getElementById("prev")
    .addEventListener(
        "click",
        previousDrink
    );



/* SWIPE EN CELULAR */

const carousel =
    document.getElementById("carousel");


let touchStartX = 0;

let touchEndX = 0;

carousel.addEventListener(
    "touchstart",
    function(event) {

        touchStartX =
            event.changedTouches[0]
                .screenX;

    }
);

carousel.addEventListener(
    "touchend",
    function(event) {

        touchEndX =
            event.changedTouches[0]
                .screenX;

        handleSwipe();

    }
);

function handleSwipe() {

    const difference =
        touchStartX - touchEndX;


    /* Deslizar hacia la izquierda */

    if (
        difference > 50
    ) {

        nextDrink();

    }


    /* Deslizar hacia la derecha */

    if (
        difference < -50
    ) {

        previousDrink();

    }

}

/* VOLVER AL INICIO */

const backToTop =
    document.getElementById("backToTop");


backToTop.addEventListener(
    "click",
    function() {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);

/* MODO CLARO / OSCURO */

const themeToggle =
    document.getElementById("themeToggle");

themeToggle.addEventListener(
    "click",
    function() {

        document.body.classList.toggle("dark-mode");

        const darkMode =
            document.body.classList.contains("dark-mode");

        if (darkMode) {

            themeToggle.setAttribute(
                "aria-label",
                "Activar modo claro"
            );

            themeToggle.setAttribute(
                "title",
                "Activar modo claro"
            );

        } else {

            themeToggle.setAttribute(
                "aria-label",
                "Activar modo oscuro"
            );

            themeToggle.setAttribute(
                "title",
                "Activar modo oscuro"
            );

        }

    }
);

/* INICIAR CARRUSEL */

updateCarousel();

/* SISTEMA CONTROLADOR DE SECCIONES LEGALES (MÜCHI CAFÉ) */

document.addEventListener("DOMContentLoaded", function() {

    const pantallaPrivacidad = document.getElementById("pantallaPrivacidad");

    const pantallaTerminos = document.getElementById("pantallaTerminos");

    const btnPrivacidad = document.getElementById("btnPrivacidad");

    const btnTerminos = document.getElementById("btnTerminos");

    const logoHome = document.getElementById("logoHome");

    // Listado de contenedores de la cafetería que se van a alternar
    const componentesInicio = ['.hero', '.menu-section', '.location-section', '.wallet-section', '.schedule'];

    // Función global para mostrar u ocultar el menú de la cafetería
    function alternarInicio(mostrar) {

        componentesInicio.forEach(selector => {

            const elemento = document.querySelector(selector);

            if (elemento) {

                if (mostrar) elemento.classList.remove("d-none");

                else elemento.classList.add("d-none");
            }
        });
    }

    // Función para ocultar de golpe ambas pantallas de texto largo

    function limpiarPantallasLegales() {

        pantallaPrivacidad.classList.add("d-none");

        pantallaTerminos.classList.add("d-none");

    }

    // Función unificada para regresar al menú principal de forma limpia

    function regresarAlInicio() {

        limpiarPantallasLegales();

        alternarInicio(true);

        window.scrollTo({ top: 0, behavior: "smooth" });

    }

    // 1. Clic en: Enlace Aviso de Privacidad

    if (btnPrivacidad) {

        btnPrivacidad.addEventListener("click", function(e) {

            e.preventDefault();

            alternarInicio(false);

            limpiarPantallasLegales();

            pantallaPrivacidad.classList.remove("d-none");

            window.scrollTo({ top: 0, behavior: "smooth" });

        });
    }

    // 2. Clic en: Enlace Términos y Condiciones

    if (btnTerminos) {

        btnTerminos.addEventListener("click", function(e) {

            e.preventDefault();

            alternarInicio(false); // Desaparece el inicio

            limpiarPantallasLegales();

            pantallaTerminos.classList.remove("d-none");

            window.scrollTo({ top: 0, behavior: "smooth" });

        });
    }

    // 3. Clic en: Logo decorativo del Header (Regresar al inicio)

    if (logoHome) {

        logoHome.style.cursor = "pointer";

        logoHome.addEventListener("click", function(e) {

            e.preventDefault();

            regresarAlInicio();

        });
    }

    // INTEGRACIÓN CON MENÚ LATERAL
    const enlacesMenuLateral = document.querySelectorAll(".menu-link");

    enlacesMenuLateral.forEach(link => {

        link.addEventListener("click", function() {

            limpiarPantallasLegales();

            alternarInicio(true);
            
        });
    });
});
