export default {
  id: "reloj",
  title: "El Reloj",
  genre: "Bolero",
  suggestedKey: "Do Mayor (C)",
  chordsUsed: ["C", "Am", "Dm", "G7", "Em"],
  blocks: [
    { kind: "progression", label: "Intro", pattern: [["C", "Am"], ["Dm", "G7"], ["C", "Am"], ["Dm", "G7"]] },
    {
      kind: "section",
      label: "Verso",
      stanzas: [
        [
          { chords: ["C", "Am", "Dm", "G7"], lyric: "Reloj, no marques las horas" },
          { chords: ["C", "Am", "Dm", "G7"], lyric: "porque voy a enloquecer" },
          { chords: ["C", "Am", "Dm", "G7"], lyric: "ella se irá para siempre" },
          { chords: ["C", "Am", "Dm", "G7"], lyric: "cuando amanezca otra vez." }
        ],
        [
          { chords: ["C", "Am", "Dm", "G7"], lyric: "Nomás nos queda esta noche" },
          { chords: ["C", "Am", "Dm", "G7"], lyric: "para vivir nuestro amor" },
          { chords: ["C", "Am", "Dm", "G7"], lyric: "y tu tic tac me recuerda" },
          { chords: ["C", "Am", "Dm", "G7"], lyric: "mi irremediable dolor." }
        ]
      ]
    },
    {
      kind: "section",
      label: "Coro",
      stanzas: [
        [
          { chords: ["C", "Am", "Em"], lyric: "Reloj, detén tu camino" },
          { chords: ["Dm", "G7", "C", "Am"], lyric: "porque mi vida se apaga" },
          { chords: ["Dm", "G7", "C", "Am"], lyric: "ella es la estrella que alumbra mi ser" },
          { chords: ["Dm", "G7", "C", "Am"], lyric: "yo sin su amor no soy nada." }
        ],
        [
          { chords: ["C", "Am", "Em"], lyric: "Detén el tiempo en tus manos" },
          { chords: ["Dm", "G7", "C", "Am"], lyric: "haz esta noche perpetua" },
          { chords: ["Dm", "G7", "C", "Am"], lyric: "para que nunca se vaya de mí" },
          { chords: ["Dm", "G7", "C", "Am"], lyric: "para que nunca amanezca." }
        ]
      ]
    }
  ]
};
