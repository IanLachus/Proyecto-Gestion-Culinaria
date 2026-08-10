// login.js
document.addEventListener('DOMContentLoaded', () => {

  const loginForm = document.querySelector('.tarjeta-login');
  const emailInput = document.getElementById('correo');
  const passwordInput = document.getElementById('clave');

  // Expresión regular para validar un correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      // 1. Detenemos cualquier comportamiento predeterminado del navegador
      e.preventDefault();

      const emailValue = emailInput ? emailInput.value.trim() : '';
      const passwordValue = passwordInput ? passwordInput.value.trim() : '';

      // 2. Validar que el correo no esté vacío
      if (emailValue === '') {
        alert('Por favor, ingresa tu correo electrónico.');
        if (emailInput) emailInput.focus();
        return; // Detiene la función aquí
      }

      // 3. Validar que el correo tenga un formato válido
      if (!emailRegex.test(emailValue)) {
        alert('Por favor, ingresa un correo electrónico válido (ejemplo@correo.com).');
        if (emailInput) emailInput.focus();
        return; // Detiene la función aquí
      }

      // 4. Validar que la contraseña no esté vacía
      if (passwordValue === '') {
        alert('Por favor, ingresa tu contraseña.');
        if (passwordInput) passwordInput.focus();
        return; // Detiene la función aquí
      }

      // 5. Validar que la contraseña no tenga espacios
      if (passwordValue.includes(' ')) {
        alert('La contraseña no puede contener espacios.');
        if (passwordInput) passwordInput.focus();
        return; // Detiene la función aquí
      }

      // 6. Validar longitud mínima de la contraseña
      if (passwordValue.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres.');
        if (passwordInput) passwordInput.focus();
        return; // Detiene la función aquí
      }

      // 7. Si pasó TODAS las validaciones anteriores, redirige a la página principal
      alert('¡Inicio de sesión exitoso!');
      window.location.href = 'descubrir.html';
    });
  }
});
