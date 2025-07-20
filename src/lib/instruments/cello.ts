import type { Instrument } from '../instrument-types';

export const cello: Instrument = {
    name: "Cello",
    slug: "cello",
    category: "String",
    clef: "bass",
    transposition: "C",
    fingerings: [
        { note: "C2/B#1", positions: ["Open C String"] },
        { note: "C#2/Db2", positions: ["C String: 1st Finger"] },
        { note: "D2", positions: ["C String: 3rd Finger"] },
        { note: "D#2/Eb2", positions: ["C String: 4th Finger"] },
        { note: "E2/Fb2", positions: ["G String: 1st Finger"] },
        { note: "F2/E#2", positions: ["G String: 2nd Finger"] },
        { note: "F#2/Gb2", positions: ["G String: 3rd Finger"] },
        { note: "G2", positions: ["Open G String", "C String: 4th Finger"] },
        { note: "G#2/Ab2", positions: ["G String: 1st Finger"] },
        { note: "A2", positions: ["G String: 3rd Finger"] },
        { note: "A#2/Bb2", positions: ["G String: 4th Finger"] },
        { note: "B2/Cb3", positions: ["D String: 1st Finger"] },
        { note: "C3/B#2", positions: ["D String: 2nd Finger"] },
        { note: "C#3/Db3", positions: ["D String: 3rd Finger"] },
        { note: "D3", positions: ["Open D String", "G String: 4th Finger"] },
        { note: "D#3/Eb3", positions: ["D String: 1st Finger"] },
        { note: "E3/Fb3", positions: ["D String: 3rd Finger"] },
        { note: "F3/E#3", positions: ["D String: 4th Finger"] },
        { note: "F#3/Gb3", positions: ["A String: 1st Finger"] },
        { note: "G3", positions: ["A String: 2nd Finger"] },
        { note: "G#3/Ab3", positions: ["A String: 3rd Finger"] },
        { note: "A3", positions: ["Open A String", "D String: 4th Finger"] },
        { note: "A#3/Bb3", positions: ["A String: 1st Finger"] },
        { note: "B3/Cb4", positions: ["A String: 3rd Finger"] },
        { note: "C4/B#3", positions: ["A String: 4th Finger"] }
    ],
    range: { low: "C2", high: "C4" },
    setupGuide: [
      {
        title: "Setup",
        content: `1. Endpin: While seated, adjust the endpin so the cello rests at a comfortable height. The top of the cello body should be near your sternum, and the C-peg (lowest peg) should be near your left ear.
2. Rosin the Bow: Rosin the bow just as you would a violin bow.
3. Rock Stop: Place a rock stop or rubber endpin stopper on the floor to prevent the endpin from slipping.

*Warning: Ensure the endpin is securely tightened to prevent it from collapsing while playing.*`
      },
      {
        title: "Making Your First Sound",
        content: `Hold the bow with a relaxed, rounded hand. Rest the bow hair on the C or G string (the two lowest strings).
Let the weight of your arm draw the sound out of the string as you pull the bow. Keep the bow straight, perpendicular to the string.`
      },
      {
        title: "Tuning",
        content: `The open strings are C, G, D, A, from lowest to highest.
Like the violin, use the large pegs for big changes and fine tuners for small ones. Use a tuner and tune each string one by one.`
      },
      {
        title: "Teardown and Maintenance",
        content: `Wipe down the strings and body to remove rosin dust.
Loosen the hair on your bow.
Secure the cello and bow in their case. If it's a soft case, be extra careful not to bump the bridge.`
      }
    ]
  };
