# Cancionero de Boleros para Ukelele

Este es un proyecto modular basado en Astro que contiene letras completas, cifrado interactivo y diagramas de acordes de boleros populares adaptados para ukelele. También incluye una herramienta de afinación estándar (G-C-E-A) de procesamiento 100% local en el navegador.

## 📐 Arquitectura Modular (Archivos < 250 líneas)

El proyecto está diseñado siguiendo una arquitectura modular estricta para facilitar su mantenimiento y edición, asegurando que ningún archivo supere el límite de 250 líneas de código:

- **`src/data/`**: Base de datos de acordes (`chords.js`) y datos individuales por canción en la subcarpeta `songs/` (como `reloj.js`, `tratame.js`, etc.).
- **`src/components/`**: Componentes Astro que encapsulan su propio HTML, lógica y estilos CSS (como `Header.astro`, `TabList.astro`, `SongPanel.astro`, `ChordLibrary.astro`, `Fretboard.astro`, `LyricSheet.astro`, `Tuner.astro` y `Footer.astro`).
- **`src/scripts/`**: Archivos de interactividad del lado del cliente (`interactive.js` para control de pestañas y efectos de scroll/vibración; `tuner.js` para el procesador de audio del afinador).
- **`src/styles/`**: Estilos base y variables globales de color en `global.css`.
- **`public/`**: Contiene recursos PWA y el Service Worker (`sw.js`) para soporte offline.

---

## 🚀 Comandos de Desarrollo Local

Asegúrate de estar en el directorio raíz y ejecuta:

| Comando | Acción |
| :--- | :--- |
| `pnpm install` | Instala las dependencias necesarias |
| `pnpm run dev` | Inicia el servidor de desarrollo en `http://localhost:4321` |
| `pnpm run build` | Compila el sitio para producción en la carpeta `dist/` |
| `pnpm run preview` | Previsualiza localmente el sitio compilado |

---

## 🌐 Instrucciones de Despliegue en GitHub Pages

El proyecto está configurado para desplegarse automáticamente en GitHub Pages. A continuación se detallan los pasos para realizarlo:

### Método Automatizado (Recomendado via GitHub Actions)

El proyecto incluye un flujo de trabajo automatizado en `.github/workflows/deploy.yml`.

1. **Configurar el Repositorio en GitHub:**
   - Ve a la página de tu repositorio en GitHub.
   - Entra a **Settings** (Configuración) > **Pages** en el menú lateral.
   - En la sección **Build and deployment** > **Source**, selecciona **GitHub Actions** en el menú desplegable (en lugar de "Deploy from a branch").

2. **Hacer Push de los Cambios:**
   - Cada vez que realices cambios y los subas a la rama principal (`main`):
     ```sh
     git add .
     git commit -m "feat: descripción de tus cambios"
     git push origin main
     ```
   - GitHub ejecutará automáticamente la compilación (`pnpm run build`) y publicará el sitio en `https://evelaguti.github.io/cancionero/`.

### Método Manual (Alternativa Local)

Si prefieres compilar y subir los archivos de forma manual:

1. **Generar la compilación:**
   - Ejecuta localmente en tu terminal:
     ```sh
     pnpm run build
     ```
   - Esto generará los archivos finales optimizados dentro del directorio `/dist`.

2. **Publicar la carpeta `dist`:**
   - Puedes subir el contenido de la carpeta `/dist` directamente a una rama dedicada como `gh-pages` en tu repositorio de GitHub, o utilizar utilidades como el paquete `gh-pages` de npm para automatizar la subida de ese directorio específico:
     ```sh
     pnpm dlx gh-pages -d dist
     ```
