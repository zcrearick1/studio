import type { Instrument } from '../instrument-types';

export const viola: Instrument = {
    name: "Viola",
    slug: "viola",
    category: "String",
    clef: "alto",
    transposition: "C",
    fingerings: [
        { note: "C3/B#2", positions: ["Open C String"] },
        { note: "C#3/Db3", positions: ["C String: Low 1st Finger"] },
        { note: "D3", positions: ["C String: 1st Finger"] },
        { note: "D#3/Eb3", positions: ["C String: Low 2nd Finger"] },
        { note: "E3/Fb3", positions: ["C String: 2nd Finger"] },
        { note: "F3/E#3", positions: ["C String: 3rd Finger"] },
        { note: "F#3/Gb3", positions: ["C String: High 3rd / Low 4th"] },
        { note: "G3", positions: ["Open G String", "C String: 4th Finger"] },
        { note: "G#3/Ab3", positions: ["G String: Low 1st Finger"] },
        { note: "A3", positions: ["G String: 1st Finger"] },
        { note: "A#3/Bb3", positions: ["G String: Low 2nd Finger"] },
        { note: "B3/Cb4", positions: ["G String: 2nd Finger"] },
        { note: "C4/B#3", positions: ["G String: 3rd Finger"] },
        { note: "C#4/Db4", positions: ["G String: High 3rd / Low 4th"] },
        { note: "D4", positions: ["Open D String", "G String: 4th Finger"] },
        { note: "D#4/Eb4", positions: ["D String: Low 1st Finger"] },
        { note: "E4/Fb4", positions: ["D String: 1st Finger"] },
        { note: "F4/E#4", positions: ["D String: Low 2nd Finger"] },
        { note: "F#4/Gb4", positions: ["D String: 2nd Finger"] },
        { note: "G4", positions: ["D String: 3rd Finger"] },
        { note: "G#4/Ab4", positions: ["D String: High 3rd / Low 4th"] },
        { note: "A4", positions: ["Open A String", "D String: 4th Finger"] },
        { note: "A#4/Bb4", positions: ["A String: Low 1st Finger"] },
        { note: "B4/Cb5", positions: ["A String: 1st Finger"] },
        { note: "C5/B#4", positions: ["A String: Low 2nd Finger"] },
        { note: "C#5/Db5", positions: ["A String: 2nd Finger"] },
        { note: "D5", positions: ["A String: 3rd Finger"] },
        { note: "D#5/Eb5", positions: ["A String: High 3rd / Low 4th"] },
        { note: "E5/Fb5", positions: ["A String: 4th Finger"] }
    ],
    range: { low: "C3", high: "E5" },
    setupGuide: [
      {
        title: "Setup",
        content: `1. Shoulder Rest: Attach a viola-sized shoulder rest to the back. Adjust it for a comfortable fit between your shoulder and chin.
2. Rosin the Bow: Tighten the bow hair so it's about a pencil's width from the stick. Rub rosin along the hair to create grip.

*Warning: As with a violin, do not overtighten the bow. Always loosen it after playing.*`
      },
      {
        title: "Making Your First Sound",
        content: `The viola is held just like a violin. It's larger, so it may require a slightly wider reach.
Rest the bow on the C or G string (the two lowest strings). Draw the bow smoothly, using the natural weight of your arm to produce a rich, deep tone.`
      },
      {
        title: "Tuning",
        content: `The open strings are C, G, D, A, from lowest to highest.
Use the large tuning pegs for big adjustments and the fine tuners for small adjustments. It's often easier to tune using the fine tuners.`
      },
      {
        title: "Teardown and Maintenance",
        content: `Loosen the bow hair completely after each session.
Use a soft cloth to wipe rosin dust off the instrument's body and strings.
Store the viola and bow securely in their case.`
      }
    ]
  };
