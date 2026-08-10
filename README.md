# 🍳 CookPlanner — Plataforma Culinaria Colaborativa

> Descubre, guarda y planifica tus recetas favoritas. Plataforma web para la gestión y el descubrimiento de recetas culinarias, con planificación de comidas por presupuesto y una comunidad de chefs y usuarios.

**Curso:** SOFT-06 — Diseño y programación web
**Sección:** SCV · **Periodo:** 2026-C2
**Docente:** Stephanie Delgado Brenes
**Avance:** III — Interactividad con JavaScript

---

## 📋 Descripción del sistema

CookPlanner es un sitio web desarrollado con **HTML5, CSS3 y JavaScript** que conecta a tres tipos de usuario en un mismo espacio para crear, descubrir y planificar recetas:

- **Usuario regular:** busca recetas con filtros, guarda favoritas en colecciones, planifica sus comidas de la semana con control de presupuesto y participa en la comunidad.
- **Chef / Experto culinario:** carga y gestiona recetas detalladas (ingredientes con costos, categoría, dificultad, pasos y presupuesto por porción) y da seguimiento a su estado de publicación.
- **Administrador del sistema:** supervisa métricas, gestiona categorías y etiquetas, y modera el contenido reportado por la comunidad.

En este **Avance III** se agregó la lógica de interacción con JavaScript sobre la maquetación construida en el Avance II: validaciones de formularios, manejo de eventos y manipulación dinámica del DOM.

---

## ▶️ Cómo ejecutar el proyecto

El proyecto no requiere instalación, servidor ni dependencias externas:

1. Descargar o clonar el repositorio.
2. Abrir el archivo **`src/index.html`** con cualquier navegador (Chrome, Edge o Firefox).
3. Iniciar sesión con un correo válido y una contraseña de al menos 6 caracteres.
4. Navegar por el sistema usando el menú superior o los enlaces del pie de página.

Para probar una pantalla concreta, se puede abrir directamente su archivo dentro de la carpeta `src/`
(por ejemplo `src/chef.html` para el Panel del Chef).

---

## ⚙️ Funcionalidades implementadas con JavaScript

| # | Funcionalidad | Pantalla | Archivo |
|---|---------------|----------|---------|
| 1 | **Validación del inicio de sesión** — correo obligatorio y con formato válido, contraseña obligatoria, sin espacios y de mínimo 6 caracteres. Redirige al entrar correctamente. | Inicio de sesión | `login.js` |
| 2 | **Buscador y filtro de recetas** — filtra las tarjetas en tiempo real mientras se escribe y acepta búsquedas enviadas desde la pantalla Descubrir. | Recetas / Descubrir | `recetas.js` |
| 3 | **Marcar y desmarcar favoritos** — el corazón de cada receta cambia de estado y muestra un aviso en la tarjeta. | Recetas / Mi Cocina | `favoritos.js` |
| 4 | **Planificador semanal** — agrega o quita comidas en el calendario y recalcula el total gastado en colones, el porcentaje y la barra de progreso. Incluye lista de compras y botón para limpiar. | Planificador | `planificador.js` |
| 5 | **Validación del formulario de recetas** — campos obligatorios, largo mínimo del nombre y presupuesto en colones mayor que cero, con mensajes de error y campo resaltado. | Panel del Chef | `chef.js` |
| 6 | **Gestión de recetas (crear y eliminar)** — agrega la receta a la tabla, actualiza el contador total y permite eliminarla con confirmación. | Panel del Chef | `chef.js` |

**Eventos utilizados:** `submit` (formularios de login y de recetas), `click` (favoritos, casillas del planificador, eliminar y limpiar), `input` (buscador, presupuesto y campos del formulario) y `change` (selección de dificultad).

**Manipulación del DOM:** `createElement`, `appendChild` y `removeChild` para crear y eliminar filas de la tabla; `classList` para marcar estados; `textContent` y `style` para actualizar mensajes, montos y la barra de progreso.

---

