import type { Instrument } from '../instrument-types';

export const baritoneBC: Instrument = {
    name: "Baritone B.C.",
    slug: "baritone-bc",
    category: "Brass",
    clef: "bass",
    transposition: "C",
    fingerings: [
      { note: "E2/Fb2", positions: ["1-2"], keys: ['v1', 'v2'] },
      { note: "F2/E#2", positions: ["1"], keys: ['v1'] },
      { note: "F#2/Gb2", positions: ["2"], keys: ['v2'] },
      { note: "G2", positions: ["Open"], keys: [] },
      { note: "G#2/Ab2", positions: ["2-3"], keys: ['v2', 'v3'] },
      { note: "A2", positions: ["1-2"], keys: ['v1', 'v2'] },
      { note: "A#2/Bb2", positions: ["1"], keys: ['v1'] },
      { note: "B2/Cb3", positions: ["2"], keys: ['v2'] },
      { note: "C3/B#2", positions: ["Open"], keys: [] },
      { note: "C#3/Db3", positions: ["1-2"], keys: ['v1', 'v2'] },
      { note: "D3", positions: ["1"], keys: ['v1'] },
      { note: "D#3/Eb3", positions: ["2"], keys: ['v2'] },
      { note: "E3/Fb3", positions: ["Open"], keys: [] },
      { note: "F3/E#3", positions: ["1"], keys: ['v1'] },
      { note: "F#3/Gb3", positions: ["2"], keys: ['v2'] },
      { note: "G3", positions: ["Open"], keys: [] },
      { note: "G#3/Ab3", positions: ["2-3"], keys: ['v2', 'v3'] },
      { note: "A3", positions: ["1-2"], keys: ['v1', 'v2'] },
      { note: "A#3/Bb3", positions: ["1"], keys: ['v1'] },
      { note: "B3/Cb4", positions: ["2"], keys: ['v2'] },
      { note: "C4/B#3", positions: ["Open"], keys: [] },
      { note: "C#4/Db4", positions: ["1-2"], keys: ['v1', 'v2'] },
      { note: "D4", positions: ["1"], keys: ['v1'] },
      { note: "D#4/Eb4", positions: ["2"], keys: ['v2'] },
      { note: "E4/Fb4", positions: ["Open"], keys: [] },
      { note: "F4/E#4", positions: ["1"], keys: ['v1'] },
      { note: "F#4/Gb4", positions: ["2"], keys: ['v2'] },
      { note: "G4", positions: ["Open"], keys: [] },
      { note: "G#4/Ab4", positions: ["2-3"], keys: ['v2', 'v3'] },
      { note: "A4", positions: ["1-2"], keys: ['v1', 'v2'] },
      { note: "A#4/Bb4", positions: ["1"], keys: ['v1'] }
    ],
    range: { low: "E2", high: "Bb4" },
    setupGuide: [
      {
        title: "Assembly & Oiling",
        content: `Gently twist the mouthpiece into the leadpipe to secure it.
Before playing, oil the valves. Unscrew one valve at a time, pull it out partially, and apply a few drops of valve oil. Re-insert, making sure it clicks into its proper alignment, and screw the cap back on. Press the valve up and down to distribute the oil.
*Warning: Be careful not to drop the valves. Always oil them one at a time over a soft surface.*`
      },
      {
        title: "Making Your First Sound",
        content: `The sound is produced by buzzing your lips. Practice buzzing into just the mouthpiece first, aiming for a steady, clear tone.
Then, insert the mouthpiece into the baritone and buzz again. Support your sound with a steady stream of air.`
      },
      {
        title: "Tuning",
        content: `The main tuning slide is the large U-shaped slide near the front of the instrument.
Play a Bb (no valves pressed) and check it with a tuner. Pull the slide out to lower the pitch and push it in to raise the pitch.`
      },
      {
        title: "Teardown and Maintenance",
        content: `Remove the mouthpiece.
Press the water keys to empty any condensation from the horn.
Wipe the outside of the instrument with a soft cloth to remove fingerprints.
Store the baritone and mouthpiece in their case.`
      }
    ]
  };
