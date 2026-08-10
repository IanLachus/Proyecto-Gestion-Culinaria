/* ==========================================================
   CookPlanner - formato.js
   Funcion compartida para mostrar los montos en colones
   ========================================================== */

// Convierte un numero en un texto con formato de colones.
// Ejemplo: 1500 se convierte en "₡1.500"
function formatearColones(monto) {
  var entero = Math.round(monto);
  var negativo = false;

  // Si el monto es negativo lo trabajamos como positivo y despues le ponemos el signo
  if (entero < 0) {
    negativo = true;
    entero = entero * -1;
  }

  var texto = entero.toString();
  var resultado = "";
  var contador = 0;

  // Recorremos el numero de derecha a izquierda para colocar los puntos de miles
  for (var i = texto.length - 1; i >= 0; i--) {
    resultado = texto.charAt(i) + resultado;
    contador++;

    if (contador === 3 && i > 0) {
      resultado = "." + resultado;
      contador = 0;
    }
  }

  if (negativo === true) {
    return "-₡" + resultado;
  }

  return "₡" + resultado;
}
