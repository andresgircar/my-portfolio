document.addEventListener('DOMContentLoaded', function() {
    const satelite = document.getElementById('satelite');
    const redesSociales = document.getElementById('redes-sociales');

    satelite.addEventListener('click', function() {
        satelite.classList.toggle('satelite-rotation')
        redesSociales.classList.toggle('hidden');
        redesSociales.classList.toggle('mostrar-redes'); // Agregar o quitar la clase para mostrar las redes sociales
    });
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