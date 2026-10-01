// Botón "Saludar"
document.getElementById("btnSaludar").addEventListener("click", function () {
    alert("Hola, Bootstrap, Git y GitHub");
});

// Formulario de contacto: valida y muestra una alerta de Bootstrap
document.getElementById("formContacto").addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const respuesta = document.getElementById("respuesta");

    if (nombre === "" || mensaje === "") {
        respuesta.innerHTML = '<div class="alert alert-danger">Completa todos los campos.</div>';
        return;
    }
    respuesta.innerHTML = '<div class="alert alert-success">Gracias, ' + nombre + '. Mensaje recibido.</div>';
    this.reset();
});

// Año actual en el pie de página
document.getElementById("anio").textContent = new Date().getFullYear();
