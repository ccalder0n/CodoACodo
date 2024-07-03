document.addEventListener('DOMContentLoaded', function() {
    const imagen = document.getElementById('portada');
    const padre = imagen.parentElement;
    const urlDeImagen = imagen.src;
    padre.style.backgroundImage = `url(${urlDeImagen})`;
});