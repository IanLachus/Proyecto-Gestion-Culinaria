// recetas.js
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('buscar') || document.querySelector('.buscador input');
  const recipeCards = document.querySelectorAll('.tarjeta');
  const mensaje = document.getElementById('mensajeBusqueda');

  // Función principal para filtrar las tarjetas
  function filtrarRecetas(texto) {
    const query = texto.toLowerCase().trim();
    let recetasVisibles = 0;

    recipeCards.forEach((card) => {
      // Busca el texto dentro de la tarjeta
      const titleElement = card.querySelector('.nombre-receta');
      const cardText = titleElement ? titleElement.textContent.toLowerCase() : card.textContent.toLowerCase();

      // Si coincide muestra la tarjeta, de lo contrario la oculta
      if (cardText.includes(query)) {
        card.style.display = '';
        recetasVisibles++;
      } else {
        card.style.display = 'none';
      }
    });

    // Mostrar u ocultar el aviso de "sin resultados" al terminar de revisar todas
    if (mensaje) {
      if (recetasVisibles === 0) {
        mensaje.style.display = 'block';
      } else {
        mensaje.style.display = 'none';
      }
    }
  }

  // 1. Filtrado al escribir directamente en el input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      filtrarRecetas(e.target.value);
    });

    // EVITAR que recargue la página si presiona Enter en el buscador de recetas.html
    const buscadorForm = searchInput.closest('form');
    if (buscadorForm && recipeCards.length > 0) {
      buscadorForm.addEventListener('submit', (e) => {
        e.preventDefault();
        filtrarRecetas(searchInput.value);
      });
    }
  }

  // 2. Leer si venimos redirigidos desde descubrir.html con una búsqueda en la URL (?buscar=gallo)
  const urlParams = new URLSearchParams(window.location.search);
  const parametroBusqueda = urlParams.get('buscar');

  if (parametroBusqueda) {
    if (searchInput) searchInput.value = parametroBusqueda;
    filtrarRecetas(parametroBusqueda);
  }
});
