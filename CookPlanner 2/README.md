# 🍳 CookPlanner — Plataforma Culinaria Colaborativa

> Descubre, guarda y planifica tus recetas favoritas. Plataforma web para la gestión y el descubrimiento de recetas culinarias, con planificación de comidas por presupuesto y una comunidad de chefs y usuarios.

**Curso:** SOFT-06 — Diseño y programación web
**Sección:** SCV · **Periodo:** 2026-C2
**Docente:** Stephanie Delgado Brenes
**Avance:** II — Maquetación funcional en HTML + CSS

---

## 📋 Descripción del sistema

CookPlanner es un sitio web desarrollado con **HTML5, CSS3 y diseño responsive** que conecta a tres tipos de usuario en un mismo espacio para crear, descubrir y planificar recetas:

- **Usuario regular:** busca recetas por nombre o ingredientes, guarda favoritas en colecciones, planifica sus comidas de la semana con control de presupuesto y participa en la comunidad.
- **Chef / Experto culinario:** carga y gestiona recetas detalladas (ingredientes con costos, categoría, dificultad, pasos y presupuesto por porción) y da seguimiento a su estado de publicación.
- **Administrador del sistema:** supervisa métricas, gestiona categorías y etiquetas, y modera el contenido reportado por la comunidad.

En este Avance II se construyó la **maquetación funcional y navegable** siguiendo los wireframes definidos en el Avance I.

---

## 🎯 Alcance (actualizado con el Avance II)

**Implementado en esta iteración:**
- 8 pantallas funcionales navegables en HTML semántico.
- Cobertura de 3 tipos de usuario (usuario regular, chef y administrador).
- Estilos CSS organizados en un archivo `styles.css` bien estructurado.
- Diseño responsive con Flexbox y Grid (adaptable a móvil).
- Navegación entre pantallas mediante enlaces `<a>` y un menú consistente.
- Accesibilidad básica: HTML semántico, `alt` en imágenes, `label` en formularios, foco visible y enlace para saltar al contenido.

**Fuera del alcance (próximas iteraciones):**
- Lógica de backend, base de datos y autenticación real (los datos son de demostración).
- Interactividad avanzada con JavaScript (esta entrega es maquetación HTML + CSS).

---

## 👥 Integrantes y roles

| Integrante | Rol en el proyecto |
|------------|--------------------|
| Mora Espinoza Ian Aarón | Repositorio, documentación y maquetación HTML |
| Beita Mendez Pablo | Wireframes y maquetación HTML |
| Perez Miranda Naith Akari | Estilos CSS y diseño responsive |
| Rivera Matarrita Dana Valeria | Navegación, accesibilidad y pruebas |

> Ajusten los roles según lo que realizó cada integrante en esta iteración.

---

## 🖥️ Pantallas / funcionalidades

| # | Pantalla | Archivo | Tipo de usuario |
|---|----------|---------|-----------------|
| 1 | Inicio de sesión | `src/index.html` | Todos |
| 2 | Descubrir (buscador + hero) | `src/descubrir.html` | Usuario regular |
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
- **Google Fonts:** Playfair Display para los títulos.

---

## 📁 Estructura del repositorio

```
CookPlanner/
├── README.md
├── src/                    # Pantallas HTML
│   ├── index.html          # Inicio de sesión
│   ├── descubrir.html
│   ├── recetas.html
│   ├── planificador.html
│   ├── comunidad.html
│   ├── mi-cocina.html
│   ├── chef.html
│   └── admin.html
├── css/
│   └── styles.css          # Todos los estilos del proyecto
├── assets/
│   └── img/                # Imágenes de los platillos (SVG)
└── docs/                   # Documentación y wireframes (PDF)
```

**Cómo ejecutar:** abrir `src/index.html` en el navegador y recorrer el sistema con la navegación superior y el pie de página.

---

## 🌿 Estrategia de branches

| Rama | Propósito |
|------|-----------|
| `main` | Versión estable y revisada del proyecto. |
| `develop` | Rama de integración de funcionalidades. |
| `feature/<nombre>` | Una rama por funcionalidad (ej. `feature/planificador`, `feature/login`). |

**Flujo:** cada integrante trabaja en una rama `feature/...` desde `develop`, integra mediante *pull request* a `develop`, y `develop` se fusiona a `main` cuando está probado.

---

## 📝 Estrategia de commits

Convención **Conventional Commits**:

| Tipo | Uso |
|------|-----|
| `feat` | Nueva funcionalidad (ej. `feat: agregar planificador semanal`) |
| `fix` | Corrección de errores |
| `docs` | Cambios en documentación |
| `style` | Formato y estilos que no afectan la lógica |
| `refactor` | Reorganización de código |

---

## 🔗 Repositorio

<https://github.com/IanLachus/Proyecto-Gestion-Culinaria>
