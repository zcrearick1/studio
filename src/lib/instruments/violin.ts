import type { Instrument } from '../instrument-types';

export const violin: Instrument = {
    name: "Violin",
    slug: "violin",
    category: "String",
    clef: "treble",
    transposition: "C",
    fingerings: [
        { note: "G3", positions: ["Open G String"] },
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
        { note: "E5/Fb5", positions: ["Open E String", "A String: 4th Finger"] },
        { note: "F5/E#5", positions: ["E String: Low 1st Finger"] },
        { note: "F#5/Gb5", positions: ["E String: 1st Finger"] },
        { note: "G5", positions: ["E String: Low 2nd Finger"] },
        { note: "G#5/Ab5", positions: ["E String: 2nd Finger"] },
        { note: "A5", positions: ["E String: 3rd Finger"] },
        { note: "A#5/Bb5", positions: ["E String: High 3rd / Low 4th"] },
        { note: "B5/Cb6", positions: ["E String: 4th Finger"] }
    ],
    range: { low: "G3", high: "B5" },
    setupGuide: [
      {
        title: "Setup",
        content: `1. Shoulder Rest: Attach the shoulder rest to the back of the violin. Adjust its position and height for comfort.
2. Rosin the Bow: Tighten the bow hair (just enough so a pencil can fit between the hair and the stick). Rub the block of rosin up and down the length of the hair 10-15 times. You'll need to do this more for a new bow.

*Warning: Over-tightening the bow can warp the stick. Always loosen the hair after playing.*`
      },
      {
        title: "Making Your First Sound",
        content: `Start by plucking the open strings (G, D, A, E) to hear the pitches.
Now, take the bow. Rest the bow hair on one of the middle strings (D or A) about halfway between the bridge and the fingerboard.
Draw the bow smoothly across the string, keeping it parallel to the bridge. Try to use your whole arm, not just your wrist.`
      },
      {
        title: "Tuning",
        content: `The strings are G, D, A, E, from lowest (thickest) to highest (thinnest).
Use an electronic tuner or a reference pitch. Use the large pegs at the top for big adjustments and the small fine tuners on the tailpiece for small adjustments.
Always tune from below the note up to pitch.`
      },
      {
        title: "Teardown and Maintenance",
        content: `ALWAYS loosen the bow hair after playing.
Use a soft, dry cloth to wipe rosin dust off the strings, fingerboard, and body of the violin.
Place the violin and bow securely in their case.`
      }
    ]
  };
