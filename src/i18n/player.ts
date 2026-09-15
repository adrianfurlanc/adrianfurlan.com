// The audio player's labels. Kept apart from ui.ts on purpose: the player
// script runs in the browser, and bundlers cannot drop unused parts of one big
// dictionary object, so importing ui.ts there would ship every paragraph on the
// site to every visitor. ui.ts imports this file, never the other way round.

export const player = {
  en: { play: "Play", pause: "Pause", seek: "Seek" },
  es: { play: "Reproducir", pause: "Pausa", seek: "Posición" },
};

/** Labels for an html lang value: "es" or "es-ES" give Spanish, anything else English. */
export const playerLabels = (lang: string) =>
  lang.startsWith("es") ? player.es : player.en;
