import type { Instrument } from '../instrument-types';

export const malletPercussion: Instrument = {
    name: "Mallet Percussion",
    slug: "mallet-percussion",
    category: "Percussion",
    clef: "treble",
    transposition: "C",
    fingerings: [
      { note: "C4", positions: [], keys: ["C4"] },
      { note: "C#4/Db4", positions: [], keys: ["C#4"] },
      { note: "D4", positions: [], keys: ["D4"] },
      { note: "D#4/Eb4", positions: [], keys: ["D#4"] },
      { note: "E4", positions: [], keys: ["E4"] },
      { note: "F4", positions: [], keys: ["F4"] },
      { note: "F#4/Gb4", positions: [], keys: ["F#4"] },
      { note: "G4", positions: [], keys: ["G4"] },
      { note: "G#4/Ab4", positions: [], keys: ["G#4"] },
      { note: "A4", positions: [], keys: ["A4"] },
      { note: "A#4/Bb4", positions: [], keys: ["A#4"] },
      { note: "B4", positions: [], keys: ["B4"] },
      { note: "C5", positions: [], keys: ["C5"] },
      { note: "C#5/Db5", positions: [], keys: ["C#5"] },
      { note: "D5", positions: [], keys: ["D5"] },
      { note: "D#5/Eb5", positions: [], keys: ["D#5"] },
      { note: "E5", positions: [], keys: ["E5"] },
      { note: "F5", positions: [], keys: ["F5"] },
      { note: "F#5/Gb5", positions: [], keys: ["F#5"] },
      { note: "G5", positions: [], keys: ["G5"] },
      { note: "G#5/Ab5", positions: [], keys: ["G#5"] },
      { note: "A5", positions: [], keys: ["A5"] },
      { note: "A#5/Bb5", positions: [], keys: ["A#5"] },
      { note: "B5", positions: [], keys: ["B5"] },
    ],
    range: { low: "C4", high: "B5" }, // Typical beginner range, actual range varies
    setupGuide: [
      {
        title: "Assembly",
        content: `1. Frame: Assemble the frame according to the manufacturer's instructions. On many portable models, the frame simply unfolds.
2. Bars: Carefully place the two sets of bars (naturals and accidentals) onto the frame. They rest on support posts, which have small pegs that fit into holes on the underside of each bar.
3. Resonators: Attach the resonator tubes underneath the bars. They are usually grouped by register and simply hook onto the frame.

*Warning: The wooden bars of a marimba or xylophone can be cracked if dropped or mishandled. Always lift and carry them with care.*`
      },
      {
        title: "Basic Grip & Stroke",
        content: `Hold the mallets with a relaxed grip, similar to a matched snare drum grip. The fulcrum is between the thumb and index finger.
Your stroke should come from the wrist. Strike the center of the bar for the most fundamental tone. For accidental (upper) bars, strike the edge of the bar.`
      },
      {
        title: "Choosing Mallets",
        content: `The hardness of the mallet head drastically changes the tone.
**Hard plastic/rubber:** Bright, articulate sound (best for xylophone).
**Medium yarn/cord:** All-purpose sound, good for general marimba playing.
**Soft yarn/cord:** Warm, dark, and mellow sound, good for rolling chords on a marimba.`
      },
      {
        title: "Teardown and Maintenance",
        content: `Remove the bars and carefully stack them or place them in a padded bag.
Remove the resonators.
Collapse the frame.
Covering the instrument with a dust cover when not in use can prolong the life of the bars and frame.`
      }
    ]
  };
