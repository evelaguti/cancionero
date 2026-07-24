export default {
  id: "signos",
  title: "Signos",
  genre: "Soda Stereo",
  suggestedKey: "Tono sugerido: La menor (Am)",
  chordsUsed: ["Am", "G/A", "G", "Dm", "Gm", "F", "Em", "C", "D", "G4", "Fm", "E"],
  blocks: [
    {
      kind: "progression",
      label: "Intro",
      pattern: [
        ["Am", "G/A", "G", "Dm"],
        ["Am", "G/A", "Gm", "F"]
      ]
    },
    {
      kind: "section",
      label: "Primera Parte",
      stanzas: [
        [
          { chords: ["Am", "G/A", "G"], lyric: "No hay un modo" },
          { chords: ["F"], lyric: "No hay un punto exacto" },
          { chords: ["Am", "G/A", "Gm"], lyric: "Te doy todo" },
          { chords: ["F"], lyric: "Y siempre guardo algo" }
        ],
        [
          { chords: ["Am", "G/A", "G"], lyric: "Si estás oculta" },
          { chords: ["F", "Am"], lyric: "Como sabré quién eres?" },
          { chords: ["G/A", "Gm"], lyric: "Me amas a obscuras" },
          { chords: ["F", "Am"], lyric: "Duermes envuelta en redes" }
        ]
      ]
    },
    {
      kind: "section",
      label: "Estribillo",
      stanzas: [
        [
          { chords: ["D"], lyric: "Signos" },
          { chords: ["Am", "D", "C"], lyric: "mi parte insegura" },
          { chords: ["Am", "D"], lyric: "Bajo una Luna hostil" },
          { chords: ["Am", "D", "C", "G4"], lyric: "Signos, oh" }
        ]
      ]
    },
    {
      kind: "progression",
      label: "Interludio 1",
      pattern: [
        ["Am", "G/A", "G", "Dm"],
        ["Am", "G/A", "Gm", "F"]
      ]
    },
    {
      kind: "section",
      label: "Segunda Parte",
      stanzas: [
        [
          { chords: ["Am", "G/A", "G"], lyric: "Mar de fondo" },
          { chords: ["F", "Am"], lyric: "No caeré en la trampa" },
          { chords: ["G/A", "Gm"], lyric: "Llámame pronto" },
          { chords: ["F"], lyric: "Acertijos bajo el agua" }
        ],
        [
          { chords: ["Am", "G/A", "G"], lyric: "Si algo cedes" },
          { chords: ["F", "Am"], lyric: "Calmaré tu histeria" },
          { chords: ["G/A", "Gm"], lyric: "Con los dientes" },
          { chords: ["F"], lyric: "Rasgaré tus medias" }
        ]
      ]
    },
    {
      kind: "section",
      label: "Estribillo",
      stanzas: [
        [
          { chords: ["Am", "D"], lyric: "Signos" },
          { chords: ["Am", "D", "C"], lyric: "Mi parte insegura" },
          { chords: ["Am", "D"], lyric: "Bajo una Luna hostil" },
          { chords: ["Am", "D", "C"], lyric: "Signos, oh" }
        ],
        [
          { chords: ["Am", "D"], lyric: "Signos" },
          { chords: ["Am", "D", "C"], lyric: "Uniendo fisuras" },
          { chords: ["Am", "D"], lyric: "Figuras sin definir" },
          { chords: ["Em", "D", "C", "G4", "Am"], lyric: "Signos, oh... oh..." }
        ]
      ]
    },
    {
      kind: "progression",
      label: "Solo Interludio",
      pattern: [
        ["Dm", "Fm", "C", "Am"],
        ["Dm", "Am", "C"],
        ["Dm", "Fm", "C", "Am"],
        ["Dm", "Am", "E"]
      ]
    },
    {
      kind: "section",
      label: "Estribillo",
      stanzas: [
        [
          { chords: ["Am", "D"], lyric: "Signos" },
          { chords: ["Am", "D", "C"], lyric: "Mi parte insegura" },
          { chords: ["Am", "D"], lyric: "Bajo una Luna hostil" },
          { chords: ["Am", "D", "C"], lyric: "Signos, oh" }
        ],
        [
          { chords: ["Am", "D"], lyric: "Signos" },
          { chords: ["Am", "D", "C"], lyric: "Uniendo fisuras" },
          { chords: ["Am", "D"], lyric: "Figuras sin definir" },
          { chords: ["Em", "D", "C"], lyric: "Signos, oh... oh..." }
        ]
      ]
    },
    {
      kind: "progression",
      label: "Final",
      pattern: [
        ["Am", "D", "Am", "D", "C"],
        ["Am", "D", "Em", "D", "C"],
        ["Am", "D", "Am", "D", "C"],
        ["Am", "D", "Em", "D", "C"]
      ]
    }
  ]
};
