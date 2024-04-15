document.addEventListener('DOMContentLoaded', function() {
    const satelite = document.getElementById('satelite');
    const redesSociales = document.getElementById('redes-sociales');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeIcon = document.querySelector('.close-icon');

    satelite.addEventListener('click', function() {
        satelite.classList.toggle('satelite-rotation')
        redesSociales.classList.toggle('hidden');
    });

    hamburgerMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    })

    closeIcon.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    })
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