# 🍳 Plataforma Culinaria Colaborativa

> Plataforma web colaborativa para la **gestión y el descubrimiento de recetas culinarias**, que facilita la planificación de comidas según presupuesto, preferencias dietéticas e ingredientes disponibles.

**Curso:** SOFT-06 — Diseño y programación web

**Docente:** Stephanie Delgado Brenes

**Periodo:** C2 - 2026


---

## 📋 Descripción del proyecto

Sitio web desarrollado con **HTML, CSS y JavaScript** que conecta a chefs, usuarios y administradores en un mismo espacio para crear, descubrir y personalizar recetas. La plataforma busca resolver un problema cotidiano: **qué cocinar según lo que se tiene, lo que se prefiere y lo que se puede gastar.**

El sistema contempla tres tipos de usuario:

- **Chef / Experto culinario:** carga y gestiona recetas detalladas (ingredientes, costos, dificultad, instrucciones paso a paso, presupuesto por porción) y valida recetas de usuarios avanzados.
- **Usuario regular:** busca recetas con filtros avanzados, guarda favoritas en colecciones, crea versiones personalizadas ("versiones derivadas" con atribución), y califica y comenta.
- **Administrador del sistema:** gestiona categorías y etiquetas, modera contenido y supervisa las métricas de uso.

Además, la plataforma incorpora un **planificador de comidas** (menús semanales con cálculo de presupuesto y lista de compras automática) y un **módulo de comunidad** (seguidores, rankings de recetas y retos mensuales).

La Plataforma Culinaria Colaborativa es una aplicación web diseñada para facilitar la gestión y el descubrimiento de recetas culinarias mediante un entorno intuitivo y colaborativo. El sistema permite a los usuarios compartir recetas, explorar contenido gastronómico, organizar sus preparaciones y administrar información relacionada con ingredientes, categorías y perfiles de usuario.

En el Avance II, el proyecto evoluciona hacia la implementación del frontend mediante HTML y CSS, siguiendo los wireframes desarrollados en la primera etapa. Esta iteración se enfoca en la construcción de la interfaz visual, la navegación entre pantallas y la aplicación de principios de diseño responsivo, accesibilidad y buenas prácticas de desarrollo web.

---

## 🎯 Alcances

## Alcance Avance I
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

  ## Alcance Avance II

En el Avance II se inicia la construcción del frontend del sistema, implementando la estructura de las diferentes pantallas mediante HTML semántico y aplicando estilos con CSS para lograr una interfaz consistente, accesible y adaptable a distintos dispositivos. Además, se establece la estructura del proyecto en GitHub y se prepara la navegación entre las funcionalidades principales correspondientes a los diferentes tipos de usuario definidos en el proyecto.

En esta segunda iteración del proyecto se desarrollará la base visual de la aplicación web mediante la implementación de HTML y CSS, tomando como referencia los wireframes elaborados en el Avance I.

Los principales objetivos de esta etapa son:

- Implementar la estructura de las pantallas utilizando HTML5 semántico.
- Aplicar estilos mediante CSS3 para mantener una identidad visual uniforme.
- Desarrollar una navegación funcional entre las diferentes vistas del sistema.
- Organizar la estructura del proyecto dentro del repositorio de GitHub.
- Preparar la base para la incorporación de funcionalidades dinámicas en las siguientes etapas del proyecto.

---

## 👥 Integrantes y roles

| Integrante | Rol en el proyecto |
|------------|--------------------|
| Mora Espinoza Ian Aarón | Código de la segunda iteración |
| Beita Mendez Pablo | Código de la segunda iteración |
| Perez Miranda Naith Akari | Código de la segunda iteración - Repositorio en GitHub actualizado|
| Rivera Matarrita Dana Valeria | Código de la segunda iteración - Repositorio en GitHub actualizado|

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

**Buenas prácticas:** commits pequeños y frecuentes, descripciones claras y en español.

---

## 📁 Estructura del repositorio

```
/
├── README.md          # Este archivo
├── docs/              # Documentación y wireframes (PDF)
│   └── wireframes.pdf
├── src/         # Página principal y archivos html
├── css/               # Hojas de estilo
└── assets/img        #Imagenes del proyecto
```

---

## 🔗 Repositorio

<https://github.com/IanLachus/Proyecto-Gestion-Culinaria>
