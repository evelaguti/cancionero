export default {
  id: "ayer",
  title: "Ayer preguntaron por ti",
  genre: "Los Ángeles Negros",
  suggestedKey: "Tono sugerido: La menor (Am)",
  chordsUsed: ["Am", "Dm", "G", "C", "E7", "A7"],
  blocks: [
    { kind: "progression", label: "Intro", pattern: [["Am", "Dm", "G", "C", "E7"]] },
    {
      kind: "section",
      label: "Verso 1",
      stanzas: [
        [
          { chords: ["Am", "Dm"], lyric: "Ayer preguntaron por ti," },
          { chords: ["G", "C", "E7"], lyric: "tu nombre salió a relucir." },
          { chords: ["Am", "Dm"], lyric: "Sentí una tristeza en mi voz" },
          { chords: ["E7", "Am"], lyric: "al hablar de nuestro amor." }
        ]
      ]
    },
    {
      kind: "section",
      label: "Coro",
      stanzas: [
        [
          { chords: ["Dm", "G"], lyric: "Dijeron que te han visto bien," },
          { chords: ["C", "Am"], lyric: "que luces hermosa y feliz," },
          { chords: ["Dm", "E7"], lyric: "no saben que dentro de mí" },
          { chords: ["Am", "A7"], lyric: "se vive muriendo este amor." }
        ]
      ]
    },
    {
      kind: "section",
      label: "Puente",
      stanzas: [
        [
          { chords: ["Dm", "G"], lyric: "Y yo me quedé en silencio," },
          { chords: ["C", "Am"], lyric: "sin fuerzas para contestar," },
          { chords: ["Dm", "E7"], lyric: "pues solo mi alma y mi llanto" },
          { chords: ["Am", "A7"], lyric: "saben lo que es olvidar." }
        ]
      ]
    }
  ]
};
