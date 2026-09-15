import type { Locale } from "./index";
import { player } from "./player";

// Every piece of site text, in English and Spanish under the same keys.
// `es` is typed as the shape of `en`, so a missing Spanish entry is a type
// error that `astro check` reports instead of a blank spot on the page.
// Blog posts are content, not interface text: they live in src/content/.

const en = {
  site: { name: "Adrián Furlan" },
  nav: {
    home: "Home",
    about: "About",
    blog: "Blog",
    contact: "Contact",
    listen: "Listen",
  },
  header: { menu: "Menu", primary: "Primary", language: "Language" },
  player: player.en,
  home: {
    lede: "Four tracks written by Adrián over 20 years ago and recorded in Jaime's home studio over the span of 3 days in October 2025. Adrián only plays the guitar, it is The Fearless who fill the room. Press play on anything below.",
    tracks: (n: number) => (n === 1 ? "1 track" : `${n} tracks`),
    tracksHeading: "Tracks",
    pressPlay: "Press play",
  },
  about: {
    title: "About",
    paragraphs: [
      'Adrián Furlan is one of the members of the Spanish indie rock band known only as "The Fearless". Most of the band\'s initial rehearsals were at his home in Valencia, Spain. The band later transitioned to rehearsing in a professional recording studio as time went on.',
      "The band formed in September 2024 after connecting with each other via the Vampr mobile app. They rehearsed weekly and created an initial setlist of seven songs, four of which were recorded in three sessions in October 2025 to form the basis of this EP.",
      "Despite having several interim drummers, the band has never had a stable presence in the drum department. If you are a drummer, enjoy the songs posted here and would like to join us, please send me a message via this website's contact form and I will try to respond within a couple of days.",
      "The band is currently on hiatus. Our singer, Zahir, moved to Madrid at the end of last year, and we haven't found a replacement for him just yet. If you are a singer who can sing in English and would like to join the band, use the contact form on this website to get in touch with me, and I promise I'll get back to you.",
    ],
    // One role per band member, in the order the About page lists them.
    roles: ["Songwriter / Guitar", "Bass", "Vocals / Guitar"],
    credits: [
      "Drums on the record by Murat Mumcuoglu and [drummer, name to come].",
      "Produced by VicsMix.",
    ],
  },
  contact: {
    title: "Contact",
    lede: "For shows, press, or anything else. Replies within a few days.",
    name: "Name",
    email: "Email",
    message: "Message",
    placeholder: "Shows, press, or anything else.",
    send: "Send",
  },
  blog: {
    title: "Blog",
    lede: "Notes on the record, the band, the road.",
    latest: "Latest post",
    read: "Read",
    earlier: "Earlier posts",
    pagination: "Pagination",
    // "Previous" in two pieces: phones show only the first.
    prev: "Prev",
    prevTail: "ious",
    next: "Next",
    pageOf: (n: number, total: number) => `Page ${n} of ${total}`,
    pageNumber: (n: number) => `Page ${n}`,
  },
  post: {
    readTime: (minutes: number) => `${minutes} min read`,
    neighbours: "Previous and next posts",
    previous: "Previous",
    next: "Next",
    oldest: "You are reading the oldest post.",
    newest: "You are reading the newest post.",
    allPosts: "All posts",
    untranslated: "This post has not been translated yet.",
  },
};

export type Dictionary = typeof en;

const es: Dictionary = {
  site: { name: "Adrián Furlan" },
  nav: {
    home: "Inicio",
    about: "Sobre mí",
    blog: "Blog",
    contact: "Contacto",
    listen: "Escuchar",
  },
  header: { menu: "Menú", primary: "Principal", language: "Idioma" },
  player: player.es,
  home: {
    lede: "Cuatro temas que Adrián escribió hace más de 20 años, grabados en el estudio casero de Jaime a lo largo de 3 días en octubre de 2025. Adrián solo toca la guitarra; son The Fearless quienes llenan la sala. Dale al play a cualquiera de los temas.",
    tracks: (n) => (n === 1 ? "1 tema" : `${n} temas`),
    tracksHeading: "Temas",
    pressPlay: "Dale al play",
  },
  about: {
    title: "Sobre mí",
    paragraphs: [
      "Adrián Furlan es uno de los miembros de la banda española de indie rock conocida simplemente como «The Fearless». La mayoría de los primeros ensayos de la banda fueron en su casa de Valencia, España. Con el tiempo, la banda pasó a ensayar en un estudio de grabación profesional.",
      "La banda se formó en septiembre de 2024 tras conocerse a través de la aplicación móvil Vampr. Ensayaban cada semana y crearon un repertorio inicial de siete canciones, cuatro de las cuales se grabaron en tres sesiones en octubre de 2025 y forman la base de este EP.",
      "A pesar de haber contado con varios baterías temporales, la banda nunca ha tenido una presencia estable a la batería. Si tocas la batería, te gustan las canciones publicadas aquí y quieres unirte a nosotros, escríbeme a través del formulario de contacto de esta web e intentaré responderte en un par de días.",
      "La banda está actualmente en pausa. Nuestro cantante, Zahir, se mudó a Madrid a finales del año pasado y todavía no hemos encontrado a nadie que lo sustituya. Si cantas, puedes hacerlo en inglés y te gustaría unirte a la banda, ponte en contacto conmigo a través del formulario de esta web; te prometo que te responderé.",
    ],
    roles: ["Compositor / Guitarra", "Bajo", "Voz / Guitarra"],
    credits: [
      "Batería en el disco: Murat Mumcuoglu y [batería, nombre pendiente].",
      "Producido por VicsMix.",
    ],
  },
  contact: {
    title: "Contacto",
    lede: "Para conciertos, prensa o cualquier otra cosa. Respondo en unos días.",
    name: "Nombre",
    email: "Correo electrónico",
    message: "Mensaje",
    placeholder: "Conciertos, prensa o cualquier otra cosa.",
    send: "Enviar",
  },
  blog: {
    title: "Blog",
    lede: "Notas sobre el disco, la banda y la carretera.",
    latest: "Última entrada",
    read: "Leer",
    earlier: "Entradas anteriores",
    pagination: "Paginación",
    prev: "Ant",
    prevTail: "erior",
    next: "Siguiente",
    pageOf: (n, total) => `Página ${n} de ${total}`,
    pageNumber: (n) => `Página ${n}`,
  },
  post: {
    readTime: (minutes) => `${minutes} min de lectura`,
    neighbours: "Entradas anterior y siguiente",
    previous: "Anterior",
    next: "Siguiente",
    oldest: "Estás leyendo la entrada más antigua.",
    newest: "Estás leyendo la entrada más reciente.",
    allPosts: "Todas las entradas",
    untranslated: "Esta entrada aún no está traducida.",
  },
};

export const ui: Record<Locale, Dictionary> = { en, es };
