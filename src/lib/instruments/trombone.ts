import type { Instrument } from '../instrument-types';

export const trombone: Instrument = {
    name: "Trombone",
    slug: "trombone",
    category: "Brass",
    clef: "bass",
    transposition: "C",
    fingerings: [
      { note: "E2/Fb2", positions: ["7"] },
      { note: "F2/E#2", positions: ["6"] },
      { note: "F#2/Gb2", positions: ["5"] },
      { note: "G2", positions: ["4"] },
      { note: "G#2/Ab2", positions: ["3"] },
      { note: "A2", positions: ["2"] },
      { note: "A#2/Bb2", positions: ["1"] },
      { note: "B2/Cb3", positions: ["7"] },
      { note: "C3/B#2", positions: ["6"] },
      { note: "C#3/Db3", positions: ["5"] },
      { note: "D3", positions: ["4"] },
      { note: "D#3/Eb3", positions: ["3"] },
      { note: "E3/Fb3", positions: ["2"] },
      { note: "F3/E#3", positions: ["1"] },
      { note: "F#3/Gb3", positions: ["5"] },
      { note: "G3", positions: ["4"] },
      { note: "G#3/Ab3", positions: ["3"] },
      { note: "A3", positions: ["2"] },
      { note: "A#3/Bb3", positions: ["1"] },
      { note: "B3/Cb4", positions: ["4"] },
      { note: "C4/B#3", positions: ["3"] },
      { note: "C#4/Db4", positions: ["2"] },
      { note: "D4", positions: ["1"] },
      { note: "D#4/Eb4", positions: ["3"] },
      { note: "E4/Fb4", positions: ["2"] },
      { note: "F4/E#4", positions: ["1"] },
      { note: "F#4/Gb4", positions: ["5"] },
      { note: "G4", positions: ["4"] },
      { note: "G#4/Ab4", positions: ["3"] },
      { note: "A4", positions: ["2"] },
      { note: "A#4/Bb4", positions: ["1"] }
    ],
    range: { low: "E2", high: "Bb4" },
    setupGuide: [
      {
        title: "Assembly",
        content: `Hold the bell section with the bell pointing up. Pick up the hand slide section by its brace.
Fit the two slide tubes into the bell section's receiver. Tighten the lock nut so it's secure but not overly tight.
Insert the mouthpiece with a gentle twist.

*Warning: The hand slide is extremely fragile. Never rest the trombone's weight on the slide, and be careful not to dent it.*`
      },
      {
        title: "Making Your First Sound",
        content: `Lip buzzing is key, just like with a trumpet. Practice buzzing your lips to create a sound.
Then, buzz into the mouthpiece alone.
Finally, with the trombone assembled and the slide in 1st position (all the way in), buzz into the instrument. Aim for a full, relaxed sound.`
      },
      {
        title: "Tuning",
        content: `Like a trumpet, the trombone has a main tuning slide on the bell section.
Play a Bb in 1st position and check it with a tuner. Pull the slide out to go flatter, and push it in to go sharper.`
      },
      {
        title: "Teardown and Maintenance",
        content: `Remove and clean your mouthpiece.
Use the water key to empty condensation.
Apply fresh slide lubricant as needed. Wipe down the outer slide and the rest of the instrument.
Engage the slide lock before putting it in the case to prevent the outer slide from falling off.`
      }
    ]
  };
