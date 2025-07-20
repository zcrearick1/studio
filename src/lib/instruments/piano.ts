import type { Instrument } from '../instrument-types';

export const piano: Instrument = {
    name: "Piano",
    slug: "piano",
    category: "Percussion",
    clef: "treble", // Can be both, but treble is fine for this context
    transposition: "C",
    fingerings: [
      { note: "C4", positions: ["Middle C"], keys: ["C4"] },
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
    range: { low: "C4", high: "B5", default: "C4" },
    setupGuide: [
      {
        title: "Getting Started",
        content: `1. Bench Height: Adjust the piano bench so your forearms are parallel to the floor when your hands are on the keys.
2. Posture: Sit up straight on the front half of the bench, with your feet flat on the floor.
3. Hand Position: Curve your fingers naturally as if holding a ball. Your fingers should rest lightly on the keys.

*Warning: Avoid playing with flat fingers. A curved, relaxed hand position prevents strain and allows for more control.*`
      },
      {
        title: "Finding Middle C",
        content: `Middle C is the C key located closest to the center of the piano, often near the instrument's brand name. It serves as a central landmark for navigating the keyboard.`
      },
      {
        title: "The Pedals",
        content: `**Right Pedal (Sustain):** The most commonly used pedal. It lifts the dampers off the strings, allowing notes to ring out after you lift your fingers.
**Left Pedal (Una Corda/Soft):** Makes the sound quieter and changes the tone.
**Middle Pedal (Sostenuto):** Sustains only the notes that are held down when the pedal is pressed (not present on all pianos).`
      },
      {
        title: "Maintenance",
        content: `Keep the piano clean by wiping the keys with a slightly damp, soft cloth.
Keep the lid closed when not in use to protect from dust.
Have the piano tuned professionally at least once or twice a year to keep it sounding its best.`
      }
    ]
  };
