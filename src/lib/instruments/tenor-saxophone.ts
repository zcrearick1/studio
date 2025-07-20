import type { Instrument } from '../instrument-types';

export const tenorSaxophone: Instrument = {
    name: "Tenor Saxophone",
    slug: "tenor-saxophone",
    category: "Woodwind",
    clef: "treble",
    transposition: "Bb",
    fingerings: [
        { note: "G#3/Ab3", positions: ["L:123 G# | R:456 Eb"], keys: ['L1', 'L2', 'L3', 'R1', 'R2', 'R3', 'rp-e-flat', 'lp-g-sharp'] },
        { note: "A3", positions: ["L:1, B | R:456"], keys: ['L1', 'bis', 'R1', 'R2', 'R3'] },
        { note: "A#3/Bb3", positions: ["L:1, B | R:4"], keys: ['L1', 'bis', 'R1'] },
        { note: "B3/Cb4", positions: ["L:1 | R:4"], keys: ['L1', 'R1'] },
        { note: "C4/B#3", positions: ["L:1 | R:5"], keys: ['L2'] },
        { note: "C#4/Db4", positions: ["L:1 | R:6"], keys: [] },
        { note: "D4", positions: ["L:123 | R:456"], keys: ['L1', 'L2', 'L3', 'R1', 'R2', 'R3'] },
        { note: "D#4/Eb4", positions: ["L:123 | R:456, Eb"], keys: ['L1', 'L2', 'L3', 'R1', 'R2', 'R3', 'rp-e-flat'] },
        { note: "E4/Fb4", positions: ["L:123 | R:45-"], keys: ['L1', 'L2', 'L3', 'R1', 'R2'] },
        { note: "F4/E#4", positions: ["L:123 | R:4--"], keys: ['L1', 'L2', 'L3', 'R1'] },
        { note: "F#4/Gb4", positions: ["L:123 | R:-5-"], keys: ['L1', 'L2', 'L3', 'R2'] },
        { note: "G4", positions: ["L:123 | R:---"], keys: ['L1', 'L2', 'L3'] },
        { note: "G#4/Ab4", positions: ["L:123, G# | R:---"], keys: ['L1', 'L2', 'L3', 'lp-g-sharp'] },
        { note: "A4", positions: ["L:12- | R:---"], keys: ['L1', 'L2'] },
        { note: "A#4/Bb4", positions: ["L:1, B | R:---"], keys: ['L1', 'bis'] },
        { note: "B4/Cb5", positions: ["L:1 | R:---"], keys: ['L1'] },
        { note: "C5/B#4", positions: ["L:-2- | R:---"], keys: ['L2'] },
        { note: "C#5/Db5", positions: ["L:--- | R:---"], keys: ['octave'] },
        { note: "D5", positions: ["O, L:123 | R:456"], keys: ['octave', 'L1', 'L2', 'L3', 'R1', 'R2', 'R3'] },
        { note: "D#5/Eb5", positions: ["O, L:123 | R:456, Eb"], keys: ['octave', 'L1', 'L2', 'L3', 'R1', 'R2', 'R3', 'rp-e-flat'] },
        { note: "E5/Fb5", positions: ["O, L:123 | R:45-"], keys: ['octave', 'L1', 'L2', 'L3', 'R1', 'R2'] },
        { note: "F5/E#5", positions: ["O, L:123 | R:4--"], keys: ['octave', 'L1', 'L2', 'L3', 'R1'] },
        { note: "F#5/Gb5", positions: ["O, L:123 | R:-5-"], keys: ['octave', 'L1', 'L2', 'L3', 'R2'] },
        { note: "G5", positions: ["O, L:123 | R:---"], keys: ['octave', 'L1', 'L2', 'L3'] },
        { note: "G#5/Ab5", positions: ["O, L:123, G# | R:---"], keys: ['octave', 'L1', 'L2', 'L3', 'lp-g-sharp'] },
        { note: "A5", positions: ["O, L:12- | R:---"], keys: ['octave', 'L1', 'L2'] },
        { note: "A#5/Bb5", positions: ["O, L:1, B | R:---"], keys: ['octave', 'L1', 'bis'] },
        { note: "B5/Cb6", positions: ["O, L:1 | R:---"], keys: ['octave', 'L1'] },
        { note: "C6/B#5", positions: ["O, L:-2- | R:---"], keys: ['octave', 'L2'] },
        { note: "C#6/Db6", positions: ["O, L:--- | R:---"], keys: ['octave', 'L2', 'R1'] },
        { note: "D6", positions: ["O, L:1, Palm D | R:---"], keys: ['octave', 'palm-d', 'L1', 'L2', 'L3', 'R1', 'R2', 'R3'] },
        { note: "D#6/Eb6", positions: ["O, L:1, Palm D, Eb | R:---"], keys: ['octave', 'palm-d', 'palm-e-flat', 'L1', 'L2', 'L3', 'R1', 'R2', 'R3'] },
        { note: "E6/Fb6", positions: ["O, L:12, Palm D, Eb | R:---"], keys: ['octave', 'palm-d', 'palm-e-flat', 'L1', 'L2', 'L3', 'R1', 'R2'] }
    ],
    range: { low: "Ab3", high: "E6" },
    setupGuide: [
      {
        title: "Assembly",
        content: `1. Neck Strap: Put the neck strap on first.
2. Body and Neck: Carefully insert the neck into the body of the saxophone and tighten the neck screw just enough to hold it.
3. Mouthpiece: Prepare the reed and mouthpiece just like a clarinet. Push the mouthpiece onto the cork on the neck. It should go on about halfway.
4. Strap Up: Attach the neck strap to the ring on the back of the saxophone.

*Warning: The octave key mechanism on the neck is delicate. Be very careful not to bend it.*`
      },
      {
        title: "Making Your First Sound",
        content: `The embouchure (mouth position) is very similar to the clarinet. Top teeth on the mouthpiece, bottom lip over bottom teeth.
Curl your lips around the mouthpiece and blow. Try to produce a long, steady tone. Start with just the mouthpiece and neck first, then try with the full instrument.`
      },
      {
        title: "Tuning",
        content: `Warm up the instrument first. Use a tuner and play a written C (concert Bb).
If you are sharp (#), pull the mouthpiece out slightly. If you are flat (b), push it in. Make only small adjustments at a time.`
      },
      {
        title: "Teardown and Maintenance",
        content: `Remove the reed and store it safely.
Use a swab to clean the inside of the main body and the neck. You may have a separate, smaller swab for the neck.
Wipe down the exterior. Place the end cap on the top of the body before putting it in the case to protect the octave key mechanism.`
      }
    ]
  };