## 📁 Estructura de archivos JavaScript

```
js/
├── formato.js        # Función compartida para mostrar montos en colones
├── login.js          # Validación del formulario de inicio de sesión
├── recetas.js        # Buscador y filtro de recetas
├── favoritos.js      # Marcar y desmarcar recetas favoritas
├── planificador.js   # Planificador semanal y cálculo del presupuesto
└── chef.js           # Panel del Chef: validaciones y gestión de recetas
```

Cada pantalla carga únicamente los archivos que necesita, por ejemplo:

```html
<script src="../js/chef.js"></script>
```

| Pantalla | Archivos JavaScript que carga |
|----------|-------------------------------|
| `index.html` | `login.js` |
| `descubrir.html` | `recetas.js` |
| `recetas.html` | `recetas.js`, `favoritos.js` |
| `mi-cocina.html` | `favoritos.js` |
| `planificador.html` | `formato.js`, `planificador.js` |
| `chef.html` | `formato.js`, `chef.js` |

---

## 👥 Integrantes y roles

| Integrante | Rol en el proyecto |
|------------|--------------------|
| Mora Espinoza Ian Aarón | Validaciones y gestión de recetas del Panel del Chef (`chef.js`) |
| Perez Miranda Naith Akari | Favoritos y planificador semanal (`favoritos.js`, `planificador.js`) |
| Rivera Matarrita Dana Valeria | Validación del inicio de sesión y buscador de recetas (`login.js`, `recetas.js`) |


---

## 🖥️ Pantallas del sistema

| # | Pantalla | Archivo | Tipo de usuario |
|---|----------|---------|-----------------|
| 1 | Inicio de sesión | `src/index.html` | Todos |
| 2 | Descubrir | `src/descubrir.html` | Usuario regular |
| 3 | Todas las recetas | `src/recetas.html` | Usuario regular |
| 4 | Planificador semanal | `src/planificador.html` | Usuario regular |
| 5 | Comunidad (rankings) | `src/comunidad.html` | Usuario regular |
| 6 | Mi Cocina (perfil) | `src/mi-cocina.html` | Usuario regular |
| 7 | Panel del Chef | `src/chef.html` | Chef / Experto |
| 8 | Panel de Administración | `src/admin.html` | Administrador |

---

## 🛠️ Tecnologías

- **HTML5** semántico (`header`, `nav`, `main`, `section`, `article`, `footer`, formularios con `label`).
- **CSS3**: Flexbox, Grid y media queries para diseño responsive.
- **JavaScript** del lado del cliente: eventos, validaciones y manipulación del DOM.

---

## 📁 Estructura del repositorio

```
CookPlanner/
├── README.md
├── src/                    # Pantallas HTML
├── css/
│   └── styles.css          # Todos los estilos del proyecto
├── js/                     # Lógica de interacción (un archivo por pantalla)
├── assets/
│   └── img/                # Imágenes de los platillos
└── docs/                   # Documentación y wireframes (PDF)
```

---

## 🌿 Estrategia de branches

| Rama | Propósito |
|------|-----------|
| `main` | Versión estable y revisada del proyecto. |
| `develop` | Rama de integración de funcionalidades. |
| `feature/<nombre>` | Una rama por funcionalidad (ej. `feature/chef-js`, `feature/login-js`). |

**Flujo:** cada integrante trabaja en una rama `feature/...` desde `develop`, integra mediante *pull request* a `develop`, y `develop` se fusiona a `main` cuando está probado.

---

## 📝 Estrategia de commits

Convención **Conventional Commits**:

| Tipo | Uso |
|------|-----|
| `feat` | Nueva funcionalidad (ej. `feat: validaciones del panel del chef`) |
| `fix` | Corrección de errores |
| `docs` | Cambios en documentación |
| `style` | Formato y estilos que no afectan la lógica |
| `refactor` | Reorganización de código |

---

## 🔗 Repositorio

<https://github.com/IanLachus/Proyecto-Gestion-Culinaria>
