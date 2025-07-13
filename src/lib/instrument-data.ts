
import type { Instrument } from './instrument-types';

import { flute } from './instruments/flute';
import { clarinet } from './instruments/clarinet';
import { bassoon } from './instruments/bassoon';
import { altoSaxophone } from './instruments/alto-saxophone';
import { tenorSaxophone } from './instruments/tenor-saxophone';
import { baritoneSaxophone } from './instruments/baritone-saxophone';
import { trumpet } from './instruments/trumpet';
import { frenchHorn } from './instruments/french-horn';
import { trombone } from './instruments/trombone';
import { baritoneBC } from './instruments/baritone-bc';
import { baritoneTC } from './instruments/baritone-tc';
import { tuba } from './instruments/tuba';
import { violin } from './instruments/violin';
import { viola } from './instruments/viola';
import { cello } from './instruments/cello';
import { doubleBass } from './instruments/double-bass';
import { snareDrum } from './instruments/snare-drum';
import { malletPercussion } from './instruments/mallet-percussion';
import { piano } from './instruments/piano';

export const instruments: Instrument[] = [
  flute,
  clarinet,
  bassoon,
  altoSaxophone,
  tenorSaxophone,
  baritoneSaxophone,
  trumpet,
  frenchHorn,
  trombone,
  baritoneBC,
  baritoneTC,
  tuba,
  violin,
  viola,
  cello,
  doubleBass,
  piano,
  snareDrum,
  malletPercussion,
];
