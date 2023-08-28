// Manejo del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Formulario enviado');
});
        // Mostrar sección "Proyecto" al hacer clic en el enlace del navbar
        document.querySelector('.nav-link[href="#proyecto"]').addEventListener('click', function() {
            document.getElementById('proyecto').classList.remove('d-none');
            document.getElementById('colaborar').classList.add('d-none');
            document.getElementById('main').classList.add('d-none');
        });

        // Mostrar sección "Colaborar" al hacer clic en el enlace del navbar
        document.querySelector('.nav-link[href="#colaborar"]').addEventListener('click', function() {
            document.getElementById('colaborar').classList.remove('d-none');
            document.getElementById('proyecto').classList.add('d-none');
            document.getElementById('main').classList.add('d-none');
        });
                // Mostrar la sección de inscripciones al hacer clic en el enlace del navbar
                document.querySelector('.nav-link[href="#inscripciones"]').addEventListener('click', function() {
                    document.getElementById('inscripciones').classList.remove('d-none');
                    document.getElementById('proyecto').classList.add('d-none');
                    document.getElementById('colaborar').classList.add('d-none');
                    document.getElementById('main').classList.add('d-none');
                });

                document.addEventListener("DOMContentLoaded", function () {
                    const animationContainer = document.querySelector(".animation-container");
                
                    setTimeout(function () {
                        animationContainer.style.opacity = "1";
                    }, 1000);
                });
                