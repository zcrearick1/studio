import type { Instrument } from '../instrument-types';

export const malletPercussion: Instrument = {
    name: "Mallet Percussion (Xylophone/Marimba)",
    slug: "mallet-percussion",
    category: "Percussion",
    clef: "treble",
    fingerings: [],
    range: { low: "C4", high: "C7" },
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
