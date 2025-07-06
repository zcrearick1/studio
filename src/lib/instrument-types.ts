export type Fingering = {
  note: string;
  positions: string[];
  imageUrl?: string;
  keys?: string[];
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
