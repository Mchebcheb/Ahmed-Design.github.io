function toggleMenu() {
    const menu = document.querySelector('.menu-principal');
    menu.classList.toggle('active');
}
// Buscamos todos los enlaces que están dentro del menú
const enlacesMenu = document.querySelectorAll('.submenu li a, .menu-principal li a');
// Buscamos el checkbox que abre el menú (asegúrate de que el id sea 'check')
const checkboxMenu = document.querySelector('#check');

enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', () => {
        // Si el checkbox está marcado (menú abierto), lo desmarcamos (se cierra)
        if (checkboxMenu.checked) {
            checkboxMenu.checked = false;
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu-principal');
    const enlaces = document.querySelectorAll('.menu-principal a');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', () => {
            // Cerramos el menú completo al tocar cualquier link
            menu.classList.remove('active');

            // Opcional: si usas el truco del checkbox, añade esto:
            const check = document.querySelector('#check');
            if (check) check.checked = false;
        });
    });
});