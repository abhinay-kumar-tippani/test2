const UNSPLASH = {
  hero: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600",
  about: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1400",
  reception: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1400",
  treatmentRoom: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1400",
  equipment: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1400",
} as const;

export function resolveDemoImage(src: string) {
  if (!src.includes("picsum.photos")) return src;

  if (src.includes("dentist-hero")) return UNSPLASH.hero;
  if (src.includes("dentist-about")) return UNSPLASH.about;
  if (src.includes("dentist-profile")) return UNSPLASH.about;
  if (src.includes("dentist-team")) return UNSPLASH.about;
  if (src.includes("clinic-reception")) return UNSPLASH.reception;
  if (src.includes("clinic-treatment-room")) return UNSPLASH.treatmentRoom;
  if (src.includes("clinic-equipment")) return UNSPLASH.equipment;
  if (src.includes("clinic-exterior")) return UNSPLASH.reception;
  if (src.includes("clinic-waiting-area")) return UNSPLASH.reception;

  return UNSPLASH.about;
}
