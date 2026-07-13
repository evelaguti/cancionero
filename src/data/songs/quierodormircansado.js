export default {
  id: "quierodormircansado",
  title: "Quiero dormir cansado",
  genre: "Emmanuel",
  suggestedKey: "Tono sugerido: Re menor (Dm)",
  chordsUsed: ["Dm", "Gm7", "C7", "F", "A#", "Em7(5-)", "A7", "C", "A#7M"],
  blocks: [
    {
      kind: "section",
      label: "Verso 1",
      stanzas: [
        [
          { chords: ["Dm", "Gm7"], lyric: "Quiero dormir cansado para no pensar en ti" },
          { chords: ["C7", "F"], lyric: "Quiero dormir profundamente" },
          { chords: ["A#", "Em7(5-)", "A7"], lyric: "Y no despertar llorando con la pena de no" },
          { chords: ["Dm"], lyric: "verte" }
        ]
      ]
    },
    {
      kind: "section",
      label: "Verso 2",
      stanzas: [
        [
          { chords: ["Dm", "Gm7"], lyric: "Quiero dormir cansado y no despertar jamás" },
          { chords: ["C7", "F"], lyric: "Quiero dormir eternamente" },
          { chords: ["A#", "Em7(5-)", "A7"], lyric: "Porque estoy enamorado y ese amor no me" },
          { chords: ["Dm"], lyric: "comprende" }
        ]
      ]
    },
    {
      kind: "section",
      label: "Coro 1",
      stanzas: [
        [
          { chords: ["Dm", "Em7(5-)", "C7", "F"], lyric: "Durmiendo vivir durmiendo, soñando vivir soñando" },
          { chords: ["A#", "F", "Gm7", "A7"], lyric: "Hasta que tú regreses y te entregues a mis brazos" },
          { chords: ["Dm", "Em7(5-)", "C7", "F"], lyric: "Prefiero vivir durmiendo, no quiero vivir llorando" },
          { chords: ["A#", "F", "Gm7", "A7"], lyric: "Hasta que tú comprendas que yo sigo enamorado" }
        ]
      ]
    },
    {
      kind: "progression",
      label: "Solo / Intermedio",
      pattern: [
        ["Dm", "Gm7", "C", "F"],
        ["A#7M", "Em7(5-)", "A7"]
      ]
    },
    {
      kind: "section",
      label: "Verso 3",
      stanzas: [
        [
          { chords: ["Dm", "Em7(5-)"], lyric: "Quiero dormir cansado para no pensar en ti" },
          { chords: ["C7", "F"], lyric: "Quiero dormir profundamente" },
          { chords: ["A#", "Em7(5-)", "A7"], lyric: "Y no despertar llorando con la pena de no" },
          { chords: ["Dm"], lyric: "verte" }
        ]
      ]
    },
    {
      kind: "section",
      label: "Verso 4",
      stanzas: [
        [
          { chords: ["Dm", "Gm7"], lyric: "Quiero dormir cansado y no despertar jamás" },
          { chords: ["C7", "F"], lyric: "Quiero dormir eternamente" },
          { chords: ["A#", "Em7(5-)", "A7"], lyric: "Porque estoy enamorado y ese amor no me" },
          { chords: ["Dm"], lyric: "comprende" }
        ]
      ]
    },
    {
      kind: "section",
      label: "Coro Final",
      stanzas: [
        [
          { chords: ["Dm", "Em7(5-)", "C7", "F"], lyric: "Durmiendo vivir durmiendo, soñando vivir soñando" },
          { chords: ["A#", "F", "Em7(5-)", "A7"], lyric: "Hasta que tú regreses y te entregues a mis brazos" },
          { chords: ["Dm", "Em7(5-)", "C7", "F"], lyric: "Prefiero vivir durmiendo, no quiero vivir llorando" },
          { chords: ["A#", "F", "Em7(5-)", "A7"], lyric: "Hasta que tú comprendas que yo sigo enamorado" }
        ]
      ]
    }
  ]
};
