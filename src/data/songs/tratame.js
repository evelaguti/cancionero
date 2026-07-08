export default {
  id: "tratame",
  title: "Trátame suavemente",
  genre: "Los Ángeles Negros",
  suggestedKey: "Ritmo de balada suave",
  chordsUsed: ["D", "F#m", "C", "Bm", "A", "G", "E"],
  blocks: [
    { kind: "progression", label: "Intro", pattern: [["D", "F#m", "C", "Bm", "A"]] },
    {
      kind: "section",
      label: "Verso 1",
      stanzas: [
        [
          { chords: ["D", "F#m", "C", "Bm", "A"], lyric: "Alguien me ha dicho que la soledad, se esconde tras tus ojos" },
          { chords: ["D", "F#m", "C", "Bm", "A"], lyric: "y que tu blusa atora sentimientos, que respiras" }
        ],
        [
          { chords: ["D", "F#m", "C", "Bm", "A"], lyric: "tenés que comprender que no puse tus miedos, donde están guardados" },
          { chords: ["D", "F#m", "C", "Bm", "A"], lyric: "y que no podré quitártelos si al hacerlo me desgarras" }
        ]
      ]
    },
    {
      kind: "section",
      label: "Pre-coro",
      stanzas: [
        [
          { chords: ["G", "A", "F#m", "E"], lyric: "No quiero soñar mil veces las mismas cosas" },
          { chords: ["G", "A", "F#m", "Bm"], lyric: "ni contemplarlas sabiamente" },
          { chords: ["G", "A", "C"], lyric: "quiero que me trates suavemente" }
        ]
      ]
    },
    {
      kind: "section",
      label: "Verso 2",
      stanzas: [
        [
          { chords: ["D", "F#m", "C", "Bm", "A"], lyric: "Te comportas de acuerdo, con lo que te dicta cada momento" },
          { chords: ["D", "F#m", "C", "Bm", "A"], lyric: "y esa inconstancia no es algo heroico, es mas bien algo enfermo" }
        ]
      ]
    },
    {
      kind: "section",
      label: "Coro",
      stanzas: [
        [
          { chords: ["G", "A", "F#m", "E"], lyric: "No quiero soñar mil veces las mismas cosas" },
          { chords: ["G", "A", "F#m", "Bm"], lyric: "ni contemplarlas sabiamente" },
          { chords: ["G", "A", "Bm", "C"], lyric: "quiero que me trates suavemente" }
        ]
      ]
    },
    {
      kind: "progression",
      label: "Solo",
      pattern: [
        ["Bm", "C"], ["Bm", "C"], ["Bm", "C"],
        ["D", "E", "C", "D"],
        ["D", "E"], ["D", "E"]
      ]
    },
    {
      kind: "section",
      label: "Outro",
      stanzas: [
        [
          { chords: ["G", "A", "F#m", "E"], lyric: "No quiero soñar mil veces las mismas cosas" },
          { chords: ["G", "A", "F#m", "Bm"], lyric: "ni contemplarlas sabiamente" },
          { chords: ["G", "A", "D", "E"], lyric: "quiero que me trates suavemente" },
          { chords: ["G", "A", "D", "E"], lyric: "quiero que me trates suavemente" },
          { chords: ["G", "A", "Bm", "Em", "F#m"], lyric: "quiero que me trates suavemente" }
        ],
        [
          { chords: ["Bm", "Em", "F#m"], lyric: "suavemente" },
          { chords: ["Bm", "Em", "F#m"], lyric: "suavemente" },
          { chords: ["Bm", "Em", "F#m", "Bm"], lyric: "suavemente" }
        ]
      ]
    }
  ]
};
