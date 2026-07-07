/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    // Interacción simple para la sección de contacto
    const btnMensaje = document.getElementById("btnMensaje");
    const mensajeContacto = document.getElementById("mensajeContacto");

    if (btnMensaje && mensajeContacto) {
        btnMensaje.addEventListener("click", function() {
            mensajeContacto.classList.toggle("d-none");

            if (mensajeContacto.classList.contains("d-none")) {
                btnMensaje.textContent = "Mostrar mensaje";
            } else {
                btnMensaje.textContent = "Ocultar mensaje";
            }
        });
    }

});
