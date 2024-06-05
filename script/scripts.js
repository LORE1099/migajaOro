// ======================================================
// FUNCIONES PAGINA INICIO
// ======================================================
const menu = document.querySelector('[data-menu]');
const items = document.querySelector('[data-items]')

function removerMenu() {
    items.classList.toggle('grid-items-boton');
}

// ======================================================
// FUNCIONES INDEX
// ======================================================
// CONFIRMACION DE FORMULARIO
const ingresar = document.querySelector('[data-enviar]');

ingresar.addEventListener('click', function (event) {
    event.preventDefault();
    const usuario = document.querySelector('[data-usuario]').value.trim();
    const contrasena = document.querySelector('[data-contrasena]').value.trim();

    if (usuario === 'Lore' && contrasena === 'loreRodriguez') {
        location.href = "ingresoDashboard.html"
    } else {
        mostrarModal();
    }
});


// VENTANA MODAL ERROR
const modal = document.querySelector('#modal');
const cerrarError = document.querySelector('#cerrarError')

// Funcion mostrar modal
function mostrarModal() {
    modal.classList.add('visible')
}

// Cerrar Modal
function cerrarModal() {
    modal.classList.remove('visible')
};














