# Hoja de Vida Interactiva - Fernando Barrientos

## Descripción

Este proyecto consiste en el desarrollo de una **hoja de vida (CV) interactiva y profesional** utilizando tecnologías web básicas.

El sitio presenta información personal, formación académica, experiencia laboral, habilidades técnicas, certificaciones, idiomas y un formulario de contacto.

El proyecto fue desarrollado aplicando **HTML5, CSS3 y JavaScript**, manteniendo una estructura organizada y separando cada tecnología en su respectivo archivo.

## Tecnologías utilizadas

* **HTML5:** estructura y contenido de la página.
* **CSS3:** diseño visual, distribución de elementos y adaptación responsive.
* **JavaScript:** funcionalidades interactivas.
* **Flexbox:** organización de elementos.
* **CSS Grid:** distribución de tarjetas y habilidades.
* **Git y GitHub:** control de versiones y publicación del proyecto.

## Estructura del proyecto

```text
hoja-vida/
│
├── index.html
│
├── css/
│   └── styles.css
│
├── js/
│   └── script.js
│
├── assets/
│   └── images/
│       └── yo.jpeg
│
└── README.md
```

## Contenido del sitio

La hoja de vida contiene las siguientes secciones:

* Datos personales
* Perfil profesional
* Formación académica
* Experiencia laboral
* Habilidades técnicas
* Certificaciones y cursos
* Idiomas
* Formulario de contacto

También cuenta con un menú de navegación que permite acceder rápidamente a las diferentes secciones de la página.

## Funcionalidades JavaScript

El proyecto incluye funcionalidades interactivas mediante JavaScript.

### Modo claro y modo oscuro

El botón **"Modo oscuro"** permite cambiar entre el modo claro y oscuro de la página.

Al presionar el botón, JavaScript agrega o elimina la clase `dark_mode` del elemento `body`, modificando las variables de colores definidas en CSS.

### Validación del formulario

El formulario de contacto cuenta con validación mediante JavaScript.

Se verifica que los campos obligatorios estén correctamente completados antes de mostrar el mensaje de confirmación.

Los campos incluyen:

* Nombre
* Correo electrónico
* Teléfono
* Motivo de contacto
* Mensaje
* Aceptación de términos y condiciones

## Diseño responsive

El sitio está diseñado para adaptarse a diferentes tamaños de pantalla.

Se utilizan **CSS Grid, Flexbox y media queries** para mejorar la visualización en:

* Computadoras
* Tablets
* Teléfonos móviles

En pantallas pequeñas, las tarjetas y los elementos de navegación se reorganizan para facilitar su uso.

## Accesibilidad

Se aplicaron algunas prácticas de accesibilidad en el proyecto:

* Uso de etiquetas semánticas de HTML5.
* Atributo `lang="es"` en el documento.
* Texto alternativo para la fotografía mediante `alt`.
* Uso de etiquetas `label` asociadas a los campos del formulario.
* Uso de `aria-label`, `aria-labelledby` y `aria-live` donde corresponde.
* Enlaces de correo electrónico y teléfono mediante `mailto:` y `tel:`.
* Uso de elementos como `header`, `nav`, `main`, `section`, `article` y `footer`.

## Autor

**Fernando Barrientos**

Estudiante de Ingeniería de Sistemas
Universidad Católica Boliviana "San Pablo"
La Paz, Bolivia

## Año

2026
