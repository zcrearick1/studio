import type { Instrument } from '../instrument-types';

export const baritoneSaxophone: Instrument = {
    name: "Baritone Saxophone",
    slug: "baritone-saxophone",
    category: "Woodwind",
    clef: "treble",
    fingerings: [
        { note: "A3/G##3", positions: ["L:1 | R:4, Low A"] },
        { note: "A#3/Bb3", positions: ["L:1, B | R:4"] },
        { note: "B3/Cb4", positions: ["L:1 | R:4"] },
        { note: "C4/B#3", positions: ["L:1 | R:5"] },
        { note: "C#4/Db4", positions: ["L:1 | R:6"] },
        { note: "D4", positions: ["L:123 | R:456"] },
        { note: "D#4/Eb4", positions: ["L:123 | R:456, Eb"] },
        { note: "E4/Fb4", positions: ["L:123 | R:45-"] },
        { note: "F4/E#4", positions: ["L:123 | R:4--"] },
        { note: "F#4/Gb4", positions: ["L:123 | R:-5-"] },
        { note: "G4", positions: ["L:123 | R:---"] },
        { note: "G#4/Ab4", positions: ["L:123, G# | R:---"] },
        { note: "A4", positions: ["L:12- | R:---"] },
        { note: "A#4/Bb4", positions: ["L:1, B | R:---"] },
        { note: "B4/Cb5", positions: ["L:1 | R:---"] },
        { note: "C5/B#4", positions: ["L:-2- | R:---"] },
        { note: "C#5/Db5", positions: ["L:--- | R:---"] },
        { note: "D5", positions: ["O, L:123 | R:456"] },
        { note: "D#5/Eb5", positions: ["O, L:123 | R:456, Eb"] },
        { note: "E5/Fb5", positions: ["O, L:123 | R:45-"] },
        { note: "F5/E#5", positions: ["O, L:123 | R:4--"] },
        { note: "F#5/Gb5", positions: ["O, L:123 | R:-5-"] },
        { note: "G5", positions: ["O, L:123 | R:---"] },
        { note: "G#5/Ab5", positions: ["O, L:123, G# | R:---"] },
        { note: "A5", positions: ["O, L:12- | R:---"] }
    ],
    range: { low: "A3", high: "A5" },
    setupGuide: [
      {
        title: "Assembly",
        content: `1. Neck Strap/Harness: Put your strap or harness on first. For a bari sax, a harness is recommended.
2. Body and Neck: Carefully insert the neck (it may have a curve or pigtail) into the body and tighten the neck screw.
3. Mouthpiece: Prepare the larger reed and mouthpiece. Push the mouthpiece onto the neck cork.
4. Strap Up: Attach your harness/strap to the ring on the back of the saxophone.

*Warning: The octave key mechanism on the neck is delicate. Be very careful not to bend it.*`
      },
      {
        title: "Making Your First Sound",
        content: `The embouchure is similar to other saxes but may be slightly looser. Top teeth on the mouthpiece, bottom lip over bottom teeth.
A bari sax requires a large, full column of air to produce a good tone. Start with just the mouthpiece and neck.`
      },
      {
        title: "Tuning",
        content: `Warm up the instrument first. Use a tuner and play a written F# (concert A).
If you are sharp (#), pull the mouthpiece out slightly. If you are flat (b), push it in. The bari sax also has a spit valve on the pigtail of the neck that needs to be emptied.`
      },
      {
        title: "Teardown and Maintenance",
        content: `Remove the reed and store it safely.
Use a swab to clean the inside of the main body and the neck.
Wipe down the exterior. Place the end cap on the top of the body before putting it in the case.`
      }
    ]
  };
