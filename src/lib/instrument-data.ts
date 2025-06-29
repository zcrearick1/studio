export type Fingering = {
  note: string;
  positions: string[];
};

export type Instrument = {
  name: string;
  category: "Woodwind" | "String" | "Brass";
  fingerings: Fingering[];
  setupGuide: string;
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
    setupGuide: `1. **Assembly:** Gently twist the headjoint into the body, and the footjoint onto the other end. Align the embouchure hole with the first key on the body.
2. **Tuning:** Use a tuner to check the pitch of A4. Pull out or push in the headjoint to lower or raise the pitch.
3. **Cleaning:** After playing, use a cleaning rod and a soft cloth (like silk) to swab the inside of all three sections to remove moisture.
*Warning: Never force the joints together. If it's difficult, a tiny amount of cork grease can be applied, but this should be rare.*`,
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
    setupGuide: `1. **Reed Preparation:** Moisten the reed in your mouth for a minute.
2. **Assembly:** Assemble from the bell up to the barrel. Apply cork grease to the tenon corks if needed.
3. **Ligature and Reed:** Place the reed on the mouthpiece, with the flat side against the mouthpiece table. The tip of the reed should be slightly below the tip of the mouthpiece. Slide the ligature over and tighten the screws just enough to hold the reed firmly.
*Warning: Reeds are fragile and can break easily. Handle with care.*`,
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
    ],
    setupGuide: `1. **Oiling the Valves:** Unscrew one valve at a time. Pull it partially out and apply a few drops of valve oil. Re-insert, press the valve up and down to distribute the oil.
2. **Inserting the Mouthpiece:** Insert the mouthpiece and give it a gentle twist. Do not hit or force it in.
3. **Tuning:** Adjust the main tuning slide to tune the instrument. Pulling out lowers the pitch, pushing in raises it.
*Warning: Dropping a valve can permanently damage it. Oil them one by one over a soft surface.*`,
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
    setupGuide: `1. **Applying Rosin:** Tighten the bow hair (just enough so a pencil can fit between the hair and the stick). Rub the block of rosin up and down the length of the hair 5-10 times.
2. **Tuning:** Use the pegs for large adjustments and the fine tuners on the tailpiece for small adjustments. The strings should be G, D, A, E from lowest to highest.
3. **Shoulder Rest:** Attach the shoulder rest to the back of the violin. Adjust its position for comfort.
*Warning: Over-tightening the bow can warp the stick. Always loosen the hair after playing.*`,
  },
];
