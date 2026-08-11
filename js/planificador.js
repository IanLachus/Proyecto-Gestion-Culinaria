/* Planificador semanal: agregar comidas y calcular el presupuesto */

var casillas = document.querySelectorAll(".casilla");
var campoPresupuesto = document.getElementById("presupuesto");
var textoGastado = document.getElementById("gastado");
var textoTope = document.getElementById("tope");
var textoPorcentaje = document.getElementById("porcentaje");
var textoAhorro = document.getElementById("ahorro");
var barraRelleno = document.getElementById("relleno");
var botonLimpiar = document.getElementById("boton-limpiar-plan");
var botonCompras = document.getElementById("boton-compras");

// Recetas disponibles para planificar (nombre y precio) 
var recetas = [
  { nombre: "Gallo Pinto", precio: 1500 },
  { nombre: "Pasta Alfredo", precio: 2800 },
  { nombre: "Ensalada Cesar", precio: 2100 },
  { nombre: "Tacos de Birria", precio: 2300 },
  { nombre: "Crepas", precio: 1900 }
];

// Guarda el total de dinero gastado en la semana
var totalGastado = 0;

/* ACTUALIZAR EL PRESUPUESTO, recalcula el monto, el porcentaje, el ahorro y la barra */
function actualizarPresupuesto() {
  var tope = Number(campoPresupuesto.value);

  // Si el usuario deja el campo vacio o pone cero, usamos 1 para no dividir entre cero
  if (tope <= 0) {
    tope = 1;
  }

  var porcentaje = (totalGastado / tope) * 100;

  if (porcentaje > 100) {
    porcentaje = 100;
  }

  var ahorro = Number(campoPresupuesto.value) - totalGastado;

  // Mostramos los datos en la pantalla
  textoGastado.textContent = formatearColones(totalGastado);
  textoTope.textContent = formatearColones(Number(campoPresupuesto.value));
  textoPorcentaje.textContent = Math.round(porcentaje) + "% utilizado";
  textoAhorro.textContent = "Ahorro: " + formatearColones(ahorro);
  barraRelleno.style.width = porcentaje + "%";

  // Si se pasa del presupuesto, la barra se pone roja
  if (totalGastado > Number(campoPresupuesto.value)) {
    barraRelleno.style.backgroundColor = "#D94C3D";
    textoAhorro.textContent = "Se paso del presupuesto por " + formatearColones(Math.abs(ahorro));
  } else {
    barraRelleno.style.backgroundColor = "#3E5228";
  }
}

/* AGREGAR O QUITAR UNA COMIDA, al hacer clic en una casilla se elige una receta */
function manejarCasilla(casilla) {
  // Si la casilla ya tiene una comida, la quitamos
  if (casilla.classList.contains("ocupada")) {
    var precioGuardado = Number(casilla.getAttribute("data-precio"));
    totalGastado = totalGastado - precioGuardado;

    casilla.classList.remove("ocupada");
    casilla.removeAttribute("data-precio");
    casilla.textContent = "+";

    actualizarPresupuesto();
    return;
  }

  // Si esta vacia, elegimos una receta al azar de la lista
  var posicion = Math.floor(Math.random() * recetas.length);
  var receta = recetas[posicion];

  casilla.classList.add("ocupada");
  casilla.setAttribute("data-precio", receta.precio);
  casilla.textContent = receta.nombre + " " + formatearColones(receta.precio);

  totalGastado = totalGastado + receta.precio;
  actualizarPresupuesto();
}

/*  EVENTO CLICK en cada casilla del calendario */
for (var i = 0; i < casillas.length; i++) {
  casillas[i].addEventListener("click", function () {
    manejarCasilla(this);
  });
}

/* EVENTO INPUT: recalcular al cambiar el presupuesto */
campoPresupuesto.addEventListener("input", function () {
  actualizarPresupuesto();
});

/* BOTON LIMPIAR: vaciar todo el calendario */
botonLimpiar.addEventListener("click", function () {
  for (var i = 0; i < casillas.length; i++) {
    casillas[i].classList.remove("ocupada");
    casillas[i].removeAttribute("data-precio");
    casillas[i].textContent = "+";
  }

  totalGastado = 0;
  actualizarPresupuesto();
});

/* BOTON LISTA DE COMPRAS: mostrar las comidas planificadas */
botonCompras.addEventListener("click", function () {
  var lista = "";
  var cantidad = 0;

  for (var i = 0; i < casillas.length; i++) {
    if (casillas[i].classList.contains("ocupada")) {
      lista = lista + "- " + casillas[i].textContent + "\n";
      cantidad++;
    }
  }

  if (cantidad === 0) {
    alert("Todavia no ha planificado ninguna comida.");
  } else {
    alert("LISTA DE COMPRAS (" + cantidad + " comidas)\n\n" + lista + "\nTotal: " + formatearColones(totalGastado));
  }
});
