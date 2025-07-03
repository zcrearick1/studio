import type { Instrument } from '../instrument-types';

export const snareDrum: Instrument = {
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
  };
