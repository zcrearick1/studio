import type { Instrument } from '../instrument-types';

export const trumpet: Instrument = {
    name: "Trumpet",
    slug: "trumpet",
    category: "Brass",
    clef: "treble",
    fingerings: [
      { note: "F#3/Gb3", positions: ["1-2-3"] },
      { note: "G3", positions: ["1-3"] },
      { note: "G#3/Ab3", positions: ["2-3"] },
      { note: "A3", positions: ["1-2"] },
      { note: "A#3/Bb3", positions: ["1"] },
      { note: "B3/Cb4", positions: ["2"] },
      { note: "C4/B#3", positions: ["Open"] },
      { note: "C#4/Db4", positions: ["1-2-3"] },
      { note: "D4", positions: ["1-3"] },
      { note: "D#4/Eb4", positions: ["2-3"] },
      { note: "E4/Fb4", positions: ["1-2"] },
      { note: "F4/E#4", positions: ["1"] },
      { note: "F#4/Gb4", positions: ["2"] },
      { note: "G4", positions: ["Open"] },
      { note: "G#4/Ab4", positions: ["2-3"] },
      { note: "A4", positions: ["1-2"] },
      { note: "A#4/Bb4", positions: ["1"] },
      { note: "B4/Cb5", positions: ["2"] },
      { note: "C5/B#4", positions: ["Open"] },
      { note: "C#5/Db5", positions: ["1-2"] },
      { note: "D5", positions: ["1"] },
      { note: "D#5/Eb5", positions: ["2"] },
      { note: "E5/Fb5", positions: ["Open"] },
      { note: "F5/E#5", positions: ["1"] },
      { note: "F#5/Gb5", positions: ["2"] },
      { note: "G5", positions: ["Open"] },
      { note: "G#5/Ab5", positions: ["2-3"] },
      { note: "A5", positions: ["1-2"] },
      { note: "A#5/Bb5", positions: ["1"] },
      { note: "B5/Cb6", positions: ["2"] },
      { note: "C6/B#5", positions: ["Open"] }
    ],
    range: { low: "F#3", high: "C6" },
    setupGuide: [
      {
        title: "Assembly & Oiling",
        content: `The only assembly is inserting the mouthpiece. Give it a gentle twist to secure it. Do not hit or force it in, or it can get it stuck.
Before playing, oil the valves. Unscrew one valve at a time, pull it out partially, and apply a few drops of valve oil. Re-insert, making sure it clicks into its proper alignment, and screw the cap back on. Press the valve up and down to distribute the oil.

*Warning: Dropping a valve can permanently damage it. Oil them one by one over a soft surface.*`
      },
      {
        title: "Making Your First Sound",
        content: `Start by buzzing your lips, like making a "raspberry" sound. The buzz is what creates the sound.
Now, try buzzing into just the mouthpiece. Aim for a steady, consistent buzz.
Once you can do that, insert the mouthpiece into the trumpet and buzz again. Don't press the mouthpiece too hard against your lips.`
      },
      {
        title: "Tuning",
        content: `The main tuning slide is the large U-shaped slide near the front of the trumpet.
Play a written C (no valves pressed) and check it with a tuner. Pulling the slide out lowers the pitch (makes it flatter). Pushing it in raises the pitch (makes it sharper).`
      },
      {
        title: "Teardown and Maintenance",
        content: `Remove the mouthpiece.
Press the water keys (spit valves) to empty any condensation from the horn.
Wipe the outside of the trumpet with a soft cloth to remove fingerprints.
Store the trumpet and mouthpiece in the case. Give your trumpet a full bath every few months to clean it inside and out.`
      }
    ]
  };
