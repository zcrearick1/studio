import type { Instrument } from '../instrument-types';

export const doubleBass: Instrument = {
    name: "Double Bass",
    slug: "double-bass",
    category: "String",
    clef: "bass",
    transposition: "C",
    fingerings: [
        { note: "E1/Fb1", positions: ["Open E String"] },
        { note: "F1/E#1", positions: ["E String: 1st Finger"] },
        { note: "F#1/Gb1", positions: ["E String: 2nd Finger"] },
        { note: "G1", positions: ["E String: 4th Finger"] },
        { note: "G#1/Ab1", positions: ["A String: 1st Finger (low)"] },
        { note: "A1", positions: ["Open A String"] },
        { note: "A#1/Bb1", positions: ["A String: 1st Finger"] },
        { note: "B1/Cb2", positions: ["A String: 2nd Finger"] },
        { note: "C2/B#1", positions: ["A String: 4th Finger"] },
        { note: "C#2/Db2", positions: ["D String: 1st Finger (low)"] },
        { note: "D2", positions: ["Open D String"] },
        { note: "D#2/Eb2", positions: ["D String: 1st Finger"] },
        { note: "E2/Fb2", positions: ["D String: 2nd Finger"] },
        { note: "F2/E#2", positions: ["D String: 4th Finger"] },
        { note: "F#2/Gb2", positions: ["G String: 1st Finger (low)"] },
        { note: "G2", positions: ["Open G String"] },
        { note: "G#2/Ab2", positions: ["G String: 1st Finger"] }
    ],
    range: { low: "E1", high: "G2", default: "A1" },
    setupGuide: [
      {
        title: "Setup",
        content: `1. Endpin Height: Whether standing or sitting on a tall stool, adjust the endpin so the nut of the fingerboard is roughly at your eyebrow level.
2. Rosin: Use bass-specific rosin, which is often softer and stickier than violin rosin. Tighten the bow (French or German style) and apply a good coat.
3. Stance: Stand with feet shoulder-width apart, with the bass angled slightly into your body for stability.

*Warning: The bass is large and can be awkward. Be mindful of your posture to avoid back strain.*`
      },
      {
        title: "Making Your First Sound",
        content: `The large strings require significant arm weight to activate. Let your arm hang heavily from the shoulder as you draw the bow across the string.
Focus on producing a big, open, and clear sound without a "crunchy" or scratchy attack.`
      },
      {
        title: "Tuning",
        content: `The strings are tuned in fourths: E, A, D, G, from lowest to highest.
Use the large machine tuners on the scroll to adjust the pitch. Due to the string thickness, make slow and careful adjustments.`
      },
      {
        title: "Teardown and Maintenance",
        content: `Always loosen the bow hair after playing.
Wipe down the strings to remove rosin buildup, which can be heavy.
Most basses are transported in a padded soft case or "gig bag". Be extremely careful of the bridge and endpin.`
      }
    ]
  };
