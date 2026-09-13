// Release and track data for the homepage.
//
// Audio contract: each track's file is expected at public/audio/<slug>.mp3
// (for example public/audio/trippy.mp3). Drop the files in and the player
// picks them up with no code change. Until then, pressing play does nothing.

export const release = {
  artist: "The Fearless",
  title: "The Timeless EP",
  released: "December 2026",
  trackCount: 4,
  runningTime: "12:43",
  year: "2026",
  coverCaption: "The Timeless EP cover",
  audioNote: "Audio goes live with the release, December 2026.",
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
