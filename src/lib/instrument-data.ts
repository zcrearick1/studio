

export type Fingering = {
  note: string;
  positions: string[];
  imageUrl?: string;
};

export type SetupGuideSection = {
  title: string;
  content: string;
};

export type Instrument = {
  name:string;
  slug: string;
  category: "Woodwind" | "String" | "Brass" | "Percussion";
  clef: "treble" | "bass" | "alto" | "percussion";
  fingerings: Fingering[];
  setupGuide: SetupGuideSection[];
  range: {
    low: string;
    high: string;
  };
};

export const instruments: Instrument[] = [
  {
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
  },
  {
    name: "Clarinet",
    slug: "clarinet",
    category: "Woodwind",
    clef: "treble",
    fingerings: [
        { note: "E3/Fb3", positions: ["T 123 | 456 + Low E Key"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "F3/E#3", positions: ["T 123 | 456"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "F#3/Gb3", positions: ["T 123 | 45-"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "G3", positions: ["T 123 | 4--"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "G#3/Ab3", positions: ["T 123 | Ab"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "A3", positions: ["T 12- | ---"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "A#3/Bb3", positions: ["T 1-- | ---"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "B3/Cb4", positions: ["T--- | ---"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "C4/B#3", positions: ["--- | ---"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "C#4/Db4", positions: ["T 123 | 45-"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "D4", positions: ["R T 123 | 4--"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "D#4/Eb4", positions: ["R T 123 | -5-"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "E4/Fb4", positions: ["R T 123 | ---"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "F4/E#4", positions: ["R T 12- | 4--"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "F#4/Gb4", positions: ["R T 1-- | 4--"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "G4", positions: ["T--- | ---"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "G#4/Ab4", positions: ["1-- | Ab"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "A4", positions: ["1-- | ---"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "A#4/Bb4", positions: ["1-- | Bb"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "B4/Cb5", positions: ["R T 123 | 456"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "C5/B#4", positions: ["R T 123 | 45-"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "C#5/Db5", positions: ["R T 123 | 4--"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "D5", positions: ["R T 123 | ---"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "D#5/Eb5", positions: ["R T 12- | ---"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "E5/Fb5", positions: ["R T 1-- | 4--"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "F5/E#5", positions: ["R T 1-- | -5-"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "F#5/Gb5", positions: ["R T 1-- | --6"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "G5", positions: ["R T 1-- | ---"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "G#5/Ab5", positions: ["R T-23 | Ab"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "A5", positions: ["R T-2- | ---"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "A#5/Bb5", positions: ["R T-2- | Bb"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "B5/Cb6", positions: ["R T 1-- | 4-5-"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "C6/B#5", positions: ["R T 1-- | Side C"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "C#6/Db6", positions: ["R--- | ---"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "D6", positions: ["R 123 | 45- C#"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "D#6/Eb6", positions: ["R 123 | 4-- C#"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "E6/Fb6", positions: ["R 12-| 456 C#"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "F6/E#6", positions: ["R 1--| 456 C#"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "F#6/Gb6", positions: ["R 1--| 45- C#"], imageUrl: "https://placehold.co/150x350.png" },
        { note: "G6", positions: ["R 1--| 4-- C#"], imageUrl: "https://placehold.co/150x350.png" }
    ],
    range: { low: "E3", high: "G6" },
    setupGuide: [
      {
        title: "Assembly",
        content: `1. Reed Prep: Moisten the reed in your mouth for a minute.
2. Grease: If joints are tight, apply a small amount of cork grease to the tenon corks.
3. Assemble: Assemble from the bell up to the barrel (Bell -> Lower Joint -> Upper Joint -> Barrel -> Mouthpiece).
4. Ligature and Reed: Place the reed on the mouthpiece so you can just see a tiny sliver of the mouthpiece tip over the reed. Slide the ligature on and tighten the screws just enough to hold the reed firmly.

*Warning: Reeds are fragile. Handle them by the thicker end to avoid chipping the tip.*`
      },
      {
        title: "Making Your First Sound",
        content: `With the clarinet fully assembled, rest the top of the mouthpiece on your top teeth. Cover your bottom teeth with your bottom lip.
Form a seal around the mouthpiece with your lips (like a drawstring bag). Take a breath and blow a steady stream of air. You should feel the reed vibrate.`
      },
      {
        title: "Tuning",
        content: `The clarinet's tuning is most affected by temperature, so warm it up first by blowing warm air through it.
Use a tuner and play an open G. You can adjust the pitch by pulling out or pushing in at the barrel or the middle joint, but small adjustments at the barrel are most common.`
      },
      {
        title: "Teardown and Maintenance",
        content: `Remove the ligature and reed and store the reed in a reed guard.
Use a swab to clean moisture from the inside of the instrument. Drop the weighted end through the bell and pull it all the way through a few times.
Wipe down the keys to remove fingerprints.
Disassemble the pieces and place them in the case.`
      }
    ]
  },
  {
    name: "Alto Saxophone",
    slug: "alto-saxophone",
    category: "Woodwind",
    clef: "treble",
    fingerings: [
      { note: "A#3/Bb3", positions: ["L:1 B | R:4"] },
      { note: "B3/Cb4", positions: ["L:1 | R:4"] },
      { note: "C4/B#3", positions: ["L:1 | R:5"] },
      { note: "C#4/Db4", positions: ["L:1 | R:6"] },
      { note: "D4", positions: ["L:123 | R:456"] },
      { note: "D#4/Eb4", positions: ["L:123 | R:456 Eb"] },
      { note: "E4/Fb4", positions: ["L:123 | R:45-"] },
      { note: "F4/E#4", positions: ["L:123 | R:4--"] },
      { note: "F#4/Gb4", positions: ["L:123 | R:-5-"] },
      { note: "G4", positions: ["L:123 | R:---"] },
      { note: "G#4/Ab4", positions: ["L:123 G# | R:---"] },
      { note: "A4", positions: ["L:12- | R:---"] },
      { note: "A#4/Bb4", positions: ["L:1 | R:4"] },
      { note: "B4/Cb5", positions: ["L:1 | R:---"] },
      { note: "C5/B#4", positions: ["L:-2- | R:---"] },
      { note: "C#5/Db5", positions: ["L:--- | R:---"] },
      { note: "D5", positions: ["O, L:123 | R:456"] },
      { note: "D#5/Eb5", positions: ["O, L:123 | R:456, Eb"] },
      { note: "E5/Fb5", positions: ["O, L:123 | R:45-"] },
      { note: "F5/E#5", positions: ["O, L:123 | R:4--"] },
      { note: "F#5/Gb5", positions: ["O, L:123 | R:-5-"] },
      { note: "G5", positions: ["O, L:123 | R:---"] },
      { note: "G#5/Ab5", positions: ["O, L:123, G# | R:---"] },
      { note: "A5", positions: ["O, L:12- | R:---"] },
      { note: "A#5/Bb5", positions: ["O, L:1, B | R:---"] },
      { note: "B5/Cb6", positions: ["O, L:1 | R:---"] },
      { note: "C6/B#5", positions: ["O, L:-2- | R:---"] },
      { note: "C#6/Db6", positions: ["O, L:--- | R:---"] },
      { note: "D6", positions: ["O, L:1, Palm D | R:---"] },
      { note: "D#6/Eb6", positions: ["O, L:1, Palm D, Eb | R:---"] },
      { note: "E6/Fb6", positions: ["O, L:12, Palm D, Eb | R:---"] },
      { note: "F6/E#6", positions: ["O, L:12, Palm F | R:---"] },
      { note: "F#6/Gb6", positions: ["L:1 | R:4--, High F#"] }
    ],
    range: { low: "Bb3", high: "F#6" },
    setupGuide: [
      {
        title: "Assembly",
        content: `1. Neck Strap: Put the neck strap on first.
2. Body and Neck: Carefully insert the neck into the body of the saxophone and tighten the neck screw just enough to hold it.
3. Mouthpiece: Prepare the reed and mouthpiece just like a clarinet. Push the mouthpiece onto the cork on the neck. It should go on about halfway.
4. Strap Up: Attach the neck strap to the ring on the back of the saxophone.

*Warning: The octave key mechanism on the neck is delicate. Be very careful not to bend it.*`
      },
      {
        title: "Making Your First Sound",
        content: `The embouchure (mouth position) is very similar to the clarinet. Top teeth on the mouthpiece, bottom lip over bottom teeth.
Curl your lips around the mouthpiece and blow. Try to produce a long, steady tone. Start with just the mouthpiece and neck first, then try with the full instrument.`
      },
      {
        title: "Tuning",
        content: `Warm up the instrument first. Use a tuner and play a written F# (concert A for Alto).
If you are sharp (#), pull the mouthpiece out slightly. If you are flat (b), push it in. Make only small adjustments at a time.`
      },
      {
        title: "Teardown and Maintenance",
        content: `Remove the reed and store it safely.
Use a swab to clean the inside of the main body and the neck. You may have a separate, smaller swab for the neck.
Wipe down the exterior. Place the end cap on the top of the body before putting it in the case to protect the octave key mechanism.`
      }
    ]
  },
  {
    name: "Tenor Saxophone",
    slug: "tenor-saxophone",
    category: "Woodwind",
    clef: "treble",
    fingerings: [
        { note: "G#3/Ab3", positions: ["L:123 G# | R:456 Eb"] },
        { note: "A3", positions: ["L:1, B | R:456"] },
        { note: "A#3/Bb3", positions: ["L:1, B | R:4"] },
        { note: "B3/Cb4", positions: ["L:1 | R:4"] },
        { note: "C4/B#3", positions: ["L:1 | R:5"] },
        { note: "C#4/Db4", positions: ["L:1 | R:6"] },
        { note: "D4", positions: ["L:123 | R:456"] },
        { note: "D#4/Eb4", positions: ["L:123 | R:456, Eb"] },
        { note: "E4/Fb4", positions: ["L:123 | R:45-"] },
        { note: "F4/E#4", positions: ["L:123 | R:4--"] },
        { note: "F#4/Gb4", positions: ["L:123 | R:-5-"] },
        { note: "G4", positions: ["L:123 | R:---"] },
        { note: "G#4/Ab4", positions: ["L:123, G# | R:---"] },
        { note: "A4", positions: ["L:12- | R:---"] },
        { note: "A#4/Bb4", positions: ["L:1, B | R:---"] },
        { note: "B4/Cb5", positions: ["L:1 | R:---"] },
        { note: "C5/B#4", positions: ["L:-2- | R:---"] },
        { note: "C#5/Db5", positions: ["L:--- | R:---"] },
        { note: "D5", positions: ["O, L:123 | R:456"] },
        { note: "D#5/Eb5", positions: ["O, L:123 | R:456, Eb"] },
        { note: "E5/Fb5", positions: ["O, L:123 | R:45-"] },
        { note: "F5/E#5", positions: ["O, L:123 | R:4--"] },
        { note: "F#5/Gb5", positions: ["O, L:123 | R:-5-"] },
        { note: "G5", positions: ["O, L:123 | R:---"] },
        { note: "G#5/Ab5", positions: ["O, L:123, G# | R:---"] },
        { note: "A5", positions: ["O, L:12- | R:---"] },
        { note: "A#5/Bb5", positions: ["O, L:1, B | R:---"] },
        { note: "B5/Cb6", positions: ["O, L:1 | R:---"] },
        { note: "C6/B#5", positions: ["O, L:-2- | R:---"] },
        { note: "C#6/Db6", positions: ["O, L:--- | R:---"] },
        { note: "D6", positions: ["O, L:1, Palm D | R:---"] },
        { note: "D#6/Eb6", positions: ["O, L:1, Palm D, Eb | R:---"] },
        { note: "E6/Fb6", positions: ["O, L:12, Palm D, Eb | R:---"] }
    ],
    range: { low: "Ab3", high: "E6" },
    setupGuide: [
      {
        title: "Assembly",
        content: `1. Neck Strap: Put the neck strap on first.
2. Body and Neck: Carefully insert the neck into the body of the saxophone and tighten the neck screw just enough to hold it.
3. Mouthpiece: Prepare the reed and mouthpiece just like a clarinet. Push the mouthpiece onto the cork on the neck. It should go on about halfway.
4. Strap Up: Attach the neck strap to the ring on the back of the saxophone.

*Warning: The octave key mechanism on the neck is delicate. Be very careful not to bend it.*`
      },
      {
        title: "Making Your First Sound",
        content: `The embouchure (mouth position) is very similar to the clarinet. Top teeth on the mouthpiece, bottom lip over bottom teeth.
Curl your lips around the mouthpiece and blow. Try to produce a long, steady tone. Start with just the mouthpiece and neck first, then try with the full instrument.`
      },
      {
        title: "Tuning",
        content: `Warm up the instrument first. Use a tuner and play a written C (concert Bb).
If you are sharp (#), pull the mouthpiece out slightly. If you are flat (b), push it in. Make only small adjustments at a time.`
      },
      {
        title: "Teardown and Maintenance",
        content: `Remove the reed and store it safely.
Use a swab to clean the inside of the main body and the neck. You may have a separate, smaller swab for the neck.
Wipe down the exterior. Place the end cap on the top of the body before putting it in the case to protect the octave key mechanism.`
      }
    ]
  },
  {
    name: "Baritone Saxophone",
    slug: "baritone-saxophone",
    category: "Woodwind",
    clef: "treble",
    fingerings: [
        { note: "A3/G##3", positions: ["L:1 | R:4, Low A"] },
        { note: "A#3/Bb3", positions: ["L:1, B | R:4"] },
        { note: "B3/Cb4", positions: ["L:1 | R:4"] },
        { note: "C4/B#3", positions: ["L:1 | R:5"] },
        { note: "C#4/Db4", positions: ["L:1 | R:6"] },
        { note: "D4", positions: ["L:123 | R:456"] },
        { note: "D#4/Eb4", positions: ["L:123 | R:456, Eb"] },
        { note: "E4/Fb4", positions: ["L:123 | R:45-"] },
        { note: "F4/E#4", positions: ["L:123 | R:4--"] },
        { note: "F#4/Gb4", positions: ["L:123 | R:-5-"] },
        { note: "G4", positions: ["L:123 | R:---"] },
        { note: "G#4/Ab4", positions: ["L:123, G# | R:---"] },
        { note: "A4", positions: ["L:12- | R:---"] },
        { note: "A#4/Bb4", positions: ["L:1, B | R:---"] },
        { note: "B4/Cb5", positions: ["L:1 | R:---"] },
        { note: "C5/B#4", positions: ["L:-2- | R:---"] },
        { note: "C#5/Db5", positions: ["L:--- | R:---"] },
        { note: "D5", positions: ["O, L:123 | R:456"] },
        { note: "D#5/Eb5", positions: ["O, L:123 | R:456, Eb"] },
        { note: "E5/Fb5", positions: ["O, L:123 | R:45-"] },
        { note: "F5/E#5", positions: ["O, L:123 | R:4--"] },
        { note: "F#5/Gb5", positions: ["O, L:123 | R:-5-"] },
        { note: "G5", positions: ["O, L:123 | R:---"] },
        { note: "G#5/Ab5", positions: ["O, L:123, G# | R:---"] },
        { note: "A5", positions: ["O, L:12- | R:---"] }
    ],
    range: { low: "A3", high: "A5" },
    setupGuide: [
      {
        title: "Assembly",
        content: `1. Neck Strap/Harness: Put your strap or harness on first. For a bari sax, a harness is recommended.
2. Body and Neck: Carefully insert the neck (it may have a curve or pigtail) into the body and tighten the neck screw.
3. Mouthpiece: Prepare the larger reed and mouthpiece. Push the mouthpiece onto the neck cork.
4. Strap Up: Attach your harness/strap to the ring on the back of the saxophone.

*Warning: The octave key mechanism on the neck is delicate. Be very careful not to bend it.*`
      },
      {
        title: "Making Your First Sound",
        content: `The embouchure is similar to other saxes but may be slightly looser. Top teeth on the mouthpiece, bottom lip over bottom teeth.
A bari sax requires a large, full column of air to produce a good tone. Start with just the mouthpiece and neck.`
      },
      {
        title: "Tuning",
        content: `Warm up the instrument first. Use a tuner and play a written F# (concert A).
If you are sharp (#), pull the mouthpiece out slightly. If you are flat (b), push it in. The bari sax also has a spit valve on the pigtail of the neck that needs to be emptied.`
      },
      {
        title: "Teardown and Maintenance",
        content: `Remove the reed and store it safely.
Use a swab to clean the inside of the main body and the neck.
Wipe down the exterior. Place the end cap on the top of the body before putting it in the case.`
      }
    ]
  },
  {
    name: "Trumpet",
    slug: "trumpet",
    category: "Brass",
    clef: "treble",
    fingerings: [
      { note: "F#3/Gb3", positions: ["1-2-3"] },
      { note: "G3", positions: ["1-3"] },
      { note: "G#3/Ab3", positions: ["2-3"] },
      { note: "A3", positions: ["1-2"] },
      { note: "A#3/Bb3", positions: ["1"] },
      { note: "B3/Cb4", positions: ["2"] },
      { note: "C4/B#3", positions: ["Open"] },
      { note: "C#4/Db4", positions: ["1-2-3"] },
      { note: "D4", positions: ["1-3"] },
      { note: "D#4/Eb4", positions: ["2-3"] },
      { note: "E4/Fb4", positions: ["1-2"] },
      { note: "F4/E#4", positions: ["1"] },
      { note: "F#4/Gb4", positions: ["2"] },
      { note: "G4", positions: ["Open"] },
      { note: "G#4/Ab4", positions: ["2-3"] },
      { note: "A4", positions: ["1-2"] },
      { note: "A#4/Bb4", positions: ["1"] },
      { note: "B4/Cb5", positions: ["2"] },
      { note: "C5/B#4", positions: ["Open"] },
      { note: "C#5/Db5", positions: ["1-2"] },
      { note: "D5", positions: ["1"] },
      { note: "D#5/Eb5", positions: ["2"] },
      { note: "E5/Fb5", positions: ["Open"] },
      { note: "F5/E#5", positions: ["1"] },
      { note: "F#5/Gb5", positions: ["2"] },
      { note: "G5", positions: ["Open"] },
      { note: "G#5/Ab5", positions: ["2-3"] },
      { note: "A5", positions: ["1-2"] },
      { note: "A#5/Bb5", positions: ["1"] },
      { note: "B5/Cb6", positions: ["2"] },
      { note: "C6/B#5", positions: ["Open"] }
    ],
    range: { low: "F#3", high: "C6" },
    setupGuide: [
      {
        title: "Assembly & Oiling",
        content: `The only assembly is inserting the mouthpiece. Give it a gentle twist to secure it. Do not hit or force it in, or it can get it stuck.
Before playing, oil the valves. Unscrew one valve at a time, pull it out partially, and apply a few drops of valve oil. Re-insert, making sure it clicks into its proper alignment, and screw the cap back on. Press the valve up and down to distribute the oil.

*Warning: Dropping a valve can permanently damage it. Oil them one by one over a soft surface.*`
      },
      {
        title: "Making Your First Sound",
        content: `Start by buzzing your lips, like making a "raspberry" sound. The buzz is what creates the sound.
Now, try buzzing into just the mouthpiece. Aim for a steady, consistent buzz.
Once you can do that, insert the mouthpiece into the trumpet and buzz again. Don't press the mouthpiece too hard against your lips.`
      },
      {
        title: "Tuning",
        content: `The main tuning slide is the large U-shaped slide near the front of the trumpet.
Play a written C (no valves pressed) and check it with a tuner. Pulling the slide out lowers the pitch (makes it flatter). Pushing it in raises the pitch (makes it sharper).`
      },
      {
        title: "Teardown and Maintenance",
        content: `Remove the mouthpiece.
Press the water keys (spit valves) to empty any condensation from the horn.
Wipe the outside of the trumpet with a soft cloth to remove fingerprints.
Store the trumpet and mouthpiece in the case. Give your trumpet a full bath every few months to clean it inside and out.`
      }
    ]
  },
   {
    name: "Trombone",
    slug: "trombone",
    category: "Brass",
    clef: "bass",
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
  },
  {
    name: "French Horn",
    slug: "french-horn",
    category: "Brass",
    clef: "treble",
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
  },
  {
    name: "Baritone B.C.",
    slug: "baritone-bc",
    category: "Brass",
    clef: "bass",
    fingerings: [
      { note: "E2/Fb2", positions: ["1-2"] },
      { note: "F2/E#2", positions: ["1"] },
      { note: "F#2/Gb2", positions: ["2"] },
      { note: "G2", positions: ["Open"] },
      { note: "G#2/Ab2", positions: ["2-3"] },
      { note: "A2", positions: ["1-2"] },
      { note: "A#2/Bb2", positions: ["1"] },
      { note: "B2/Cb3", positions: ["2"] },
      { note: "C3/B#2", positions: ["Open"] },
      { note: "C#3/Db3", positions: ["1-2"] },
      { note: "D3", positions: ["1"] },
      { note: "D#3/Eb3", positions: ["2"] },
      { note: "E3/Fb3", positions: ["Open"] },
      { note: "F3/E#3", positions: ["1"] },
      { note: "F#3/Gb3", positions: ["2"] },
      { note: "G3", positions: ["Open"] },
      { note: "G#3/Ab3", positions: ["2-3"] },
      { note: "A3", positions: ["1-2"] },
      { note: "A#3/Bb3", positions: ["1"] },
      { note: "B3/Cb4", positions: ["2"] },
      { note: "C4/B#3", positions: ["Open"] },
      { note: "C#4/Db4", positions: ["1-2"] },
      { note: "D4", positions: ["1"] },
      { note: "D#4/Eb4", positions: ["2"] },
      { note: "E4/Fb4", positions: ["Open"] },
      { note: "F4/E#4", positions: ["1"] },
      { note: "F#4/Gb4", positions: ["2"] },
      { note: "G4", positions: ["Open"] },
      { note: "G#4/Ab4", positions: ["2-3"] },
      { note: "A4", positions: ["1-2"] },
      { note: "A#4/Bb4", positions: ["1"] }
    ],
    range: { low: "E2", high: "Bb4" },
    setupGuide: [
      {
        title: "Assembly & Oiling",
        content: `Gently twist the mouthpiece into the leadpipe to secure it.
Before playing, oil the valves. Unscrew one valve at a time, pull it out partially, and apply a few drops of valve oil. Re-insert, making sure it clicks into its proper alignment, and screw the cap back on. Press the valve up and down to distribute the oil.
*Warning: Be careful not to drop the valves. Always oil them one at a time over a soft surface.*`
      },
      {
        title: "Making Your First Sound",
        content: `The sound is produced by buzzing your lips. Practice buzzing into just the mouthpiece first, aiming for a steady, clear tone.
Then, insert the mouthpiece into the baritone and buzz again. Support your sound with a steady stream of air.`
      },
      {
        title: "Tuning",
        content: `The main tuning slide is the large U-shaped slide near the front of the instrument.
Play a Bb (no valves pressed) and check it with a tuner. Pull the slide out to lower the pitch and push it in to raise the pitch.`
      },
      {
        title: "Teardown and Maintenance",
        content: `Remove the mouthpiece.
Press the water keys to empty any condensation from the horn.
Wipe the outside of the instrument with a soft cloth to remove fingerprints.
Store the baritone and mouthpiece in their case.`
      }
    ]
  },
  {
    name: "Baritone T.C.",
    slug: "baritone-tc",
    category: "Brass",
    clef: "treble",
    fingerings: [
      { note: "F#3/Gb3", positions: ["1-2-3"] },
      { note: "G3", positions: ["1-3"] },
      { note: "G#3/Ab3", positions: ["2-3"] },
      { note: "A3", positions: ["1-2"] },
      { note: "A#3/Bb3", positions: ["1"] },
      { note: "B3/Cb4", positions: ["2"] },
      { note: "C4/B#3", positions: ["Open"] },
      { note: "C#4/Db4", positions: ["1-2-3"] },
      { note: "D4", positions: ["1-3"] },
      { note: "D#4/Eb4", positions: ["2-3"] },
      { note: "E4/Fb4", positions: ["1-2"] },
      { note: "F4/E#4", positions: ["1"] },
      { note: "F#4/Gb4", positions: ["2"] },
      { note: "G4", positions: ["Open"] },
      { note: "G#4/Ab4", positions: ["2-3"] },
      { note: "A4", positions: ["1-2"] },
      { note: "A#4/Bb4", positions: ["1"] },
      { note: "B4/Cb5", positions: ["2"] },
      { note: "C5/B#4", positions: ["Open"] },
      { note: "C#5/Db5", positions: ["1-2"] },
      { note: "D5", positions: ["1"] },
      { note: "D#5/Eb5", positions: ["2"] },
      { note: "E5/Fb5", positions: ["Open"] },
      { note: "F5/E#5", positions: ["1"] },
      { note: "F#5/Gb5", positions: ["2"] },
      { note: "G5", positions: ["Open"] },
      { note: "G#5/Ab5", positions: ["2-3"] },
      { note: "A5", positions: ["1-2"] },
      { note: "A#5/Bb5", positions: ["1"] },
      { note: "B5/Cb6", positions: ["2"] },
      { note: "C6/B#5", positions: ["Open"] }
    ],
    range: { low: "F#3", high: "C6" },
    setupGuide: [
      {
        title: "Assembly & Oiling",
        content: `Gently twist the mouthpiece into the leadpipe to secure it.
Before playing, oil the valves. Unscrew one valve at a time, pull it out partially, and apply a few drops of valve oil. Re-insert, making sure it clicks into its proper alignment, and screw the cap back on. Press the valve up and down to distribute the oil.
*Warning: Be careful not to drop the valves. Always oil them one at a time over a soft surface.*`
      },
      {
        title: "Making Your First Sound",
        content: `The sound is produced by buzzing your lips. Practice buzzing into just the mouthpiece first, aiming for a steady, clear tone.
Then, insert the mouthpiece into the baritone and buzz again. Support your sound with a steady stream of air.`
      },
      {
        title: "Tuning",
        content: `The main tuning slide is the large U-shaped slide near the front of the instrument.
Play a written C (no valves pressed) and check it with a tuner. Pull the slide out to lower the pitch and push it in to raise the pitch.`
      },
      {
        title: "Teardown and Maintenance",
        content: `Remove the mouthpiece.
Press the water keys to empty any condensation from the horn.
Wipe the outside of the instrument with a soft cloth to remove fingerprints.
Store the baritone and mouthpiece in their case.`
      }
    ]
  },
  {
    name: "Tuba",
    slug: "tuba",
    category: "Brass",
    clef: "bass",
    fingerings: [
      { note: "D1", positions: ["1-3"] },
      { note: "D#1/Eb1", positions: ["2-3"] },
      { note: "E1/Fb1", positions: ["1-2"] },
      { note: "F1/E#1", positions: ["1"] },
      { note: "F#1/Gb1", positions: ["2"] },
      { note: "G1", positions: ["Open"] },
      { note: "G#1/Ab1", positions: ["2-3"] },
      { note: "A1", positions: ["1-2"] },
      { note: "A#1/Bb1", positions: ["1"] },
      { note: "B1/Cb2", positions: ["2"] },
      { note: "C2/B#1", positions: ["Open"] },
      { note: "C#2/Db2", positions: ["1-2"] },
      { note: "D2", positions: ["1"] },
      { note: "D#2/Eb2", positions: ["2"] },
      { note: "E2/Fb2", positions: ["Open"] },
      { note: "F2/E#2", positions: ["1"] },
      { note: "F#2/Gb2", positions: ["2"] },
      { note: "G2", positions: ["Open"] },
      { note: "G#2/Ab2", positions: ["2-3"] },
      { note: "A2", positions: ["1-2"] },
      { note: "A#2/Bb2", positions: ["1"] },
      { note: "B2/Cb3", positions: ["2"] },
      { note: "C3/B#2", positions: ["Open"] },
      { note: "C#3/Db3", positions: ["1-2"] },
      { note: "D3", positions: ["1"] },
      { note: "D#3/Eb3", positions: ["2"] },
      { note: "E3/Fb3", positions: ["Open"] },
      { note: "F3/E#3", positions: ["1"] },
      { note: "F#3/Gb3", positions: ["2"] },
      { note: "G3", positions: ["Open"] },
      { note: "G#3/Ab3", positions: ["2-3"] },
      { note: "A3", positions: ["1-2"] },
      { note: "A#3/Bb3", positions: ["1"] },
      { note: "B3/Cb4", positions: ["2"] },
      { note: "C4/B#3", positions: ["Open"] }
    ],
    range: { low: "D1", high: "C4" },
    setupGuide: [
      {
        title: "Assembly",
        content: `Carefully place the tuba on its stand or on a soft surface. Insert the mouthpiece into the leadpipe with a gentle twist. Do not force or hit it, as this can get it stuck.
*Warning: Tubas are large and heavy. Always handle with care and get help if needed to avoid injury or damage to the instrument.*`
      },
      {
        title: "Making Your First Sound",
        content: `Like other brass instruments, sound starts with a lip buzz. Practice buzzing your lips together to make a low-pitched raspberry sound.
Then, buzz into the large mouthpiece alone. Aim for a deep, resonant buzz.
Finally, put the mouthpiece in the tuba and blow a large, relaxed column of air while buzzing. The tuba requires a lot of air!`
      },
      {
        title: "Tuning",
        content: `The main tuning slide is a large slide near where the leadpipe enters the main body of the instrument.
Play a Bb and check the pitch with an electronic tuner. Pull the slide out to make the pitch lower (flatter) and push it in to make it higher (sharper).`
      },
      {
        title: "Teardown and Maintenance",
        content: `After playing, remove the mouthpiece.
Empty condensation using the water keys (spit valves).
Oil the valves (piston or rotary) as needed. Unscrew them one at a time, apply a few drops of oil, and work the valve to distribute it.
Wipe down the exterior of the tuba to remove fingerprints.`
      }
    ]
  },
  {
    name: "Violin",
    slug: "violin",
    category: "String",
    clef: "treble",
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
  },
  {
    name: "Viola",
    slug: "viola",
    category: "String",
    clef: "alto",
    fingerings: [
        { note: "C3/B#2", positions: ["Open C String"] },
        { note: "C#3/Db3", positions: ["C String: Low 1st Finger"] },
        { note: "D3", positions: ["C String: 1st Finger"] },
        { note: "D#3/Eb3", positions: ["C String: Low 2nd Finger"] },
        { note: "E3/Fb3", positions: ["C String: 2nd Finger"] },
        { note: "F3/E#3", positions: ["C String: 3rd Finger"] },
        { note: "F#3/Gb3", positions: ["C String: High 3rd / Low 4th"] },
        { note: "G3", positions: ["Open G String", "C String: 4th Finger"] },
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
        { note: "E5/Fb5", positions: ["A String: 4th Finger"] }
    ],
    range: { low: "C3", high: "E5" },
    setupGuide: [
      {
        title: "Setup",
        content: `1. Shoulder Rest: Attach a viola-sized shoulder rest to the back. Adjust it for a comfortable fit between your shoulder and chin.
2. Rosin the Bow: Tighten the bow hair so it's about a pencil's width from the stick. Rub rosin along the hair to create grip.

*Warning: As with a violin, do not overtighten the bow. Always loosen it after playing.*`
      },
      {
        title: "Making Your First Sound",
        content: `The viola is held just like a violin. It's larger, so it may require a slightly wider reach.
Rest the bow on the C or G string (the two lowest strings). Draw the bow smoothly, using the natural weight of your arm to produce a rich, deep tone.`
      },
      {
        title: "Tuning",
        content: `The open strings are C, G, D, A, from lowest to highest.
Use the large tuning pegs for big adjustments and the fine tuners for small adjustments. It's often easier to tune using the fine tuners.`
      },
      {
        title: "Teardown and Maintenance",
        content: `Loosen the bow hair completely after each session.
Use a soft cloth to wipe rosin dust off the instrument's body and strings.
Store the viola and bow securely in their case.`
      }
    ]
  },
  {
    name: "Cello",
    slug: "cello",
    category: "String",
    clef: "bass",
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
  },
  {
    name: "Double Bass",
    slug: "double-bass",
    category: "String",
    clef: "bass",
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
    range: { low: "E1", high: "G2" },
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
  },
  {
    name: "Snare Drum",
    slug: "snare-drum",
    category: "Percussion",
    clef: "percussion",
    fingerings: [],
    range: { low: "C4", high: "C4" },
    setupGuide: [
      {
        title: "Assembly",
        content: `1. Stand: Open the tripod base of the snare stand. Adjust the height so the top of the drum will be around your waist level when standing or seated.
2. Drum Placement: Open the basket of the stand and place the snare drum inside it. Gently tighten the basket's clutch to hold the drum securely, but don't overtighten, as this can choke the sound.
3. Engage Snares: Find the throw-off lever on the side of the drum. Flip it to the "on" position to engage the snare wires against the bottom head for that classic "snap" sound.`
      },
      {
        title: "Basic Grip & Stroke",
        content: `There are two main grips: Matched Grip (both hands hold the stick the same way) and Traditional Grip.
For Matched Grip, hold the sticks about a third of the way from the butt end. The fulcrum (pivot point) should be between your thumb and index finger.
Start with the stick tip about 2 inches from the drum head. Lift from the wrist and let the stick rebound freely after striking the center of the head.`
      },
      {
        title: "Tuning",
        content: `Use a drum key. Start with the top (batter) head. Tighten each tension rod in a star pattern (like tightening lug nuts on a car) to ensure even tension. Tune it to a pitch you like.
Repeat for the bottom (resonant) head. The bottom head is usually tuned higher than the top head.
Adjust the snare wire tension knob to get your desired amount of "sizzle".`
      },
      {
        title: "Teardown and Maintenance",
        content: `Disengage the snares using the throw-off lever.
Loosen the stand's basket and lift the drum out.
Collapse the stand.
If transporting, it's best to use a case or bag to protect the drum from dents and scratches.`
      }
    ]
  },
  {
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
  }
];
