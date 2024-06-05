// FUNCIONES PRODUCTOS 

// Quitar paneles y mostrar formulario
function ingresarProducto() {
    document.getElementById('formularioProductos').style.display = 'inline-block';
    document.getElementById('ocultarPanel').style.display = 'none';
    document.getElementById('productosRegistrados').style.display = 'none';
    document.getElementById('pedidosFinalizados').style.display = 'none'
}

// Quitar y mostrar productos
function productos() {
    document.getElementById('productosRegistrados').style.display = 'inline-block';
    document.getElementById('ocultarPanel').style.display = 'none';
    document.getElementById('formularioProductos').style.display = 'none';
    document.getElementById('pedidosFinalizados').style.display = 'none'
}

// Quitar y mostrar paneles de pedidos
function pedidosFinalizados() {
    document.getElementById('pedidosFinalizados').style.display = 'inline-block';
    document.getElementById('productosRegistrados').style.display = 'none';
    document.getElementById('ocultarPanel').style.display = 'none';
    document.getElementById('formularioProductos').style.display = 'none';
}

// Borrar Productos
function borrar() {
    document.getElementById('eliminar').style.display = 'none';
}

// Ocultar panel de soporte
function mostrarFormularioSoporte() {
    document.getElementById('formulario_soporte').style.display = "inline-block";
    document.getElementById('botonSoporteTecnico').style.display = 'none'
}

// Realizar pedido
function realizarPedido() {
    document.getElementById('formularioPedidos').style.display = "inline-block";
}