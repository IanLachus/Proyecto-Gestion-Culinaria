/* ==========================================================
   CookPlanner - chef.js
   Panel del Chef: validacion del formulario y CRUD de recetas
   (crear, listar y eliminar)
   ========================================================== */

// ---- Elementos de la pagina que vamos a usar ----
var formulario = document.getElementById("formulario-receta");
var mensaje = document.getElementById("mensaje");
var listaRecetas = document.getElementById("lista-recetas");
var contador = document.getElementById("contador");
var botonLimpiar = document.getElementById("boton-limpiar");

// Campos del formulario
var campoNombre = document.getElementById("nombre");
var campoOrigen = document.getElementById("origen");
var campoCategoria = document.getElementById("categoria");
var campoDificultad = document.getElementById("dificultad");
var campoPrecio = document.getElementById("precio");
var campoIngredientes = document.getElementById("ingredientes");
var campoPasos = document.getElementById("pasos");


/* ==========================================================
   FUNCIONES DE AYUDA
   ========================================================== */

// Muestra un mensaje de error en la pantalla
function mostrarError(texto) {
  mensaje.textContent = "⚠️ " + texto;
  mensaje.className = "mensaje mensaje-error";
}

// Muestra un mensaje de exito en la pantalla
function mostrarExito(texto) {
  mensaje.textContent = "✅ " + texto;
  mensaje.className = "mensaje mensaje-exito";
}

// Borra el mensaje que estaba en pantalla
function limpiarMensaje() {
  mensaje.textContent = "";
  mensaje.className = "";
}

// Quita el borde rojo de todos los campos
function quitarBordesRojos() {
  campoNombre.classList.remove("campo-error");
  campoOrigen.classList.remove("campo-error");
  campoPrecio.classList.remove("campo-error");
  campoIngredientes.classList.remove("campo-error");
  campoPasos.classList.remove("campo-error");
}

// Actualiza el numero total de recetas de la tabla
function actualizarContador() {
  var filas = listaRecetas.getElementsByTagName("tr");
  contador.textContent = filas.length;
}


/* ==========================================================
   1. VALIDACION DEL FORMULARIO
   Revisa los datos antes de guardar la receta
   ========================================================== */

function validarFormulario() {
  quitarBordesRojos();

  // El nombre es obligatorio
  if (campoNombre.value === "") {
    campoNombre.classList.add("campo-error");
    mostrarError("El nombre de la receta es obligatorio.");
    return false;
  }

  // El nombre debe tener al menos 3 letras
  if (campoNombre.value.length < 3) {
    campoNombre.classList.add("campo-error");
    mostrarError("El nombre debe tener al menos 3 caracteres.");
    return false;
  }

  // El pais de origen es obligatorio
  if (campoOrigen.value === "") {
    campoOrigen.classList.add("campo-error");
    mostrarError("Debe indicar el pais de origen.");
    return false;
  }

  // El presupuesto es obligatorio
  if (campoPrecio.value === "") {
    campoPrecio.classList.add("campo-error");
    mostrarError("Debe indicar el presupuesto por porcion.");
    return false;
  }

  // El presupuesto debe ser un numero
  if (isNaN(campoPrecio.value)) {
    campoPrecio.classList.add("campo-error");
    mostrarError("El presupuesto debe ser un numero.");
    return false;
  }

  // El presupuesto debe ser mayor que cero
  if (Number(campoPrecio.value) <= 0) {
    campoPrecio.classList.add("campo-error");
    mostrarError("El presupuesto debe ser mayor que cero.");
    return false;
  }

  // Los ingredientes son obligatorios
  if (campoIngredientes.value === "") {
    campoIngredientes.classList.add("campo-error");
    mostrarError("Debe escribir los ingredientes de la receta.");
    return false;
  }

  // Los pasos son obligatorios
  if (campoPasos.value === "") {
    campoPasos.classList.add("campo-error");
    mostrarError("Debe escribir las instrucciones paso a paso.");
    return false;
  }

  // Si paso todas las revisiones, los datos estan correctos
  return true;
}


