export type Fingering = {
  note: string;
  positions: string[];
};

export type Instrument = {
  name: string;
  category: "Woodwind" | "String" | "Brass";
  fingerings: Fingering[];
};

export const instruments: Instrument[] = [
  {
    name: "Flute",
    category: "Woodwind",
    fingerings: [
      { note: "C4", positions: ["T", "1", "2", "3", "|", "1", "2", "3", "C#"] },
      { note: "C#4/Db4", positions: ["T", "1", "2", "3", "|", "1", "2", "3"] },
      { note: "D4", positions: ["T", "1", "2", "3", "|", "1", "2", "E"] },
      { note: "E4", positions: ["T", "1", "2", "|", "1", "2", "Eb"] },
      { note: "F4", positions: ["T", "1", "2", "|", "1", "2"] },
      { note: "G4", positions: ["T", "1", "2", "|"] },
      { note: "A4", positions: ["T", "|"] },
    ],
  },
  {
    name: "Clarinet",
    category: "Woodwind",
    fingerings: [
      { note: "E3", positions: ["T", "1", "2", "3", "4", "5", "6"] },
      { note: "F3", positions: ["T", "1", "2", "3", "4", "5"] },
      { note: "G3", positions: ["T", "1", "2", "3"] },
      { note: "A3", positions: ["T", "1"] },
      { note: "B3", positions: ["T"] },
      { note: "C4", positions: ["All open"] },
    ],
  },
  {
    name: "Trumpet",
    category: "Brass",
    fingerings: [
        { note: "C4", positions: ["1", "2", "3"] },
        { note: "C#4/Db4", positions: ["1", "2"] },
        { note: "D4", positions: ["1", "3"] },
        { note: "D#4/Eb4", positions: ["2", "3"] },
        { note: "E4", positions: ["1"] },
        { note: "F4", positions: ["Open"] },
        { note: "G4", positions: ["1", "2"] },
    ]
  },
  {
    name: "Violin",
    category: "String",
    fingerings: [
      { note: "G3", positions: ["Open G string"] },
      { note: "A3", positions: ["1st finger on G string"] },
      { note: "B3", positions: ["2nd finger on G string"] },
      { note: "C4", positions: ["3rd finger on G string"] },
      { note: "D4", positions: ["Open D string"] },
      { note: "E4", positions: ["1st finger on D string"] },
      { note: "F#4", positions: ["2nd finger on D string"] },
    ],
  },
];
