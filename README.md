# 🌌 Número Secreto — Edición Star Wars

<p align="center">
  <strong>Juego web interactivo de adivinanza numérica con una experiencia visual y sonora inspirada en el universo de Star Wars.</strong>
</p>

<p align="center">
  <a href="https://mariosi3ri.github.io/Numero-Secreto/">🚀 Jugar en línea</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/GitHub%20Pages-deployed-222222?style=for-the-badge&logo=github" alt="GitHub Pages" />
  <img src="https://img.shields.io/badge/Licencia-MIT-1f883d?style=for-the-badge" alt="Licencia MIT" />
</p>

---

## 📖 Descripción

**Número Secreto** es una página web interactiva que transforma el clásico juego de adivinar números en una misión galáctica. La aplicación genera números secretos, ofrece pistas para orientar cada intento y utiliza animaciones, efectos visuales, ventanas modales y audio para crear una experiencia temática inspirada en Star Wars.

El proyecto está desarrollado como una aplicación web estática, sin servidor ni base de datos. Todo el comportamiento se ejecuta directamente en el navegador mediante JavaScript y los recursos gráficos y de audio se almacenan en el propio repositorio.

> **Estado:** Versión 1 — Beta.

## 🎮 Características principales

- 🔢 Generación de números secretos y validación de intentos.
- 💡 Pistas que indican si el número secreto es mayor o menor que el valor introducido.
- 🏆 Registro visual de números acertados durante la partida.
- 🔁 Reinicio de partida y recarga completa del juego.
- 🌌 Diseño visual con fondos espaciales, transición de imágenes y estética galáctica.
- 🛸 Animaciones de personajes e imágenes temáticas durante el juego y al completar la misión.
- 🔊 Modal de logro con música, controles personalizados y barra de progreso.
- ❓ Ventana de ayuda integrada con instrucciones para jugar.
- ⌨️ Atajos de teclado para interactuar con la aplicación.
- 📱 Diseño adaptable mediante reglas `@media` para diferentes tamaños de pantalla.
- 🔗 Acceso directo al perfil de GitHub del autor.
- 🌐 Publicación preparada para GitHub Pages.

## 🕹️ ¿Cómo se juega?

1. Introduce un número en el campo de entrada.
2. Pulsa **Verificar** o presiona la tecla **Enter/Intro**.
3. Lee la pista mostrada en pantalla:
   - Si el número secreto es mayor, debes probar con un valor más alto.
   - Si el número secreto es menor, debes probar con un valor más bajo.
4. Cuando aciertes, se habilitará **Nuevo intento** para continuar con la siguiente ronda.
5. Consulta los números encontrados desde el botón de aciertos `#`.
6. Utiliza **Recargar página** para comenzar nuevamente desde cero cuando finalices la partida.

### Atajos disponibles

| Atajo | Acción |
| --- | --- |
| `Enter` / `Intro` | Verificar el número ingresado. |
| `Espacio` | Iniciar un nuevo intento cuando esté disponible. |
| `Alt + A` | Abrir o cerrar la ventana de ayuda. |
| `Alt + S` | Abrir o cerrar la ventana de números acertados. |
| `Alt + L` | Mostrar u ocultar el logro galáctico cuando esté disponible. |
| `Backspace` | Cerrar la ventana modal activa. |
| `F5` | Recargar la página y reiniciar completamente el juego. |

> **Nota de la versión beta:** la lógica actual define `maximumNumber = 2` en `app.js`, por lo que la partida genera dos valores únicos en la configuración vigente. Algunas cadenas de texto de la interfaz todavía mencionan siete números y forman parte de una versión anterior o experimental del diseño.

## 🧰 Tecnologías utilizadas

| Tecnología | Uso |
| --- | --- |
| **HTML5** | Estructura semántica de la interfaz, modales, controles y contenido del juego. |
| **CSS3** | Diseño visual, fondos, responsividad, transiciones, sombras y animaciones. |
| **JavaScript vanilla** | Lógica del juego, generación de números, validación, eventos, modales y audio. |
| **GitHub Pages** | Hospedaje de la versión web publicada. |
| **Google Fonts** | Fuentes `Chakra Petch`, `Inter` y `Lato`. |
| **Font Awesome** | Icono de GitHub y elementos visuales complementarios. |
| **Audio HTML5** | Reproducción de la música temática incluida en el directorio `aud`. |

El proyecto no utiliza `package.json`, npm, frameworks frontend ni un proceso de compilación. Las dependencias visuales externas se cargan mediante CDN desde `index.html`.

## 📁 Estructura del proyecto

```text
Numero-Secreto/
├── aud/
│   └── 01. Main Title (Star Wars).mp3  # Música utilizada en el modal de logro
├── img/                                # Fondos, personajes, iconos y recursos visuales
│   ├── dark.png                        # Imagen inicial de la transición visual
│   ├── anakin.png                      # Imagen alternativa durante la partida
│   ├── vader.png                       # Imagen de finalización
│   ├── darkvaderSW.png                 # Imagen final adicional
│   ├── empire.webp                     # Nave mostrada en el logro
│   ├── futuristic.jpg                  # Fondo espacial
│   ├── blue.jpg                        # Fondo principal del contenedor
│   ├── screen.jpg                      # Recurso gráfico del proyecto
│   └── ...                             # Favicons, iconos y recursos PWA
├── index.html                          # Estructura principal de la aplicación
├── app.js                              # Lógica del juego y manejo de eventos
├── style.css                           # Estilos, animaciones y diseño responsivo
├── .hintrc                             # Configuración de Webhint
├── LICENSE                             # Licencia MIT
└── README.md                           # Documentación del proyecto
```