/* ==========================================================
   2. CREAR: agregar la receta a la tabla
   ========================================================== */

function agregarReceta() {
  // Creamos una fila nueva
  var fila = document.createElement("tr");

  // Columna del nombre
  var columnaNombre = document.createElement("td");
  columnaNombre.textContent = campoNombre.value;

  // Columna de la categoria
  var columnaCategoria = document.createElement("td");
  columnaCategoria.textContent = campoCategoria.value;

  // Columna del presupuesto
  var columnaPrecio = document.createElement("td");
  columnaPrecio.textContent = formatearColones(Number(campoPrecio.value));

  // Columna del estado (las recetas nuevas quedan en revision)
  var columnaEstado = document.createElement("td");
  var etiqueta = document.createElement("span");
  etiqueta.className = "etiqueta-estado estado-espera";
  etiqueta.textContent = "En revision";
  columnaEstado.appendChild(etiqueta);

  // Columna con el boton de eliminar
  var columnaAccion = document.createElement("td");
  var botonEliminar = document.createElement("button");
  botonEliminar.className = "boton-eliminar";
  botonEliminar.textContent = "Eliminar";
  columnaAccion.appendChild(botonEliminar);

  // Metemos las columnas dentro de la fila
  fila.appendChild(columnaNombre);
  fila.appendChild(columnaCategoria);
  fila.appendChild(columnaPrecio);
  fila.appendChild(columnaEstado);
  fila.appendChild(columnaAccion);

  // Metemos la fila dentro de la tabla
  listaRecetas.appendChild(fila);

  actualizarContador();
}


/* ==========================================================
   3. EVENTO SUBMIT: se ejecuta al enviar el formulario
   ========================================================== */

formulario.addEventListener("submit", function (evento) {
  // Evitamos que la pagina se recargue
  evento.preventDefault();

  // Primero validamos
  if (validarFormulario() === false) {
    return;
  }

  // Si todo esta bien, guardamos la receta
  var nombreGuardado = campoNombre.value;
  agregarReceta();
  mostrarExito('La receta "' + nombreGuardado + '" se publico correctamente.');

  // Dejamos el formulario vacio para la siguiente receta
  formulario.reset();
});


/* ==========================================================
   4. ELIMINAR: quitar una receta de la tabla
   ========================================================== */

listaRecetas.addEventListener("click", function (evento) {
  // Revisamos si lo que se hizo clic fue un boton de eliminar
  if (evento.target.className === "boton-eliminar") {
    var fila = evento.target.parentElement.parentElement;
    var nombreReceta = fila.getElementsByTagName("td")[0].textContent;

    // Pedimos confirmacion antes de borrar
    var confirmar = confirm('¿Seguro que desea eliminar "' + nombreReceta + '"?');

    if (confirmar === true) {
      listaRecetas.removeChild(fila);
      actualizarContador();
      mostrarExito('La receta "' + nombreReceta + '" se elimino de la lista.');
    }
  }
});


/* ==========================================================
   5. EVENTO INPUT: borrar el mensaje mientras el usuario escribe
   ========================================================== */

campoNombre.addEventListener("input", function () {
  campoNombre.classList.remove("campo-error");
  limpiarMensaje();
});

campoPrecio.addEventListener("input", function () {
  campoPrecio.classList.remove("campo-error");
  limpiarMensaje();
});


/* ==========================================================
   6. EVENTO CHANGE: avisar cuando se cambia la dificultad
   ========================================================== */

campoDificultad.addEventListener("change", function () {
  if (campoDificultad.value === "Alta") {
    mostrarExito("Recuerde detallar bien los pasos: la dificultad es alta.");
  } else {
    limpiarMensaje();
  }
});


/* ==========================================================
   7. BOTON LIMPIAR: vaciar el formulario
   ========================================================== */

botonLimpiar.addEventListener("click", function () {
  formulario.reset();
  quitarBordesRojos();
  limpiarMensaje();
});
