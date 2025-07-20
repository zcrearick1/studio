import type { Instrument } from '../instrument-types';

export const tuba: Instrument = {
    name: "Tuba",
    slug: "tuba",
    category: "Brass",
    clef: "bass",
    transposition: "C",
    fingerings: [
      { note: "D1", positions: ["1-3"], keys: ['v1', 'v3'] },
      { note: "D#1/Eb1", positions: ["2-3"], keys: ['v2', 'v3'] },
      { note: "E1/Fb1", positions: ["1-2"], keys: ['v1', 'v2'] },
      { note: "F1/E#1", positions: ["1"], keys: ['v1'] },
      { note: "F#1/Gb1", positions: ["2"], keys: ['v2'] },
      { note: "G1", positions: ["Open"], keys: [] },
      { note: "G#1/Ab1", positions: ["2-3"], keys: ['v2', 'v3'] },
      { note: "A1", positions: ["1-2"], keys: ['v1', 'v2'] },
      { note: "A#1/Bb1", positions: ["1"], keys: ['v1'] },
      { note: "B1/Cb2", positions: ["2"], keys: ['v2'] },
      { note: "C2/B#1", positions: ["Open"], keys: [] },
      { note: "C#2/Db2", positions: ["1-2"], keys: ['v1', 'v2'] },
      { note: "D2", positions: ["1"], keys: ['v1'] },
      { note: "D#2/Eb2", positions: ["2"], keys: ['v2'] },
      { note: "E2/Fb2", positions: ["Open"], keys: [] },
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
      { note: "C4/B#3", positions: ["Open"], keys: [] }
    ],
    range: { low: "D1", high: "C4" },
    setupGuide: [
      {
        title: "Assembly",
        content: `Carefully place the tuba on its stand or on a soft surface. Insert the mouthpiece into the leadpipe with a gentle twist. Do not force or hit it, as this can get it stuck.
*Warning: Tubas are large and heavy. Always handle with care and get help if needed to avoid injury or damage to the instrument.*`
      },
      {
        title: "Making Your First Sound",
        content: `Like other brass instruments, sound starts with a lip buzz. Practice buzzing your lips together to make a low-pitched raspberry sound.
Then, buzz into the large mouthpiece alone. Aim for a deep, resonant buzz.
Finally, put the mouthpiece in the tuba and blow a large, relaxed column of air while buzzing. The tuba requires a lot of air!`
      },
      {
        title: "Tuning",
        content: `The main tuning slide is a large slide near where the leadpipe enters the main body of the instrument.
Play a Bb and check the pitch with an electronic tuner. Pull the slide out to make the pitch lower (flatter) and push it in to make it higher (sharper).`
      },
      {
        title: "Teardown and Maintenance",
        content: `After playing, remove the mouthpiece.
Empty condensation using the water keys (spit valves).
Oil the valves (piston or rotary) as needed. Unscrew them one at a time, apply a few drops of oil, and work the valve to distribute it.
Wipe down the exterior of the tuba to remove fingerprints.`
      }
    ]
  };
