# 🍳 Sazón — Plataforma Culinaria Colaborativa

> Plataforma web colaborativa para la **gestión y el descubrimiento de recetas culinarias**, que facilita la planificación de comidas según presupuesto, preferencias dietéticas e ingredientes disponibles.

**Curso:** SOFT-06 — Diseño y programación web
**Sección:** SCV — Periodo 2026-C1
**Docente:** Stephanie Delgado Brenes

---

## 📋 Descripción del proyecto

Sazón es un sitio web desarrollado con **HTML, CSS y JavaScript** que conecta a chefs, usuarios y administradores en un mismo espacio para crear, descubrir y personalizar recetas. La plataforma busca resolver un problema cotidiano: **qué cocinar según lo que se tiene, lo que se prefiere y lo que se puede gastar.**

El sistema contempla tres tipos de usuario:

- **Chef / Experto culinario:** carga y gestiona recetas detalladas (ingredientes, costos, dificultad, instrucciones paso a paso, presupuesto por porción) y valida recetas de usuarios avanzados.
- **Usuario regular:** busca recetas con filtros avanzados, guarda favoritas en colecciones, crea versiones personalizadas ("versiones derivadas" con atribución), y califica y comenta.
- **Administrador del sistema:** gestiona categorías y etiquetas, modera contenido y supervisa las métricas de uso.

Además, la plataforma incorpora un **planificador de comidas** (menús semanales con cálculo de presupuesto y lista de compras automática) y un **módulo de comunidad** (seguidores, rankings de recetas y retos mensuales).

---

## 🎯 Alcance

El proyecto se desarrolla como una **solución frontend** que evoluciona mediante al menos dos ciclos de retroalimentación simulada.

**Incluido en el alcance del proyecto:**
- Maquetación y estilizado de las interfaces (HTML + CSS).
- Funcionalidades interactivas del lado del cliente (JavaScript).
- Mínimo 6 funcionalidades para dos tipos de usuario.
- Búsqueda por ingredientes, versiones derivadas de recetas, planificador de comidas y módulo de comunidad.

**No incluido (fuera del alcance):**
- Backend, base de datos en servidor ni autenticación real (los datos se simulan en el cliente).
- Despliegue en producción con infraestructura propia.

**Avance I (entrega actual):**
- Repositorio en GitHub con este README.
- Wireframes de mínimo 6 funcionalidades para dos tipos de usuario (ubicados en `/docs`).

---

## 👥 Integrantes y roles

| Integrante | Rol en el proyecto |
|------------|--------------------|
| Ian Aarón Mora | Repositorio y documentación (GitHub, README, control de versiones) |
| Pablo [Apellido] | Repositorio y documentación (GitHub, wireframes / maquetación) |
| [Integrante 3] | [Rol — ej. Maquetación HTML/CSS] |
| [Integrante 4] | [Rol — ej. Programación JavaScript] |

> ⚠️ **Por completar:** apellidos y los roles del resto del equipo.

---

## 🛠️ Tecnologías

- **HTML5** — estructura y contenido.
- **CSS3** — estilos visuales y diseño responsivo.
- **JavaScript** — interactividad y lógica del lado del cliente.

---

## 🌿 Estrategia de branches

Se trabaja con un flujo basado en ramas para mantener el código estable y organizado:

| Rama | Propósito |
|------|-----------|
| `main` | Versión estable y revisada del proyecto. Solo se actualiza con código probado. |
| `develop` | Rama de integración donde se unen las funcionalidades antes de pasar a `main`. |
| `feature/<nombre>` | Una rama por cada funcionalidad nueva (ej. `feature/buscar-recetas`, `feature/login`, `feature/planificador`). |

**Flujo de trabajo:**
1. Cada integrante crea una rama `feature/...` a partir de `develop`.
2. Al terminar la funcionalidad, se hace un *pull request* hacia `develop`.
3. Una vez integrado y probado, `develop` se fusiona a `main`.

---

## 📝 Estrategia de commits

Se utiliza la convención **Conventional Commits** para mantener un historial claro:

```
<tipo>: <descripción breve en presente>
```

| Tipo | Uso |
|------|-----|
| `feat` | Nueva funcionalidad (ej. `feat: agregar buscador por ingredientes`) |
| `fix` | Corrección de errores (ej. `fix: corregir validación del formulario de login`) |
| `docs` | Cambios en documentación (ej. `docs: actualizar README con roles`) |
| `style` | Cambios de formato/estilo que no afectan la lógica |
| `refactor` | Reorganización de código sin cambiar su comportamiento |

**Buenas prácticas:** commits pequeños y frecuentes, descripciones claras y en español, sin acumular muchos cambios en un solo commit.

---

## 📁 Estructura del repositorio

```
/
├── README.md          # Este archivo
├── docs/              # Documentación y wireframes (PDF)
│   └── wireframes.pdf
├── index.html         # Página principal
├── css/               # Hojas de estilo
└── js/                # Scripts de JavaScript
```

---

## 🔗 Repositorio

[https://github.com/usuario/nombre-del-repo](https://github.com/usuario/nombre-del-repo)

> ⚠️ **Por completar:** enlace real del repositorio.
