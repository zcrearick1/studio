import type { Instrument } from '../instrument-types';

export const clarinet: Instrument = {
    name: "Clarinet",
    slug: "clarinet",
    category: "Woodwind",
    clef: "treble",
    transposition: "Bb",
    fingerings: [
        { note: "E3/Fb3", positions: ["T 123 | 456 + Low E Key"], keys: ['thumb', 'L1', 'L2', 'L3', 'R1', 'R2', 'R3', 'LP-E'] },
        { note: "F3/E#3", positions: ["T 123 | 456"], keys: ['thumb', 'L1', 'L2', 'L3', 'R1', 'R2', 'R3', 'RP-F'] },
        { note: "F#3/Gb3", positions: ["T 123 | 45-"], keys: ['thumb', 'L1', 'L2', 'L3', 'R1', 'R2', 'LP-F-sharp'] },
        { note: "G3", positions: ["T 123 | 4--"], keys: ['thumb', 'L1', 'L2', 'L3', 'R1'] },
        { note: "G#3/Ab3", positions: ["T 123 | Ab"], keys: ['thumb', 'L1', 'L2', 'L3', 'G-sharp'] },
        { note: "A3", positions: ["T 12- | ---"], keys: ['thumb', 'L1', 'L2'] },
        { note: "A#3/Bb3", positions: ["T 1-- | ---"], keys: ['thumb', 'L1', 'A'] },
        { note: "B3/Cb4", positions: ["T--- | ---"], keys: ['thumb'] },
        { note: "C4/B#3", positions: ["--- | ---"], keys: ['thumb', 'L1', 'L2', 'L3'] },
        { note: "C#4/Db4", positions: ["T 123 | 45-"], keys: ['R1', 'R2', 'R3', 'LP-F-sharp'] },
        { note: "D4", positions: ["R T 123 | 4--"], keys: ['register', 'thumb', 'L1', 'L2', 'L3', 'R1'] },
        { note: "D#4/Eb4", positions: ["R T 123 | -5-"], keys: ['register', 'thumb', 'L1', 'L2', 'L3', 'R2'] },
        { note: "E4/Fb4", positions: ["R T 123 | ---"], keys: ['register', 'thumb', 'L1', 'L2', 'L3'] },
        { note: "F4/E#4", positions: ["R T 12- | 4--"], keys: ['register', 'thumb', 'L1', 'L2', 'R1'] },
        { note: "F#4/Gb4", positions: ["R T 1-- | 4--"], keys: ['register', 'thumb', 'L1', 'R1'] },
        { note: "G4", positions: ["R T--- | ---"], keys: ['register', 'thumb'] },
        { note: "G#4/Ab4", positions: ["R 1-- | Ab"], keys: ['register', 'L1', 'G-sharp'] },
        { note: "A4", positions: ["R 1-- | ---"], keys: ['register', 'L1'] },
        { note: "A#4/Bb4", positions: ["R T 1-- | Bb"], keys: ['register', 'thumb', 'L1', 'A'] },
        { note: "B4/Cb5", positions: ["R T 123 | 456"], keys: ['register', 'thumb', 'L1', 'L2', 'L3', 'R1', 'R2', 'R3'] },
        { note: "C5/B#4", positions: ["R T 123 | 45-"], keys: ['register', 'thumb', 'L1', 'L2', 'L3', 'R1', 'R2'] },
        { note: "C#5/Db5", positions: ["R T 123 | 4--"], keys: ['register', 'thumb', 'L1', 'L2', 'L3', 'R1'] },
        { note: "D5", positions: ["R T 123 | ---"], keys: ['register', 'thumb', 'L1', 'L2', 'L3'] },
        { note: "D#5/Eb5", positions: ["R T 12- | ---"], keys: ['register', 'thumb', 'L1', 'L2'] },
        { note: "E5/Fb5", positions: ["R T 1-- | 4--"], keys: ['register', 'thumb', 'L1', 'R1'] },
        { note: "F5/E#5", positions: ["R T 1-- | -5-"], keys: ['register', 'thumb', 'L1', 'R2'] },
        { note: "F#5/Gb5", positions: ["R T 1-- | --6"], keys: ['register', 'thumb', 'L1', 'R3'] },
        { note: "G5", positions: ["R T 1-- | ---"], keys: ['register', 'L1', 'L2', 'L3', 'R1', 'R2', 'R3'] }, // Simplified to common alternate
        { note: "G#5/Ab5", positions: ["R T-23 | Ab"], keys: ['register', 'L2', 'L3', 'G-sharp'] },
        { note: "A5", positions: ["R T-2- | ---"], keys: ['register', 'L2'] },
        { note: "A#5/Bb5", positions: ["R T-2- | Bb"], keys: ['register', 'L2', 'A'] },
        { note: "B5/Cb6", positions: ["R T 1-- | 4-5-"], keys: ['register', 'L1', 'R1', 'R2'] },
        { note: "C6/B#5", positions: ["R T 1-- | Side C"], keys: ['register', 'L1', 'R1', 'R3'] }, // Simplified
        { note: "C#6/Db6", positions: ["R--- | ---"], keys: ['register', 'L1', 'L2', 'L3', 'R2', 'R3'] }, // Simplified
        { note: "D6", positions: ["R 123 | 45- C#"], keys: ['register', 'L1', 'R1', 'R2', 'R3', 'LP-F-sharp'] }, // Simplified
        { note: "D#6/Eb6", positions: ["R 123 | 4-- C#"], keys: ['register', 'L1', 'R1', 'R2', 'LP-F-sharp'] }, // Simplified
        { note: "E6/Fb6", positions: ["R 12-| 456 C#"], keys: ['register', 'L1', 'R1', 'R2', 'LP-E'] }, // Simplified
        { note: "F6/E#6", positions: ["R 1--| 456 C#"], keys: ['register', 'L1', 'R1', 'RP-F'] }, // Simplified
        { note: "F#6/Gb6", positions: ["R 1--| 45- C#"], keys: ['register', 'L1', 'R2', 'RP-F'] }, // Simplified
        { note: "G6", positions: ["R 1--| 4-- C#"], keys: ['register', 'L1', 'R3', 'RP-F'] } // Simplified
    ],
    range: { low: "E3", high: "G6", default: "C4" },
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
