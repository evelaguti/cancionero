export default {
  id: "llorando",
  title: "Déjenme si estoy llorando",
  genre: "Los Ángeles Negros",
  suggestedKey: "La Mayor (A)",
  chordsUsed: ["A", "C#m", "D", "Bm", "E"],
  blocks: [
    { kind: "progression", label: "Intro", pattern: [["Bm", "A", "E", "A"]] },
    {
      kind: "section",
      label: "Verso",
      stanzas: [
        [
          { chords: ["A", "C#m", "D"], lyric: "Déjenme si estoy llorando, ni un consuelo estoy buscando" },
          { chords: ["A", "D"], lyric: "quiero estar solo con mi dolor." },
          { chords: ["A"], lyric: "Si me ves que a solas voy llorando" },
          { chords: ["E"], lyric: "es que estoy de pronto recordando" },
          { chords: ["A", "E"], lyric: "a un amor que no consigo olvidar." }
        ],
        [
          { chords: ["A", "C#m", "D"], lyric: "Déjenme si estoy llorando, es que sigo procurando" },
          { chords: ["A", "D"], lyric: "en cada lágrima darme paz." },
          { chords: ["A"], lyric: "Pues el llanto le hace bien al alma" },
          { chords: ["E"], lyric: "si has sufrido perdiendo la calma" },
          { chords: ["A", "E"], lyric: "y yo quiero olvidar que tu amor ya se fue." }
        ]
      ]
    },
    {
      kind: "section",
      label: "Coro",
      stanzas: [
        [
          { chords: ["D", "C#m"], lyric: "Si me ven que estoy llorando" },
          { chords: ["Bm", "E", "A"], lyric: "es que a solas voy sacando, la nostalgia que ahora vive en mí." },
          { chords: ["D", "A"], lyric: "No me pidan ni una explicación" },
          { chords: ["E"], lyric: "y es que no ha de hallar mi corazón" },
          { chords: ["A"], lyric: "la felicidad que ya perdí." },
          { chords: ["D", "A"], lyric: "y ha negado en este mar de llanto" },
          { chords: ["E"], lyric: "sentiré que no te quise tanto" },
          { chords: ["A", "D"], lyric: "y quizás me olvidaré de ti." }
        ]
      ]
    },
    { kind: "progression", label: "Final", pattern: [["Bm", "A", "E", "A"]] }
  ]
};
