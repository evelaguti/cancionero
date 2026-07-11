export default {
  id: "contigo",
  title: "Contigo",
  genre: "Bolero",
  suggestedKey: "Tono sugerido: Do Mayor (C)",
  chordsUsed: ["C", "Am", "Dm", "G#7", "G7", "G", "E7", "A7", "Em", "C7", "F", "Fm"],
  blocks: [
    {
      kind: "progression",
      label: "Intro",
      pattern: [["C", "Am", "Dm", "G#7"], ["G7", "C", "Am", "Dm", "G"]]
    },
    {
      kind: "section",
      label: "Verso 1",
      stanzas: [
        [
          { chords: ["C", "E7", "Am", "A7", "Dm"], lyric: "Tus besos se llegaron a recrear, aquí en mi boca" },
          { chords: ["G7", "Dm", "G7", "C"], lyric: "Llenando de ilusión y de pasión mi vida loca" }
        ],
        [
          { chords: ["C", "Dm", "G7"], lyric: "Las horas más felices de mi amor fueron contigo" },
          { chords: ["Dm", "G7", "C", "Em", "Dm", "G7"], lyric: "Por eso es que mi alma siempre extraña el dulce alivio" }
        ]
      ]
    },
    {
      kind: "section",
      label: "Verso 2",
      stanzas: [
        [
          { chords: ["C", "E7", "Am", "Dm", "G7"], lyric: "Te puedo yo jurar ante un altar mi amor sincero" },
          { chords: ["Dm", "G7", "C"], lyric: "A todo el mundo le puedes contar que sí te quiero" }
        ],
        [
          { chords: ["C", "C7", "F", "Fm"], lyric: "Tus labios me enseñaron a sentir lo que es ternura" },
          { chords: ["Dm", "G7", "C", "Am", "Dm", "G7"], lyric: "Y no me cansaré de bendecir tanta dulzura" }
        ]
      ]
    }
  ]
};
