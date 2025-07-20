import type { Instrument } from '../instrument-types';

export const baritoneTC: Instrument = {
    name: "Baritone T.C.",
    slug: "baritone-tc",
    category: "Brass",
    clef: "treble",
    transposition: "Bb",
    fingerings: [
      { note: "F#3/Gb3", positions: ["1-2-3"], keys: ['v1', 'v2', 'v3'] },
      { note: "G3", positions: ["1-3"], keys: ['v1', 'v3'] },
      { note: "G#3/Ab3", positions: ["2-3"], keys: ['v2', 'v3'] },
      { note: "A3", positions: ["1-2"], keys: ['v1', 'v2'] },
      { note: "A#3/Bb3", positions: ["1"], keys: ['v1'] },
      { note: "B3/Cb4", positions: ["2"], keys: ['v2'] },
      { note: "C4/B#3", positions: ["Open"], keys: [] },
      { note: "C#4/Db4", positions: ["1-2-3"], keys: ['v1', 'v2', 'v3'] },
      { note: "D4", positions: ["1-3"], keys: ['v1', 'v3'] },
      { note: "D#4/Eb4", positions: ["2-3"], keys: ['v2', 'v3'] },
      { note: "E4/Fb4", positions: ["1-2"], keys: ['v1', 'v2'] },
      { note: "F4/E#4", positions: ["1"], keys: ['v1'] },
      { note: "F#4/Gb4", positions: ["2"], keys: ['v2'] },
      { note: "G4", positions: ["Open"], keys: [] },
      { note: "G#4/Ab4", positions: ["2-3"], keys: ['v2', 'v3'] },
      { note: "A4", positions: ["1-2"], keys: ['v1', 'v2'] },
      { note: "A#4/Bb4", positions: ["1"], keys: ['v1'] },
      { note: "B4/Cb5", positions: ["2"], keys: ['v2'] },
      { note: "C5/B#4", positions: ["Open"], keys: [] },
      { note: "C#5/Db5", positions: ["1-2"], keys: ['v1', 'v2'] },
      { note: "D5", positions: ["1"], keys: ['v1'] },
      { note: "D#5/Eb5", positions: ["2"], keys: ['v2'] },
      { note: "E5/Fb5", positions: ["Open"], keys: [] },
      { note: "F5/E#5", positions: ["1"], keys: ['v1'] },
      { note: "F#5/Gb5", positions: ["2"], keys: ['v2'] },
      { note: "G5", positions: ["Open"], keys: [] },
      { note: "G#5/Ab5", positions: ["2-3"], keys: ['v2', 'v3'] },
      { note: "A5", positions: ["1-2"], keys: ['v1', 'v2'] },
      { note: "A#5/Bb5", positions: ["1"], keys: ['v1'] },
      { note: "B5/Cb6", positions: ["2"], keys: ['v2'] },
      { note: "C6/B#5", positions: ["Open"], keys: [] }
    ],
    range: { low: "F#3", high: "C6", default: "C4" },
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
Play a written C (no valves pressed) and check it with a tuner. Pull the slide out to lower the pitch and push it in to raise the pitch.`
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
