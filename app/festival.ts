export type FestivalLanguage = "it" | "ru" | "en";

export type FestivalBand = {
  name: string;
  setTime: string;
  endTime: string;
  profileUrl: string;
  description: Record<FestivalLanguage, string>;
};

export const festival = {
  name: "что-то почувствовать фест",
  dateIso: "2026-08-16",
  doors: "18:00",
  venue: "Хват",
  address: "Галактионовская, 40",
  city: "Самара",
  eventUrl: "https://vk.ru/justtofeelsomethingfest63",
  copy: {
    it: {
      kicker: "Il concerto esiste. Abbiamo controllato.",
      title: "QUALCOSA DA SENTIRE.",
      date: "16 agosto 2026",
      doorsLabel: "Porte",
      venueLabel: "Luogo",
      setLabel: "C’mon, Bollo!",
      lineupTitle: "CINQUE GRUPPI. UNA DOMENICA.",
      lineupIntro:
        "Power-pop, alternative, emo, hardcore e post-rock. Noi apriamo: arrivare tardi sarebbe molto 2011.",
      eventLink: "Pagina del festival",
      posterTwoLink: "Locandina tipografica 02",
      profileLink: "Ascolta / scopri",
      posterAlt:
        "Locandina del festival Что-то почувствовать, 16 agosto 2026 al bar Hvat di Samara",
    },
    ru: {
      kicker: "Концерт существует. Мы проверили.",
      title: "ЧТО-ТО ПОЧУВСТВОВАТЬ.",
      date: "16 августа 2026",
      doorsLabel: "Двери",
      venueLabel: "Место",
      setLabel: "C’mon, Bollo!",
      lineupTitle: "ПЯТЬ ГРУПП. ОДНО ВОСКРЕСЕНЬЕ.",
      lineupIntro:
        "Пауэр-поп, альтернатива, эмо, хардкор и пост-рок. Мы открываем — опаздывать будет очень по-2011-му.",
      eventLink: "Страница фестиваля",
      posterTwoLink: "Типографическая афиша 02",
      profileLink: "Слушать / узнать",
      posterAlt:
        "Афиша фестиваля «Что-то почувствовать», 16 августа 2026 года в баре «Хват», Самара",
    },
    en: {
      kicker: "The concert exists. We checked.",
      title: "FEEL SOMETHING.",
      date: "16 August 2026",
      doorsLabel: "Doors",
      venueLabel: "Venue",
      setLabel: "C’mon, Bollo!",
      lineupTitle: "FIVE BANDS. ONE SUNDAY.",
      lineupIntro:
        "Power pop, alternative, emo, hardcore and post-rock. We open the show, so arriving late would be extremely 2011.",
      eventLink: "Festival page",
      posterTwoLink: "Typographic poster 02",
      profileLink: "Listen / discover",
      posterAlt:
        "Poster for the Feel Something festival on 16 August 2026 at Hvat bar in Samara",
    },
  } satisfies Record<FestivalLanguage, Record<string, string>>,
  lineup: [
    {
      name: "C’MON, BOLLO!",
      setTime: "18:30",
      endTime: "19:00",
      profileUrl: "#musica",
      description: {
        it: "Power-pop di Samara. Quindici anni di pausa, trenta minuti per recuperare.",
        ru: "Самарский пауэр-поп. Пятнадцать лет перерыва, тридцать минут на всё остальное.",
        en: "Samara power pop. Fifteen years off, thirty minutes to make up for it.",
      },
    },
    {
      name: "несейчас",
      setTime: "19:10",
      endTime: "19:50",
      profileUrl:
        "https://music.apple.com/ru/artist/%D0%BD%D0%B5%D1%81%D0%B5%D0%B9%D1%87%D0%B0%D1%81/1610354805",
      description: {
        it: "Alternative: l’album 17* e singoli in cui il mattino arriva lentamente.",
        ru: "Альтернатива: альбом «17*» и песни, в которых утро наступает медленно.",
        en: "Alternative music: the album 17* and songs where morning arrives slowly.",
      },
    },
    {
      name: "Марина, я умираю!",
      setTime: "20:00",
      endTime: "20:40",
      profileUrl:
        "https://music.apple.com/ru/artist/%D0%BC%D0%B0%D1%80%D0%B8%D0%BD%D0%B0-%D1%8F-%D1%83%D0%BC%D0%B8%D1%80%D0%B0%D1%8E/1668107116",
      description: {
        it: "Emo e post-hardcore da Mosca: Особые замечания e una serie di singoli taglienti.",
        ru: "Московские эмо и пост-хардкор: «Особые замечания» и серия острых синглов.",
        en: "Moscow emo and post-hardcore: Особые замечания and a run of sharp singles.",
      },
    },
    {
      name: "ВИНОВАТЫ БУДНИ",
      setTime: "20:50",
      endTime: "21:30",
      profileUrl: "https://vbchaotic.bandcamp.com/",
      description: {
        it: "Chaotic hardcore e hardcore punk di Samara. Otto uscite, nessun giorno facile.",
        ru: "Самарский chaotic hardcore и hardcore punk. Восемь релизов, ни одного лёгкого будня.",
        en: "Samara chaotic hardcore and hardcore punk. Eight releases, no easy weekdays.",
      },
    },
    {
      name: "iknownothing",
      setTime: "21:40",
      endTime: "22:20",
      profileUrl: "https://iknownothing-official.orgs.biz/",
      description: {
        it: "Post-rock di Samara: paesaggi sonori, Disconnected Seasons e un’orchestra di undici persone.",
        ru: "Самарский пост-рок: саундскейпы, «Disconnected Seasons» и оркестр из одиннадцати человек.",
        en: "Samara post-rock: soundscapes, Disconnected Seasons and an eleven-person orchestra.",
      },
    },
  ] satisfies readonly FestivalBand[],
} as const;
