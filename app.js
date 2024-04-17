document.addEventListener('DOMContentLoaded', function() {
    const satelite = document.getElementById('satelite');
    const redesSociales = document.getElementById('redes-sociales');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeIcon = document.querySelector('.close-icon');
    const scrollLinks = document.querySelectorAll('.scroll-link');

    satelite.addEventListener('click', function() {
        satelite.classList.toggle('satelite-rotation')
        redesSociales.classList.toggle('hidden');
    });

    hamburgerMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    })

    closeIcon.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
    })

    // Itera sobre cada enlace y agrega un event listener para el clic
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Evita el comportamiento predeterminado del enlace
            event.preventDefault();

            // Obtiene el valor del atributo href del enlace
            const targetId = this.getAttribute('href').substring(1);

            // Obtiene el elemento de destino usando el ID
            const targetElement = document.getElementById(targetId);

            // Desplázate suavemente al elemento de destino
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });

            const checkIfScrollDone = setInterval(function() {
                if (Math.abs(targetElement.getBoundingClientRect().top) < 1) {
                    clearInterval(checkIfScrollDone);
                    mobileMenu.classList.add('hidden');
                }
            }, 100);
            // Cierre del menú
        });
    });

    //Recaptcha v3
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        // Previene el envío del formulario por defecto
        event.preventDefault();
        
        // Llama a la función getToken() para obtener el token de reCAPTCHA v3
        getToken();
    });
    // Función para obtener el token de reCAPTCHA v3
function getToken() {
    grecaptcha.ready(function() {
        grecaptcha.execute('6Lc8eb4pAAAAAEV_Jgap_2tR2yrp_SEcRC88eR8c', {action: 'submit'}).then(function(token) {
            // Agrega el token como un campo oculto al formulario
            document.getElementById('contact-form').insertAdjacentHTML('beforeend', '<input type="hidden" name="recaptcha_token" value="value="' + token + '">');
            
            // Envía el formulario
            document.getElementById('contact-form').submit();
        });
    });
}
});

//cursor follow
const cursor = document.querySelector(".cursor");

document.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = 'block';
});

document.addEventListener('mouseout', () => {
    cursor.style.display = 'none';
});