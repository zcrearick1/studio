import type { Instrument } from '../instrument-types';

export const flute: Instrument = {
    name: "Flute",
    slug: "flute",
    category: "Woodwind",
    clef: "treble",
    transposition: "C",
    fingerings: [
      { note: "C4/B#3", positions: ["T 123 | 123 C"], keys: ['thumb-b', 'L1', 'L2', 'L3', 'R1', 'R2', 'R3', 'foot-c', 'foot-csharp'] },
      { note: "C#4/Db4", positions: ["T 123 | 123 C#"], keys: ['thumb-b', 'L1', 'L2', 'L3', 'R1', 'R2', 'R3', 'foot-csharp'] },
      { note: "D4", positions: ["T 123 | 12- Eb"], keys: ['thumb-b', 'L1', 'L2', 'L3', 'R1', 'R2', 'R3'] },
      { note: "D#4/Eb4", positions: ["T 123 | 1-3 Eb"], keys: ['thumb-b', 'L1', 'L2', 'L3', 'R1', 'R2', 'R3', 'foot-dsharp'] },
      { note: "E4/Fb4", positions: ["T 12- | 12- Eb"], keys: ['thumb-b', 'L1', 'L2', 'L3', 'R1', 'R2', 'foot-dsharp'] },
      { note: "F4/E#4", positions: ["T 12- | 1-3"], keys: ['thumb-b', 'L1', 'L2', 'L3', 'R1', 'foot-dsharp'] },
      { note: "F#4/Gb4", positions: ["T 12- | --3"], keys: ['thumb-b', 'L1', 'L2', 'L3', 'R3'] },
      { note: "G4", positions: ["T 1-- | 123"], keys: ['thumb-b', 'L1', 'L2', 'L3', 'foot-dsharp'] },
      { note: "G#4/Ab4", positions: ["T 1-- | 12- Ab"], keys: ['thumb-b', 'L1', 'L2', 'L3', 'pinky-gsharp', 'foot-dsharp'] },
      { note: "A4", positions: ["T 1-- | 1--"], keys: ['thumb-b', 'L1', 'L2', 'foot-dsharp'] },
      { note: "A#4/Bb4", positions: ["T Bb | 1--"], keys: ['thumb-b', 'L1', 'R1', 'foot-dsharp'] },
      { note: "B4/Cb5", positions: ["T -2- | 1--"], keys: ['thumb-b', 'L1', 'foot-dsharp'] },
      { note: "C5/B#4", positions: ["- 1-- | ---"], keys: ['L1', 'foot-dsharp'] },
      { note: "C#5/Db5", positions: ["T --- | ---"], keys: ['foot-dsharp'] },
      { note: "D5", positions: ["T -23 | 123"], keys: ['thumb-b', 'L2', 'L3', 'R1', 'R2', 'R3'] },
      { note: "D#5/Eb5", positions: ["T -23 | 1-3 Eb"], keys: ['thumb-b', 'L2', 'L3', 'R1', 'R3', 'foot-dsharp'] },
      { note: "E5/Fb5", positions: ["T 12- | 12-"], keys: ['thumb-b', 'L1', 'L2', 'L3', 'R1', 'R2', 'foot-dsharp'] },
      { note: "F5/E#5", positions: ["T 12- | 1-3"], keys: ['thumb-b', 'L1', 'L2', 'L3', 'R1', 'foot-dsharp'] },
      { note: "F#5/Gb5", positions: ["T 12- | --3"], keys: ['thumb-b', 'L1', 'L2', 'L3', 'R3', 'foot-dsharp'] },
      { note: "G5", positions: ["T 1-- | ---"], keys: ['thumb-b', 'L1', 'L2', 'L3', 'foot-dsharp'] },
      { note: "G#5/Ab5", positions: ["T 1-- | Ab"], keys: ['thumb-b', 'L1', 'L2', 'L3', 'pinky-gsharp', 'foot-dsharp'] },
      { note: "A5", positions: ["T -2- | ---"], keys: ['thumb-b', 'L1', 'L2', 'foot-dsharp'] },
      { note: "A#5/Bb5", positions: ["T Bb | -2-"], keys: ['thumb-b', 'L1', 'R1', 'foot-dsharp'] },
      { note: "B5/Cb6", positions: ["T -2- | ---"], keys: ['thumb-b', 'L1', 'foot-dsharp'] },
      { note: "C6/B#5", positions: ["- 1-- | C"], keys: ['L1', 'foot-dsharp'] },
      { note: "C#6/Db6", positions: ["- -2- | ---"], keys: ['foot-dsharp'] },
      { note: "D6", positions: ["- -23 | 123"], keys: ['thumb-b', 'L2', 'L3', 'foot-dsharp'] },
      { note: "D#6/Eb6", positions: ["- 123 | 123 Eb"], keys: ['thumb-b', 'L1', 'L2', 'L3', 'pinky-gsharp', 'R1', 'R2', 'R3', 'foot-dsharp'] },
      { note: "E6/Fb6", positions: ["T 12- | 12- C# trill"], keys: ['thumb-b', 'L1', 'L2', 'R1', 'R2', 'foot-dsharp'] },
      { note: "F6/E#6", positions: ["T 1-3 | 1-3"], keys: ['thumb-b', 'L1', 'L3', 'R1', 'foot-dsharp'] },
      { note: "F#6/Gb6", positions: ["- 1-3 | --3"], keys: ['thumb-b', 'L1', 'L3', 'R3', 'foot-dsharp'] },
      { note: "G6", positions: ["- -23 | ---"], keys: ['L1', 'L2', 'L3', 'foot-dsharp'] },
      { note: "G#6/Ab6", positions: ["- -23 | Ab"], keys: ['L2', 'L3', 'pinky-gsharp', 'foot-dsharp'] },
      { note: "A6", positions: ["- 12- | -23 C trill"], keys: ['thumb-b', 'L2', 'R1', 'foot-dsharp'] },
      { note: "A#6/Bb6", positions: ["T Bb | -23 Eb"], keys: ['thumb-b', 'R1', 'trill-d'] },
      { note: "B6/Cb7", positions: ["T 12- | 1-3 B trill"], keys: ['thumb-b', 'L1', 'L3', 'trill-dsharp'] },
      { note: "C7/B#6", positions: ["- 1-- | 1-- D trill"], keys: ['L1', 'L2', 'L3', 'pinky-gsharp', 'R1'] }
    ],
    range: { low: "C4", high: "C7", default: "Bb4" },
    setupGuide: [
      {
        title: "Assembly",
        content: `Hold the body in one hand and the footjoint in the other. Gently twist the footjoint onto the body. Do not grab the keys while doing this.
Next, gently twist the headjoint into the other end of the body. The embouchure hole (the hole you blow across) on the headjoint should line up with the first key on the body.

*Warning: Never force the joints together. If it's difficult, a tiny amount of cork grease can be applied, but this should be rare.*`
      },
      {
        title: "Making Your First Sound",
        content: `Start with just the headjoint. Form a firm, flat chin (like saying the word "poo"). Place the lip plate against your chin so that your lower lip covers about 1/4 of the embouchure hole.
Blow a steady, gentle stream of air across the hole, aiming for the opposite edge. Experiment with the angle of your airstream until you get a clear, focused sound.`
      },
      {
        title: "Tuning",
        content: `Use an electronic tuner to check the pitch of the note A (first two fingers of left hand, first finger of right hand).
If the tuner shows the note is sharp (#), gently pull the headjoint out a little to make the flute longer and the pitch lower.
If the note is flat (b), push the headjoint in to make the flute shorter and the pitch higher.`
      },
      {
        title: "Teardown and Maintenance",
        content: `After playing, use a cleaning rod with a soft cloth (like silk or microfiber) threaded through it.
Swab the inside of all three sections to remove moisture.
Use a separate, soft cloth to wipe down the outside of the flute to remove fingerprints, which can tarnish the finish over time.
Carefully place each part back in its designated spot in the case.`
      }
    ],
  };