## 🧩 Arquitectura y funcionamiento

La aplicación utiliza una arquitectura sencilla basada en tres archivos principales:

- `index.html` define el campo numérico, botones, ventanas modales, audio, mensajes y accesos de ayuda.
- `style.css` controla la apariencia de la página: fondos, tipografías, botones, transiciones, modales, animaciones y adaptación a pantallas pequeñas.
- `app.js` administra el estado de la partida mediante variables como `secretNumber`, `attempts`, `maximumNumber`, `randomNumbersList` y `successes`.

El flujo comienza con `initialInformation()`, que genera el primer número secreto mediante `generateSecretNumber()`. Cada intento se procesa en `verifyAttempt()`, que compara el valor escrito con el número secreto y actualiza las pistas, los botones y el estado de la interfaz. Las ventanas de ayuda, aciertos y logro se controlan mediante eventos de clic, teclado y animaciones CSS.

## 🚀 Instalación y ejecución local

### Requisitos previos

Solo necesitas:

- Un navegador web moderno: Chrome, Edge, Firefox, Safari u otro navegador compatible con HTML5, CSS3 y JavaScript.
- Git, únicamente si deseas clonar el repositorio.
- Un editor de código, opcional, si quieres modificar el proyecto.

No es necesario instalar Node.js, npm, un servidor backend ni una base de datos.

### 1. Clonar el repositorio

```bash
git clone https://github.com/MarioSi3ri/Numero-Secreto.git
cd Numero-Secreto
```

### 2. Abrir la aplicación

Puedes abrir directamente `index.html` en tu navegador:

**Windows:**

```bash
start index.html
```

**macOS:**

```bash
open index.html
```

**Linux:**

```bash
xdg-open index.html
```

También puedes abrir `index.html` manualmente desde el explorador de archivos.

### 3. Ejecutar con un servidor local opcional

Para una experiencia más cercana a un entorno web publicado, puedes utilizar cualquier servidor estático. Por ejemplo, con Python:

```bash
python3 -m http.server 8000
```

Después visita:

```text
http://localhost:8000
```

El servidor local es opcional; la aplicación está diseñada para funcionar como sitio estático.

## 🌐 Versión publicada

La versión disponible en línea está publicada mediante GitHub Pages:

**[https://mariosi3ri.github.io/Numero-Secreto/](https://mariosi3ri.github.io/Numero-Secreto/)**

Para publicar cambios, basta con actualizar los archivos del proyecto y subirlos a la rama configurada para GitHub Pages. No se requiere un proceso de compilación.

## 🛠️ Personalización y desarrollo

Para modificar el comportamiento del juego, revisa principalmente:

- `maximumNumber` en `app.js`: establece el rango o cantidad utilizada por la lógica actual.
- `generateSecretNumber()`: controla la generación de números únicos y la condición de finalización.
- `verifyAttempt()`: contiene la comparación entre el número ingresado y el secreto.
- `initialInformation()`: define el texto inicial de la partida.
- `style.css`: permite cambiar colores, tipografías, tamaños, fondos y animaciones.
- `index.html`: contiene la estructura de botones, modales, controles de audio y elementos visuales.

Al modificar rutas o nombres de recursos, asegúrate de conservar la correspondencia entre los archivos referenciados en `index.html`, `style.css`, `app.js`, `aud/` e `img/`.

## ✅ Validación manual

Actualmente no se incluyen pruebas automatizadas ni un sistema de compilación. Para validar una modificación:

1. Abre la aplicación en un navegador.
2. Comprueba que el campo acepte valores numéricos.
3. Verifica las pistas de número mayor o menor.
4. Confirma que los botones cambien de estado después de un acierto.
5. Prueba los modales de ayuda, aciertos y logro.
6. Revisa los atajos de teclado.
7. Comprueba la reproducción y el progreso del audio.
8. Prueba el diseño en una ventana de escritorio y en una pantalla pequeña.

## 🔮 Mejoras futuras

- Sincronizar todos los textos de la interfaz con la configuración real de `maximumNumber`.
- Extraer la configuración del juego a un objeto central para facilitar su mantenimiento.
- Incorporar pruebas automatizadas para la generación de números y la validación de intentos.
- Mejorar la accesibilidad con etiquetas más descriptivas, navegación completa por teclado y soporte para lectores de pantalla.
- Optimizar el tamaño de imágenes y audio para mejorar el tiempo de carga.
- Añadir un manifiesto PWA correctamente enlazado desde la raíz del proyecto.
- Separar las funcionalidades de audio, modales y lógica del juego en módulos JavaScript independientes.

## ⚠️ Aviso sobre la temática

Este proyecto es una pieza educativa y de portafolio creada por fans. Las referencias, nombres, imágenes, sonidos y elementos relacionados con **Star Wars** pertenecen a sus respectivos titulares de derechos, incluyendo Lucasfilm Ltd. y The Walt Disney Company. Este repositorio no pretende reclamar propiedad sobre dichas marcas ni representar un producto oficial.

## 📄 Licencia

El código de este proyecto se distribuye bajo la **Licencia MIT**. Consulta el archivo [LICENSE](LICENSE) para conocer las condiciones completas de uso, modificación y distribución.

## 👤 Autor

**Mario Sierra Neri**

- GitHub: [@MarioSi3ri](https://github.com/MarioSi3ri)

---

<p align="center">
  Hecho con 🌌, JavaScript y mucha imaginación galáctica.
</p>
