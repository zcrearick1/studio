import type { Instrument } from '../instrument-types';

export const bassoon: Instrument = {
    name: "Bassoon",
    slug: "bassoon",
    category: "Woodwind",
    clef: "bass",
    fingerings: [
      { note: "Bb1", positions: ["Whisper Key, C# Key, All Fingers, Low Bb Key"], keys: ['whisper', 'lt-csharp', 'L1', 'L2', 'L3', 'R1', 'R2', 'R3', 'rt-bb'] },
      { note: "B1/Cb2", positions: ["Whisper Key, All Fingers, Low B Key"], keys: ['whisper', 'L1', 'L2', 'L3', 'R1', 'R2', 'R3', 'rt-b'] },
      { note: "C2/B#1", positions: ["Whisper Key, All Fingers, Low C Key"], keys: ['whisper', 'L1', 'L2', 'L3', 'R1', 'R2', 'R3', 'rt-c'] },
      { note: "C#2/Db2", positions: ["Whisper Key, All Fingers, Low C# Key"], keys: ['whisper', 'L1', 'L2', 'L3', 'R1', 'R2', 'R3', 'rt-csharp'] },
      { note: "D2", positions: ["Whisper Key, All Fingers, Low D Key"], keys: ['whisper', 'L1', 'L2', 'L3', 'R1', 'R2', 'R3', 'rt-d'] },
      { note: "D#2/Eb2", positions: ["Whisper Key, All Fingers except R3, Low Eb Key"], keys: ['whisper', 'L1', 'L2', 'L3', 'R1', 'R2', 'rt-eb'] },
      { note: "E2/Fb2", positions: ["Whisper Key, All Fingers except R3"], keys: ['whisper', 'L1', 'L2', 'L3', 'R1', 'R2', 'R3'] },
      { note: "F2/E#2", positions: ["Whisper Key, L123, R12"], keys: ['whisper', 'L1', 'L2', 'L3', 'R1', 'R2'] },
      { note: "F#2/Gb2", positions: ["Whisper Key, L123, R1-3"], keys: ['whisper', 'L1', 'L2', 'L3', 'R1', 'R3'] },
      { note: "G2", positions: ["Whisper Key, L123, R1"], keys: ['whisper', 'L1', 'L2', 'L3', 'R1'] },
      { note: "G#2/Ab2", positions: ["Whisper Key, L123, Ab Key"], keys: ['whisper', 'L1', 'L2', 'L3', 'lp-ab'] },
      { note: "A2", positions: ["Whisper Key, L12, R1"], keys: ['whisper', 'L1', 'L2', 'R1'] },
      { note: "A#2/Bb2", positions: ["Whisper Key, L1, Bb Key"], keys: ['whisper', 'L1', 'lt-bb'] },
      { note: "B2/Cb3", positions: ["Whisper Key, L1"], keys: ['whisper', 'L1'] },
      { note: "C3/B#2", positions: ["Whisper Key, L2"], keys: ['whisper', 'L2'] },
      { note: "C#3/Db3", positions: ["Whisper Key, L3"], keys: ['whisper', 'L3'] },
      { note: "D3", positions: ["Whisper Key, R123"], keys: ['whisper', 'R1', 'R2', 'R3'] },
      { note: "D#3/Eb3", positions: ["Whisper Key, L3, R123"], keys: ['whisper', 'L3', 'R1', 'R2', 'R3'] },
      { note: "E3/Fb3", positions: ["L12, R12"], keys: ['L1', 'L2', 'R1', 'R2'] },
      { note: "F3/E#3", positions: ["L12, R1"], keys: ['L1', 'L2', 'R1'] },
      { note: "F#3/Gb3", positions: ["L12, R-2-"], keys: ['L1', 'L2', 'R2'] },
      { note: "G3", positions: ["L12"], keys: ['L1', 'L2'] },
      { note: "G#3/Ab3", positions: ["L12, Ab Key"], keys: ['L1', 'L2', 'lp-ab'] },
      { note: "A3", positions: ["L1"], keys: ['L1'] },
      { note: "A#3/Bb3", positions: ["L1, Bb Key"], keys: ['L1', 'lt-bb'] },
      { note: "B3/Cb4", positions: ["L1, C Key"], keys: ['L1', 'lt-c'] },
      { note: "C4/B#3", positions: ["R123"], keys: ['R1', 'R2', 'R3'] },
      { note: "C#4/Db4", positions: ["L-2-, R123"], keys: ['L2', 'R1', 'R2', 'R3'] }
    ],
    range: { low: "Bb1", high: "C#4" },
    setupGuide: [
      {
        title: "Assembly",
        content: `1. Connect Joints: Connect the boot joint and tenor (wing) joint first. Then add the long joint and finally the bell.
2. Bocal: Gently insert the bocal into the top of the tenor joint.
3. Reed: Moisten the reed. Place it on the bocal and wrap the thread securely.
4. Seat Strap & Balance Hanger: Attach your seat strap or harness. Many bassoons have a balance hanger to help with weight distribution.
*Warning: The bassoon has very complex keywork. Assemble it carefully to avoid bending any keys.*`
      },
      {
        title: "Making Your First Sound",
        content: `The embouchure involves placing both lips on the reed (a double reed). Roll your lips slightly over your teeth.
The whisper key (a left thumb key) must be held down for all notes in the low register.`
      },
      {
        title: "Tuning",
        content: `The primary tuning happens by adjusting how far the bocal is pushed into the tenor joint. Pulling out flattens the pitch, pushing in sharpens it.
Fine-tuning individual notes is a very advanced skill involving embouchure and alternate fingerings.`
      },
      {
        title: "Teardown and Maintenance",
        content: `Remove and store the reed carefully. Use a swab to clean moisture from the bocal.
Use separate pull-through swabs for the tenor and boot joints. These are often different sizes.
Wipe down the exterior and carefully place all parts back in the case.`
      }
    ]
  };