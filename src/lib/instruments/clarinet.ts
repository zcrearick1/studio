import type { Instrument } from '../instrument-types';

export const clarinet: Instrument = {
    name: "Clarinet",
    slug: "clarinet",
    category: "Woodwind",
    clef: "treble",
    fingerings: [
        { note: "E3/Fb3", positions: ["T 123 | 456 + Low E Key"], imageUrl: "/fingerings/clarinet/e3.jpg" },
        { note: "F3/E#3", positions: ["T 123 | 456"], imageUrl: "/fingerings/clarinet/f3.jpg" },
        { note: "F#3/Gb3", positions: ["T 123 | 45-"], imageUrl: "/fingerings/clarinet/f-sharp3.jpg" },
        { note: "G3", positions: ["T 123 | 4--"], imageUrl: "/fingerings/clarinet/g3.jpg" },
        { note: "G#3/Ab3", positions: ["T 123 | Ab"], imageUrl: "/fingerings/clarinet/g-sharp3.jpg" },
        { note: "A3", positions: ["T 12- | ---"], imageUrl: "/fingerings/clarinet/a3.jpg" },
        { note: "A#3/Bb3", positions: ["T 1-- | ---"], imageUrl: "/fingerings/clarinet/a-sharp3.jpg" },
        { note: "B3/Cb4", positions: ["T--- | ---"], imageUrl: "/fingerings/clarinet/b3.jpg" },
        { note: "C4/B#3", positions: ["--- | ---"], imageUrl: "/fingerings/clarinet/c4.jpg" },
        { note: "C#4/Db4", positions: ["T 123 | 45-"], imageUrl: "/fingerings/clarinet/c-sharp4.jpg" },
        { note: "D4", positions: ["R T 123 | 4--"], imageUrl: "/fingerings/clarinet/d4.jpg" },
        { note: "D#4/Eb4", positions: ["R T 123 | -5-"], imageUrl: "/fingerings/clarinet/d-sharp4.jpg" },
        { note: "E4/Fb4", positions: ["R T 123 | ---"], imageUrl: "/fingerings/clarinet/e4.jpg" },
        { note: "F4/E#4", positions: ["R T 12- | 4--"], imageUrl: "/fingerings/clarinet/f4.jpg" },
        { note: "F#4/Gb4", positions: ["R T 1-- | 4--"], imageUrl: "/fingerings/clarinet/f-sharp4.jpg" },
        { note: "G4", positions: ["T--- | ---"], imageUrl: "/fingerings/clarinet/g4.jpg" },
        { note: "G#4/Ab4", positions: ["1-- | Ab"], imageUrl: "/fingerings/clarinet/g-sharp4.jpg" },
        { note: "A4", positions: ["1-- | ---"], imageUrl: "/fingerings/clarinet/a4.jpg" },
        { note: "A#4/Bb4", positions: ["1-- | Bb"], imageUrl: "/fingerings/clarinet/a-sharp4.jpg" },
        { note: "B4/Cb5", positions: ["R T 123 | 456"], imageUrl: "/fingerings/clarinet/b4.jpg" },
        { note: "C5/B#4", positions: ["R T 123 | 45-"], imageUrl: "/fingerings/clarinet/c5.jpg" },
        { note: "C#5/Db5", positions: ["R T 123 | 4--"], imageUrl: "/fingerings/clarinet/c-sharp5.jpg" },
        { note: "D5", positions: ["R T 123 | ---"], imageUrl: "/fingerings/clarinet/d5.jpg" },
        { note: "D#5/Eb5", positions: ["R T 12- | ---"], imageUrl: "/fingerings/clarinet/d-sharp5.jpg" },
        { note: "E5/Fb5", positions: ["R T 1-- | 4--"], imageUrl: "/fingerings/clarinet/e5.jpg" },
        { note: "F5/E#5", positions: ["R T 1-- | -5-"], imageUrl: "/fingerings/clarinet/f5.jpg" },
        { note: "F#5/Gb5", positions: ["R T 1-- | --6"], imageUrl: "/fingerings/clarinet/f-sharp5.jpg" },
        { note: "G5", positions: ["R T 1-- | ---"], imageUrl: "/fingerings/clarinet/g5.jpg" },
        { note: "G#5/Ab5", positions: ["R T-23 | Ab"], imageUrl: "/fingerings/clarinet/g-sharp5.jpg" },
        { note: "A5", positions: ["R T-2- | ---"], imageUrl: "/fingerings/clarinet/a5.jpg" },
        { note: "A#5/Bb5", positions: ["R T-2- | Bb"], imageUrl: "/fingerings/clarinet/a-sharp5.jpg" },
        { note: "B5/Cb6", positions: ["R T 1-- | 4-5-"], imageUrl: "/fingerings/clarinet/b5.jpg" },
        { note: "C6/B#5", positions: ["R T 1-- | Side C"], imageUrl: "/fingerings/clarinet/c6.jpg" },
        { note: "C#6/Db6", positions: ["R--- | ---"], imageUrl: "/fingerings/clarinet/c-sharp6.jpg" },
        { note: "D6", positions: ["R 123 | 45- C#"], imageUrl: "/fingerings/clarinet/d6.jpg" },
        { note: "D#6/Eb6", positions: ["R 123 | 4-- C#"], imageUrl: "/fingerings/clarinet/d-sharp6.jpg" },
        { note: "E6/Fb6", positions: ["R 12-| 456 C#"], imageUrl: "/fingerings/clarinet/e6.jpg" },
        { note: "F6/E#6", positions: ["R 1--| 456 C#"], imageUrl: "/fingerings/clarinet/f6.jpg" },
        { note: "F#6/Gb6", positions: ["R 1--| 45- C#"], imageUrl: "/fingerings/clarinet/f-sharp6.jpg" },
        { note: "G6", positions: ["R 1--| 4-- C#"], imageUrl: "/fingerings/clarinet/g6.jpg" }
    ],
    range: { low: "E3", high: "G6" },
    setupGuide: [
      {
        title: "Assembly",
        content: `1. Reed Prep: Moisten the reed in your mouth for a minute.
2. Grease: If joints are tight, apply a small amount of cork grease to the tenon corks.
3. Assemble: Assemble from the bell up to the barrel (Bell -> Lower Joint -> Upper Joint -> Barrel -> Mouthpiece).
4. Ligature and Reed: Place the reed on the mouthpiece so you can just see a tiny sliver of the mouthpiece tip over the reed. Slide the ligature on and tighten the screws just enough to hold the reed firmly.

*Warning: Reeds are fragile. Handle them by the thicker end to avoid chipping the tip.*`
      },
      {
        title: "Making Your First Sound",
        content: `With the clarinet fully assembled, rest the top of the mouthpiece on your top teeth. Cover your bottom teeth with your bottom lip.
Form a seal around the mouthpiece with your lips (like a drawstring bag). Take a breath and blow a steady stream of air. You should feel the reed vibrate.`
      },
      {
        title: "Tuning",
        content: `The clarinet's tuning is most affected by temperature, so warm it up first by blowing warm air through it.
Use a tuner and play an open G. You can adjust the pitch by pulling out or pushing in at the barrel or the middle joint, but small adjustments at the barrel are most common.`
      },
      {
        title: "Teardown and Maintenance",
        content: `Remove the ligature and reed and store the reed in a reed guard.
Use a swab to clean moisture from the inside of the instrument. Drop the weighted end through the bell and pull it all the way through a few times.
Wipe down the keys to remove fingerprints.
Disassemble the pieces and place them in the case.`
      }
    ]
  };
