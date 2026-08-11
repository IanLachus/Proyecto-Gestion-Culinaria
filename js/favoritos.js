/*   Marcar y desmarcar recetas como favoritas */

// Botones de corazon que hay en la pagina
var botonesFavorito = document.querySelectorAll(".favorito");

// Contador de recetas favoritas
var totalFavoritos = 0;


/* ESTADO INICIAL, al abrir la pagina contamos cuantas recetas ya son favoritas */

for (var i = 0; i < botonesFavorito.length; i++) {
  // Las recetas empiezan marcadas como favoritas
  botonesFavorito[i].setAttribute("title", "Quitar de favoritos");
  totalFavoritos++;
}


/* MARCAR O DESMARCAR UNA RECETA */

function cambiarFavorito(boton) {
  // Buscamos el nombre de la receta dentro de la tarjeta
  var tarjeta = boton.closest(".tarjeta");
  var titulo = tarjeta.querySelector(".nombre-receta");
  var nombreReceta = titulo.textContent;

  if (boton.classList.contains("inactivo")) {
    // Estaba desmarcada: la volvemos favorita
    boton.classList.remove("inactivo");
    boton.setAttribute("title", "Quitar de favoritos");
    totalFavoritos++;
  } else {
    // Estaba marcada: la quitamos de favoritos
    boton.classList.add("inactivo");
    boton.setAttribute("title", "Agregar a favoritos");
    totalFavoritos--;
  }

  mostrarAviso(boton, nombreReceta);
}


/* AVISO EN PANTALLA
   Muestra un mensaje corto debajo del corazon */

function mostrarAviso(boton, nombreReceta) {
  var tarjeta = boton.closest(".tarjeta");
  var aviso = tarjeta.querySelector(".aviso-favorito");

  // Si la tarjeta todavia no tiene aviso, lo creamos
  if (aviso === null) {
    aviso = document.createElement("p");
    aviso.className = "aviso-favorito";
    tarjeta.querySelector(".tarjeta-info").appendChild(aviso);
  }

  if (boton.classList.contains("inactivo")) {
    aviso.textContent = nombreReceta + " se quito de favoritos";
  } else {
    aviso.textContent = nombreReceta + " se guardo en favoritos";
  }
}


/* EVENTO CLICK en cada corazon */

for (var j = 0; j < botonesFavorito.length; j++) {
  botonesFavorito[j].addEventListener("click", function () {
    cambiarFavorito(this);
  });
}
