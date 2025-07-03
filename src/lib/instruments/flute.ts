import type { Instrument } from '../instrument-types';

export const flute: Instrument = {
    name: "Flute",
    slug: "flute",
    category: "Woodwind",
    clef: "treble",
    fingerings: [
      { note: "C4/B#3", positions: ["T 123 | 123 C"] },
      { note: "C#4/Db4", positions: ["T 123 | 123 C#"] },
      { note: "D4", positions: ["T 123 | 12- Eb"] },
      { note: "D#4/Eb4", positions: ["T 123 | 1-3 Eb"] },
      { note: "E4/Fb4", positions: ["T 12- | 12- Eb"] },
      { note: "F4/E#4", positions: ["T 12- | 1-3"] },
      { note: "F#4/Gb4", positions: ["T 12- | --3"] },
      { note: "G4", positions: ["T 1-- | 123"] },
      { note: "G#4/Ab4", positions: ["T 1-- | 12- Ab"] },
      { note: "A4", positions: ["T 1-- | 1--"] },
      { note: "A#4/Bb4", positions: ["T Bb | 1--"] },
      { note: "B4/Cb5", positions: ["T -2- | 1--"] },
      { note: "C5/B#4", positions: ["- 1-- | ---"] },
      { note: "C#5/Db5", positions: ["T --- | ---"] },
      { note: "D5", positions: ["T -23 | 123"] },
      { note: "D#5/Eb5", positions: ["T -23 | 1-3 Eb"] },
      { note: "E5/Fb5", positions: ["T 12- | 12-"] },
      { note: "F5/E#5", positions: ["T 12- | 1-3"] },
      { note: "F#5/Gb5", positions: ["T 12- | --3"] },
      { note: "G5", positions: ["T 1-- | ---"] },
      { note: "G#5/Ab5", positions: ["T 1-- | Ab"] },
      { note: "A5", positions: ["T -2- | ---"] },
      { note: "A#5/Bb5", positions: ["T Bb | -2-"] },
      { note: "B5/Cb6", positions: ["T -2- | ---"] },
      { note: "C6/B#5", positions: ["- 1-- | C"] },
      { note: "C#6/Db6", positions: ["- -2- | ---"] },
      { note: "D6", positions: ["- -23 | 123"] },
      { note: "D#6/Eb6", positions: ["- 123 | 123 Eb"] },
      { note: "E6/Fb6", positions: ["T 12- | 12- C# trill"] },
      { note: "F6/E#6", positions: ["T 1-3 | 1-3"] },
      { note: "F#6/Gb6", positions: ["- 1-3 | --3"] },
      { note: "G6", positions: ["- -23 | ---"] },
      { note: "G#6/Ab6", positions: ["- -23 | Ab"] },
      { note: "A6", positions: ["- 12- | -23 C trill"] },
      { note: "A#6/Bb6", positions: ["T Bb | -23 Eb"] },
      { note: "B6/Cb7", positions: ["T 12- | 1-3 B trill"] },
      { note: "C7/B#6", positions: ["- 1-- | 1-- D trill"] }
    ],
    range: { low: "C4", high: "C7" },
    setupGuide: [
      {
        title: "Assembly",
        content: `Hold the body in one hand and the footjoint in the other. Gently twist the footjoint onto the body. Do not grab the keys while doing this.
Next, gently twist the headjoint into the other end of the body. The embouchure hole (the hole you blow across) on the headjoint should line up with the first key on the body.

*Warning: Never force the joints together. If it's difficult, a tiny amount of cork grease can be applied, but this should be rare.*`
      },
      {
        title: "Making Your First Sound",
        content: `Start with just the headjoint. Form a firm, flat chin (like saying the word "poo"). Place the lip plate against your chin so that your lower lip covers about 1/4 of the embouchure hole.
Blow a steady, gentle stream of air across the hole, aiming for the opposite edge. Experiment with the angle of your airstream until you get a clear, focused sound.`
      },
      {
        title: "Tuning",
        content: `Use an electronic tuner to check the pitch of the note A (first two fingers of left hand, first finger of right hand).
If the tuner shows the note is sharp (#), gently pull the headjoint out a little to make the flute longer and the pitch lower.
If the note is flat (b), push the headjoint in to make the flute shorter and the pitch higher.`
      },
      {
        title: "Teardown and Maintenance",
        content: `After playing, use a cleaning rod with a soft cloth (like silk or microfiber) threaded through it.
Swab the inside of all three sections to remove moisture.
Use a separate, soft cloth to wipe down the outside of the flute to remove fingerprints, which can tarnish the finish over time.
Carefully place each part back in its designated spot in the case.`
      }
    ],
  };
