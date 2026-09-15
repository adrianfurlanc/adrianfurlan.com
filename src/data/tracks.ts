// Release and track data for the homepage.
//
// Audio contract: each track's file is expected at public/audio/<slug>.mp3
// (for example public/audio/trippy.mp3). Drop the files in and the player
// picks them up with no code change. Until then, pressing play does nothing.
//
// Fields that are sentences carry both languages; pages pick one with
// `release.released[locale]`. Names and titles are never translated.

import type { Localised } from "../i18n";
import type { PlatformIcon } from "./platforms";

export interface StreamingPlatform {
  name: string;
  icon: PlatformIcon;
  href: string;
  /** Optional one-liner under the name, e.g. why this link is different. */
  note?: Localised;
}

export const release = {
  artist: "The Fearless",
  title: "The Timeless EP",
  released: {
    en: "December 2026",
    es: "diciembre de 2026",
  } satisfies Localised,
  trackCount: 4,
  runningTime: "12:43",
  year: "2026",
  coverCaption: {
    en: "The Timeless EP cover",
    es: "Portada de The Timeless EP",
  } satisfies Localised,
  audioNote: {
    en: "Audio goes live with the release, December 2026.",
    es: "El audio estará disponible con el lanzamiento, en diciembre de 2026.",
  } satisfies Localised,
  // Streaming platforms, the "Listen on" cards under the homepage track list:
  // four streaming services plus Bandcamp, where listeners buy the EP and
  // pay the artist directly. Replace each "#" with the platform's address.
  // A "#" link stays on the page and goes nowhere; an empty address ("")
  // hides that platform, and the whole section is left out while every
  // address is empty. `icon` picks the mark drawn by
  // src/components/PlatformIcon.astro. Platform names are brand names and
  // are never translated.
  streaming: [
    { name: "Spotify", icon: "spotify", href: "#" },
    { name: "Apple Music", icon: "apple-music", href: "#" },
    { name: "YouTube Music", icon: "youtube-music", href: "#" },
    { name: "Amazon Music", icon: "amazon-music", href: "#" },
    {
      name: "Bandcamp",
      icon: "bandcamp",
      href: "#",
      note: {
        en: "Pay the artist directly",
        es: "Paga directamente al artista",
      },
    },
  ] satisfies StreamingPlatform[],
};

export interface Track {
  num: string;
  slug: string;
  title: string;
  duration: string;
}

export const tracks: Track[] = [
  { num: "01", slug: "trippy", title: "Trippy", duration: "3:25" },
  { num: "02", slug: "honey-bunny", title: "Honey Bunny", duration: "2:31" },
  {
    num: "03",
    slug: "hey-sasquatch",
    title: "Hey Sasquatch!",
    duration: "2:47",
  },
  { num: "04", slug: "chaotic", title: "Chaotic", duration: "4:00" },
];
