export default {
  id: "perfidia",
  title: "Perfidia",
  genre: "Bolero",
  suggestedKey: "Tono sugerido: Mi menor (Em)",
  chordsUsed: ["Em", "E7", "Am", "B7", "E", "C#m", "F#m", "G#", "B", "A", "Eadd9"],
  blocks: [
    {
      kind: "section",
      label: "Verso 1",
      stanzas: [
        [
          { chords: ["Em", "E7", "Am"], lyric: "Nadie comprende lo que sufro yo." },
          { chords: ["B7", "Em"], lyric: "Canto pues ya no puedo sollozar." },
          { chords: ["E7", "Am"], lyric: "Solo temblando de ansiedad estoy." },
          { chords: ["B7"], lyric: "Todos me miran y se van." }
        ]
      ]
    },
    {
      kind: "progression",
      label: "Música",
      pattern: [
        ["E", "C#m", "F#m", "B7"],
        ["E", "C#m", "F#m", "B7"]
      ]
    },
    {
      kind: "section",
      label: "Verso 2",
      stanzas: [
        [
          { chords: ["B7", "E", "C#m", "F#m"], lyric: "Mujer," },
          { chords: ["B7", "E", "C#m", "F#m"], lyric: "si puedes tú con Dios hablar" },
          { chords: ["B7", "E", "C#m"], lyric: "pregúntale si yo alguna vez" },
          { chords: ["F#m", "G#"], lyric: "te he dejado de adorar." }
        ],
        [
          { chords: ["B7", "E", "C#m", "F#m"], lyric: "Al mar" },
          { chords: ["B7", "E", "C#m", "F#m"], lyric: "espejo de mi corazón" },
          { chords: ["B7", "E", "C#m"], lyric: "las veces que me ha visto llorar" },
          { chords: ["F#m", "G#"], lyric: "la perfidia de tu amor." }
        ]
      ]
    },
    {
      kind: "section",
      label: "Puente",
      stanzas: [
        [
          { chords: ["A"], lyric: "Te he buscado por doquiera que yo voy" },
          { chords: ["G#"], lyric: "y no te puedo hallar." },
          { chords: ["B"], lyric: "Para qué quiero otros besos" },
          { chords: ["G#", "B", "B7"], lyric: "si tus labios no me quieren ya besar." }
        ]
      ]
    },
    {
      kind: "section",
      label: "Verso 3",
      stanzas: [
        [
          { chords: ["B7", "E", "C#m", "F#m"], lyric: "Y tú" },
          { chords: ["B7", "E", "C#m", "F#m"], lyric: "quién sabe por dónde andarás" },
          { chords: ["B7", "E", "C#m"], lyric: "quién sabe qué aventura tendrás" },
          { chords: ["F#m", "B7", "E", "C#m", "F#m", "B7"], lyric: "qué lejos estás de mí." }
        ]
      ]
    },
    {
      kind: "progression",
      label: "Música",
      pattern: [
        ["E", "C#m", "F#m", "B7"]
      ]
    },
    {
      kind: "section",
      label: "Puente",
      stanzas: [
        [
          { chords: ["A"], lyric: "Te he buscado por doquiera que yo voy" },
          { chords: ["G#"], lyric: "y no te puedo hallar." },
          { chords: ["B"], lyric: "Para qué quiero otros besos" },
          { chords: ["G#", "B", "B7"], lyric: "si tus labios no me quieren ya besar." }
        ]
      ]
    },
    {
      kind: "section",
      label: "Verso Final",
      stanzas: [
        [
          { chords: ["B7", "E", "C#m", "F#m"], lyric: "Y tú" },
          { chords: ["B7", "E", "C#m", "F#m"], lyric: "quién sabe por dónde andarás" },
          { chords: ["B7", "E", "C#m"], lyric: "quién sabe qué aventura tendrás" },
          { chords: ["F#m", "B7", "E", "C#m", "F#m", "B7"], lyric: "qué lejos estás de mí" },
          { chords: ["B7", "E", "Eadd9"], lyric: "de mí." }
        ]
      ]
    }
  ]
};
