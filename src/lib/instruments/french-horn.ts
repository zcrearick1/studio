import type { Instrument } from '../instrument-types';

export const frenchHorn: Instrument = {
    name: "French Horn",
    slug: "french-horn",
    category: "Brass",
    clef: "treble",
    transposition: "F",
    fingerings: [
      { note: "F2/E#2", positions: ["F: 1"] },
      { note: "F#2/Gb2", positions: ["F: 2"] },
      { note: "G2", positions: ["F: 0"] },
      { note: "G#2/Ab2", positions: ["F: 2-3"] },
      { note: "A2", positions: ["F: 1-2"] },
      { note: "A#2/Bb2", positions: ["F: 1"] },
      { note: "B2/Cb3", positions: ["F: 2"] },
      { note: "C3/B#2", positions: ["F: 0"] },
      { note: "C#3/Db3", positions: ["F: 1-2-3"] },
      { note: "D3", positions: ["F: 1-3"] },
      { note: "D#3/Eb3", positions: ["F: 2-3"] },
      { note: "E3/Fb3", positions: ["F: 1-2"] },
      { note: "F3/E#3", positions: ["F: 1"] },
      { note: "F#3/Gb3", positions: ["F: 2", "Bb: T-2"] },
      { note: "G3", positions: ["F: 0", "Bb: T-1-2"] },
      { note: "G#3/Ab3", positions: ["F: 2-3", "Bb: T-2-3"] },
      { note: "A3", positions: ["F: 1-2", "Bb: T-1-2"] },
      { note: "A#3/Bb3", positions: ["F: 1", "Bb: T-1"] },
      { note: "B3/Cb4", positions: ["F: 2", "Bb: T-2"] },
      { note: "C4/B#3", positions: ["F: 0", "Bb: T-0"] },
      { note: "C#4/Db4", positions: ["F: 2-3", "Bb: T-2-3"] },
      { note: "D4", positions: ["F: 1", "Bb: T-1"] },
      { note: "D#4/Eb4", positions: ["F: 2", "Bb: T-2"] },
      { note: "E4/Fb4", positions: ["F: 0", "Bb: T-0"] },
      { note: "F4/E#4", positions: ["F: 1", "Bb: T-1"] },
      { note: "F#4/Gb4", positions: ["F: 2", "Bb: T-2"] },
      { note: "G4", positions: ["F: 0", "Bb: T-0"] },
      { note: "G#4/Ab4", positions: ["Bb: T-2-3"] },
      { note: "A4", positions: ["Bb: T-1-2"] },
      { note: "A#4/Bb4", positions: ["Bb: T-1"] },
      { note: "B4/Cb5", positions: ["Bb: T-2"] },
      { note: "C5/B#4", positions: ["Bb: T-0"] },
      { note: "C#5/Db5", positions: ["Bb: T-2-3"] },
      { note: "D5", positions: ["Bb: T-1"] },
      { note: "D#5/Eb5", positions: ["Bb: T-2"] },
      { note: "E5/Fb5", positions: ["Bb: T-0"] },
      { note: "F5/E#5", positions: ["Bb: T-1"] },
      { note: "F#5/Gb5", positions: ["Bb: T-2"] },
      { note: "G5", positions: ["Bb: T-0"] },
      { note: "G#5/Ab5", positions: ["Bb: T-2-3"] },
      { note: "A5", positions: ["Bb: T-1-2"] },
      { note: "A#5/Bb5", positions: ["Bb: T-1"] },
      { note: "B5/Cb6", positions: ["Bb: T-2"] },
      { note: "C6/B#5", positions: ["Bb: T-0"] }
    ],
    range: { low: "F2", high: "C6" },
    setupGuide: [
      {
        title: "Assembly & Hand Position",
        content: `Insert the mouthpiece with a gentle twist.
Proper hand position is crucial. Sit up straight and rest the bell of the horn on your right thigh. Place your right hand inside the bell, with your fingers together and slightly cupped, as if you were going to shake hands. Your hand should be against the far side of the bell.
*Warning: Your right hand acts as part of the instrument. Its position affects tuning and tone quality significantly.*`
      },
      {
        title: "Making Your First Sound",
        content: `The French horn mouthpiece is smaller and more funnel-shaped than a trumpet's. Practice buzzing into it.
With the horn in position, bring the mouthpiece to your lips (don't lean forward to the horn). Blow a warm, fast stream of air while buzzing. Adjust your lip tension to find the right pitch.`
      },
      {
        title: "Tuning",
        content: `Like other brass, there is a main tuning slide. However, fine-tuning is often done with the right hand inside the bell.
Cupping your hand more into the bell will make the pitch sharper. Opening your hand will make it flatter.`
      },
      {
        title: "Teardown and Maintenance",
        content: `Remove the mouthpiece.
Empty water from the horn by turning it and depressing the valves; there may not be a traditional water key.
Oil the rotary valves regularly with rotor oil. Wipe down the horn to remove fingerprints.
Store the horn carefully in its case.`
      }
    ]
  };
