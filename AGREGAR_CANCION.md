# Guía para Agregar Canciones al Cancionero

Este documento explica cómo está estructurado el cancionero y detalla los pasos para agregar una nueva canción, registrarla en la aplicación y, si es necesario, añadir nuevos acordes para ukelele.

---

## 📂 Estructura de Datos del Cancionero

El proyecto maneja los datos de forma modular y desacoplada de la interfaz gráfica (HTML/CSS/Astro). Toda la información musical se encuentra dentro de `src/data/`:

```
src/data/
├── chords.js         # Base de datos de acordes con sus posiciones y digitación para ukelele
└── songs/            # Carpeta con los archivos de canciones individuales
    ├── index.js      # Índice central donde se importan y exportan las canciones
    ├── amor.js
    ├── perfidia.js   # (Ejemplo reciente)
    └── ...
```

---

## 📝 Paso 1: Crear el archivo de la canción

Crea un archivo JavaScript en la ruta `src/data/songs/[nombre-cancion].js`. Por ejemplo, `perfidia.js`.

El archivo debe exportar por defecto un objeto con la siguiente estructura y tipos:

```javascript
export default {
  id: "identificador-unico",           // ID en minúsculas y sin caracteres especiales (ej: "perfidia")
  title: "Título de la Canción",        // Título tal como aparecerá en la interfaz
  genre: "Género / Artista",            // Ej: "Bolero" o el nombre del artista ("Leo Dan")
  suggestedKey: "Tono sugerido: ...",   // Información del tono recomendado
  chordsUsed: ["C", "Am", "F"],        // Array con todos los acordes que se usan en la canción
  blocks: [                            // Bloques secuenciales de la estructura de la canción
    // Los bloques se detallan a continuación...
  ]
};
```

### Tipos de Bloques en `blocks`

El cancionero soporta dos tipos de bloques dentro de la propiedad `blocks`:

#### A. Bloques de Letra y Acordes (`kind: "section"`)
Se utilizan para estrofas, versos, coros y puentes.
- `kind`: Debe ser `"section"`.
- `label`: Nombre de la sección (ej: `"Verso 1"`, `"Coro"`, `"Puente"`, `"Verso Final"`).
- `stanzas`: Un array de estrofas. Cada estrofa es un array de líneas, donde cada línea es un objeto con:
  - `chords`: Un array de strings con los acordes que van sobre esa línea.
  - `lyric`: El texto/letra correspondiente a esa línea.

*Ejemplo:*
```javascript
{
  kind: "section",
  label: "Verso 1",
  stanzas: [
    [
      { chords: ["Em", "E7", "Am"], lyric: "Nadie comprende lo que sufro yo." },
      { chords: ["B7", "Em"], lyric: "Canto pues ya no puedo sollozar." }
    ]
  ]
}
```

#### B. Bloques de Progresión Instrumental (`kind: "progression"`)
Se utilizan para representar introducciones, solos de ukelele, o puentes puramente musicales donde no se canta.
- `kind`: Debe ser `"progression"`.
- `label`: Etiqueta indicativa (ej: `"Intro"`, `"Música"`, `"Solo"`).
- `pattern`: Un array bidimensional de acordes que representan compases o agrupaciones musicales.

*Ejemplo:*
```javascript
{
  kind: "progression",
  label: "Música",
  pattern: [
    ["E", "C#m", "F#m", "B7"],
    ["E", "C#m", "F#m", "B7"]
  ]
}
```

---

## 🔗 Paso 2: Registrar y hacer disponible la canción

Para que la nueva canción aparezca en la lista de pestañas del sitio y en la interfaz de navegación, debes registrarla en [src/data/songs/index.js](file:///Volumes/backup/dev/cancionero/src/data/songs/index.js).

1. Abre el archivo `src/data/songs/index.js`.
2. Importa el archivo de la nueva canción.
3. Agrégalo al array `songs`.

*Ejemplo:*
```javascript
import reloj from './reloj.js';
// ...
import perfidia from './perfidia.js'; // 1. Importar la canción

export const songs = [
  reloj,
  // ...
  perfidia // 2. Agregarla al array
];
```

---

## 🎼 Paso 3: Agregar nuevos acordes (Si es necesario)

Si la nueva canción utiliza acordes que no estaban en las canciones anteriores (como `Eadd9`), debes registrar la forma de tocarlos en el ukelele para que la interfaz pueda pintar su diagrama interactivo y el diapasón.

Abre [src/data/chords.js](file:///Volumes/backup/dev/cancionero/src/data/chords.js) y agrega el acorde al objeto `chordData`:

```javascript
export const chordData = {
  // ... acordes existentes ...
  "AcordeNuevo": { frets: [G, C, E, A], fingers: [G, C, E, A] }
};
```

### ¿Cómo definir los valores?
- **`frets`**: Los trastes que se deben presionar para cada una de las 4 cuerdas en afinación estándar del ukelele (de izquierda a derecha: **G, C, E, A**).
  - `0` indica cuerda al aire.
  - Un número positivo (ej: `2`) indica el traste.
  - `-1` si la cuerda debe ser silenciada (normalmente no se usa en ukelele).
- **`fingers`**: Los dedos sugeridos para presionar dichos trastes (de izquierda a derecha: **G, C, E, A**).
  - `0` para cuerda al aire.
  - `1` = Dedo índice.
  - `2` = Dedo medio.
  - `3` = Dedo anular.
  - `4` = Dedo meñique.

*Ejemplo:*
```javascript
"Eadd9": { frets: [1, 4, 2, 2], fingers: [1, 4, 2, 3] }
```

---

## 🛠️ Paso 4: Validar localmente

Una vez realizados los cambios, valida que no haya errores de compilación ejecutando los siguientes comandos en la terminal de tu proyecto:

1. **Servidor de desarrollo:**
   ```bash
   pnpm run dev
   ```
   Abre `http://localhost:4321` y verifica que la canción aparezca correctamente en las pestañas, que los acordes se pinten de forma correcta en el diapasón interactivo y que no haya errores en la consola.

2. **Compilación de producción:**
   ```bash
   pnpm run build
   ```
   Este comando realiza la compilación de producción con Astro, verificando que no existan enlaces rotos, imports incorrectos o errores de sintaxis en tus datos.
