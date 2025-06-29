export type Fingering = {
  note: string;
  positions: string[];
};

export type Instrument = {
  name: string;
  category: "Woodwind" | "String" | "Brass" | "Percussion";
  fingerings: Fingering[];
  setupGuide: string;
};

export const instruments: Instrument[] = [
  {
    name: "Flute",
    category: "Woodwind",
    fingerings: [
      { note: "C4", positions: ["T", "1", "2", "3", "|", "1", "2", "3", "C#"] },
      { note: "C#4/Db4", positions: ["T", "1", "2", "3", "|", "1", "2", "3"] },
      { note: "D4", positions: ["T", "1", "2", "3", "|", "1", "2", "E"] },
      { note: "E4", positions: ["T", "1", "2", "|", "1", "2", "Eb"] },
      { note: "F4", positions: ["T", "1", "2", "|", "1", "2"] },
      { note: "G4", positions: ["T", "1", "2", "|"] },
      { note: "A4", positions: ["T", "|"] },
    ],
    setupGuide: `1. **Assembly:** Gently twist the headjoint into the body, and the footjoint onto the other end. Align the embouchure hole with the first key on the body.
2. **Tuning:** Use a tuner to check the pitch of A4. Pull out or push in the headjoint to lower or raise the pitch.
3. **Cleaning:** After playing, use a cleaning rod and a soft cloth (like silk) to swab the inside of all three sections to remove moisture.
*Warning: Never force the joints together. If it's difficult, a tiny amount of cork grease can be applied, but this should be rare.*`,
  },
  {
    name: "Clarinet",
    category: "Woodwind",
    fingerings: [
      { note: "E3", positions: ["T", "1", "2", "3", "4", "5", "6"] },
      { note: "F3", positions: ["T", "1", "2", "3", "4", "5"] },
      { note: "G3", positions: ["T", "1", "2", "3"] },
      { note: "A3", positions: ["T", "1"] },
      { note: "B3", positions: ["T"] },
      { note: "C4", positions: ["All open"] },
    ],
    setupGuide: `1. **Reed Preparation:** Moisten the reed in your mouth for a minute.
2. **Assembly:** Assemble from the bell up to the barrel. Apply cork grease to the tenon corks if needed.
3. **Ligature and Reed:** Place the reed on the mouthpiece, with the flat side against the mouthpiece table. The tip of the reed should be slightly below the tip of the mouthpiece. Slide the ligature over and tighten the screws just enough to hold the reed firmly.
*Warning: Reeds are fragile and can break easily. Handle with care.*`,
  },
  {
    name: "Saxophone",
    category: "Woodwind",
    fingerings: [
        { note: "C4", positions: ["Middle C key"] },
        { note: "C#4/Db4", positions: ["All open"] },
        { note: "D4", positions: ["Side C", "1", "2", "3", "4", "5", "6"] },
        { note: "Eb4", positions: ["Side C", "1", "2", "3", "4", "5"] },
        { note: "E4", positions: ["Side C", "1", "2", "3", "4"] },
        { note: "F4", positions: ["Side C", "1", "2", "3"] },
    ],
    setupGuide: `1. **Reed and Mouthpiece:** Moisten the reed. Attach it to the mouthpiece using the ligature, similar to a clarinet.
2. **Neck and Body:** Place the neck into the top of the saxophone body and tighten the neck screw.
3. **Mouthpiece on Neck:** Push the mouthpiece onto the cork of the neck.
4. **Neck Strap:** Attach the neck strap to the ring on the back of the saxophone and adjust for a comfortable height.
*Warning: The octave key mechanism on the neck is delicate. Handle with care when assembling.*`,
  },
  {
    name: "Trumpet",
    category: "Brass",
    fingerings: [
        { note: "C4", positions: ["1", "2", "3"] },
        { note: "C#4/Db4", positions: ["1", "2"] },
        { note: "D4", positions: ["1", "3"] },
        { note: "D#4/Eb4", positions: ["2", "3"] },
        { note: "E4", positions: ["1"] },
        { note: "F4", positions: ["Open"] },
        { note: "G4", positions: ["1", "2"] },
    ],
    setupGuide: `1. **Oiling the Valves:** Unscrew one valve at a time. Pull it partially out and apply a few drops of valve oil. Re-insert, press the valve up and down to distribute the oil.
2. **Inserting the Mouthpiece:** Insert the mouthpiece and give it a gentle twist. Do not hit or force it in.
3. **Tuning:** Adjust the main tuning slide to tune the instrument. Pulling out lowers the pitch, pushing in raises it.
*Warning: Dropping a valve can permanently damage it. Oil them one by one over a soft surface.*`,
  },
   {
    name: "Trombone",
    category: "Brass",
    fingerings: [
        { note: "Bb2", positions: ["1st Position"] },
        { note: "A2", positions: ["2nd Position"] },
        { note: "Ab2", positions: ["3rd Position"] },
        { note: "G2", positions: ["4th Position"] },
        { note: "Gb2", positions: ["5th Position"] },
        { note: "F2", positions: ["6th Position"] },
        { note: "E2", positions: ["7th Position"] },
    ],
    setupGuide: `1. **Assembling:** Hold the bell section upright. Attach the hand slide section by fitting the two tubes together and tightening the lock nut.
2. **Lubricating the Slide:** Apply slide cream or oil to the inner slide stockings. Work the outer slide back and forth to spread the lubricant. A small spray of water can enhance the action.
3. **Mouthpiece:** Insert the mouthpiece with a gentle twist.
*Warning: The hand slide is very easily dented. Never rest the trombone on its slide.*`,
  },
  {
    name: "Violin",
    category: "String",
    fingerings: [
      { note: "G3", positions: ["Open G string"] },
      { note: "A3", positions: ["1st finger on G string"] },
      { note: "B3", positions: ["2nd finger on G string"] },
      { note: "C4", positions: ["3rd finger on G string"] },
      { note: "D4", positions: ["Open D string"] },
      { note: "E4", positions: ["1st finger on D string"] },
      { note: "F#4", positions: ["2nd finger on D string"] },
    ],
    setupGuide: `1. **Applying Rosin:** Tighten the bow hair (just enough so a pencil can fit between the hair and the stick). Rub the block of rosin up and down the length of the hair 5-10 times.
2. **Tuning:** Use the pegs for large adjustments and the fine tuners on the tailpiece for small adjustments. The strings should be G, D, A, E from lowest to highest.
3. **Shoulder Rest:** Attach the shoulder rest to the back of the violin. Adjust its position for comfort.
*Warning: Over-tightening the bow can warp the stick. Always loosen the hair after playing.*`,
  },
    {
    name: "Cello",
    category: "String",
    fingerings: [
      { note: "C2", positions: ["Open C string"] },
      { note: "D2", positions: ["1st finger on C string"] },
      { note: "E2", positions: ["3rd finger on C string"] },
      { note: "F2", positions: ["4th finger on C string"] },
    ],
    setupGuide: `1. **Endpin:** Adjust the endpin so the cello rests at a comfortable height when you are seated, with the C-peg near your left ear.
2. **Rosin the Bow:** Apply rosin to the bow hair, just like with a violin.
3. **Tuning:** Tune the strings to C, G, D, A, from lowest to highest, using the pegs and fine tuners.
*Warning: Ensure the endpin is securely tightened to prevent it from slipping while playing.*`,
  },
  {
    name: "Snare Drum",
    category: "Percussion",
    fingerings: [],
    setupGuide: `1. **Stand Setup:** Open the tripod base of the snare stand and adjust the height to a comfortable playing level (usually around waist height).
2. **Placing the Drum:** Open the basket of the stand and place the snare drum on it. Gently tighten the basket arms to hold the drum securely without choking the sound.
3. **Engaging Snares:** Locate the throw-off lever on the side of the drum. Flip it up to engage the snare wires against the bottom (resonant) head.
4. **Tuning:** Use a drum key to tune the drum. For the top (batter) head, tighten the tension rods in a star pattern to ensure even tension. Do the same for the bottom head. The bottom head is usually tuned higher than the top head.
*Warning: Do not overtighten the tension rods, as this can damage the drum hoops or head.*`
  },
  {
    name: "Mallet Percussion (Xylophone/Marimba)",
    category: "Percussion",
    fingerings: [],
    setupGuide: `1. **Frame Assembly:** Assemble the frame according to the manufacturer's instructions. Ensure all bolts are securely tightened.
2. **Placing the Bars:** Carefully place the sets of bars onto the frame. The "naturals" (white keys on a piano) and "accidentals" (black keys) are separate sections. Ensure they are seated correctly on the support posts.
3. **Resonators:** Attach the resonator tubes underneath the bars. These are crucial for the instrument's sound projection and tone.
4. **Choosing Mallets:** Select appropriate mallets for the desired sound. Harder mallets (plastic or wood) produce a bright, articulate sound, while softer mallets (yarn or cord) produce a warmer, mellower sound.
*Warning: Always lift and carry the bars and resonators with care, as they can be easily damaged or dented.*`
  }
];
