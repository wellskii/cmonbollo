export type LyricSection = {
  label: string;
  en: readonly string[];
  ru: readonly string[];
};

export type Song = {
  slug: string;
  title: string;
  number: string;
  duration: string;
  audioSrc: string;
  confidence: "high" | "medium" | "low";
  status: "draft" | "confirmed";
  motif: string;
  visualCue: {
    it: string;
    ru: string;
  };
  sections: readonly LyricSection[];
};

export const songs: readonly Song[] = [
  {
    slug: "common-bollocks",
    title: "Common Bollocks",
    number: "01",
    duration: "2:58",
    audioSrc: "/audio/common-bollocks.mp3",
    confidence: "medium",
    status: "draft",
    motif: "PENCIL BOX / BIKE / COMMON NOISE",
    visualCue: {
      it: "Astuccio, bicicletta e quaderno a righe",
      ru: "Пенал, велосипед и тетрадь в линейку",
    },
    sections: [
      {
        label: "Verse 1",
        en: [
          "Write your name on your pencil box",
          "It’s all the same and I’m just gonna get with it",
          "I slavishly adore",
          "I wanna be slavishly, slavishly",
          "Ride your bike, you’re looking for being brave",
          "And then you jump in the beach [unclear]",
          "And then there’s a foolish mistake",
          "I slavishly adore",
          "I wanna be slavishly, slavishly",
        ],
        ru: [
          "Напиши своё имя на пенале",
          "Всё одно и то же, и я просто собираюсь с этим смириться",
          "Я рабски обожаю",
          "Я хочу быть рабским, рабским",
          "Езжай на велосипеде — ты ищешь способ быть смелым",
          "А потом прыгаешь на пляже [неразборчиво]",
          "А потом — эта глупая ошибка",
          "Я рабски обожаю",
          "Я хочу быть рабским, рабским",
        ],
      },
      {
        label: "Chorus",
        en: [
          "Sing it for us, we are the common bollocks",
          "Sing it for us, we are the common bollocks",
          "And everything that you had for us",
          "Nothing more than common bollocks",
          "And everything that you sing for us",
          "Nothing more than common bollocks",
        ],
        ru: [
          "Спой это для нас — мы обычная чепуха",
          "Спой это для нас — мы обычная чепуха",
          "И всё, что у тебя было для нас,",
          "Не больше чем обычная чепуха",
          "И всё, что ты поёшь для нас,",
          "Не больше чем обычная чепуха",
        ],
      },
      {
        label: "Verse 2 / Outro",
        en: [
          "Write my name on your pencil box",
          "It’s all the same and I’m just gonna get with it",
          "I slavishly adore",
          "I wanna be slavishly, slavishly",
          "[Verse and chorus repeat]",
          "Sing it for us — we are the common bollocks",
        ],
        ru: [
          "Напиши моё имя на своём пенале",
          "Всё одно и то же, и я просто собираюсь с этим смириться",
          "Я рабски обожаю",
          "Я хочу быть рабским, рабским",
          "[Куплет и припев повторяются]",
          "Спой это для нас — мы обычная чепуха",
        ],
      },
    ],
  },
  {
    slug: "bum-bum",
    title: "Bum-bum",
    number: "02",
    duration: "3:29",
    audioSrc: "/audio/bum-bum.mp3",
    confidence: "low",
    status: "draft",
    motif: "RED BUTTON / PARTY AFTER YOU’RE GONE",
    visualCue: {
      it: "Pulsante rosso, nastro d’allarme, festa dopo",
      ru: "Красная кнопка, аварийная лента, вечеринка после",
    },
    sections: [
      {
        label: "Verse",
        en: [
          "You bought a bomb instead of a bum-bum",
          "You bring doom into everything fun",
          "You turn it on, then you leave it and stand down [unclear]",
          "We start a party after you’re gone",
          "You brought back [unclear] into the wind-downs",
          "Stuck and dancing to [unclear]",
        ],
        ru: [
          "Ты купил бомбу вместо «бум-бум»",
          "Ты приносишь погибель во всё весёлое",
          "Ты включаешь это, потом уходишь и сдаёшься [неразборчиво]",
          "Мы начинаем вечеринку после твоего ухода",
          "Ты вернул [неразборчиво] в самое затишье",
          "Застрял и танцуешь под [неразборчиво]",
        ],
      },
      {
        label: "Pre-chorus",
        en: [
          "Hey, hey — whoa, wait",
          "It’s been a year of the cowards [unclear]",
          "Hey, hey — no way",
          "Until your fear [unclear] the night",
        ],
        ru: [
          "Эй, эй — ого, постой",
          "Это был год трусов [неразборчиво]",
          "Эй, эй — ни за что",
          "Пока твой страх [неразборчиво] ночь",
        ],
      },
      {
        label: "Chorus / Outro",
        en: [
          "God, I’d rather deal with the bomb tonight",
          "Hold on by the wheel and [unclear]",
          "To die, to die, yeah",
          "Oh, I’d rather deal with the bomb tonight",
          "Oh, let’s make a deal with the…",
          "Bum-bum-bum-bum-bum — c’mon!",
        ],
        ru: [
          "Боже, сегодня я лучше разберусь с бомбой",
          "Держись за руль и [неразборчиво]",
          "Умереть, умереть, да",
          "О, сегодня я лучше разберусь с бомбой",
          "О, давай договоримся с…",
          "Бум-бум-бум-бум-бум — давай!",
        ],
      },
    ],
  },
  {
    slug: "copying-you",
    title: "Copying You",
    number: "03",
    duration: "3:00",
    audioSrc: "/audio/copying-you.mp3",
    confidence: "low",
    status: "draft",
    motif: "COPY / COPY / COPY / YOU",
    visualCue: {
      it: "Carta carbone, doppia esposizione, timbro COPY",
      ru: "Копирка, двойная экспозиция, штамп COPY",
    },
    sections: [
      {
        label: "Verse 1",
        en: [
          "I’m an amateur, too hard to respond",
          "I’m a sucker, you don’t need to [unclear]",
          "I’ll stare into your eyes, you’re my honour [unclear]",
          "Too hard to despise",
        ],
        ru: [
          "Я любитель — слишком трудно ответить",
          "Я простак, тебе не нужно [неразборчиво]",
          "Я посмотрю тебе в глаза — ты моя честь [неразборчиво]",
          "Слишком трудно презирать",
        ],
      },
      {
        label: "Chorus",
        en: [
          "Everybody’s copying you",
          "That is what you’re trying to do",
          "Everybody’s copying you",
          "That is what you do for you",
        ],
        ru: [
          "Все копируют тебя",
          "Вот чего ты пытаешься добиться",
          "Все копируют тебя",
          "Вот что ты делаешь для себя",
        ],
      },
      {
        label: "Verse 2 / Outro",
        en: [
          "Zip it up, I’m enough to [unclear]",
          "Zip it up, you can also kiss my fingers [unclear]",
          "[Chorus repeats]",
          "Fine candy, showing off like an ice pick [unclear]",
          "Rotten candy — that’s much more electric",
          "[Chorus repeats]",
        ],
        ru: [
          "Застегнись, меня достаточно, чтобы [неразборчиво]",
          "Застегнись, можешь ещё поцеловать мои пальцы [неразборчиво]",
          "[Припев повторяется]",
          "Славная конфета, красуется словно ледоруб [неразборчиво]",
          "Испорченная конфета — это куда электричнее",
          "[Припев повторяется]",
        ],
      },
    ],
  },
  {
    slug: "airy",
    title: "Airy",
    number: "04",
    duration: "3:35",
    audioSrc: "/audio/airy.mp3",
    confidence: "low",
    status: "draft",
    motif: "RAIN / EYES / JUSTIFY",
    visualCue: {
      it: "Pioggia verticale, aria chiara, occhi chiusi",
      ru: "Вертикальный дождь, светлый воздух, закрытые глаза",
    },
    sections: [
      {
        label: "Verse",
        en: [
          "Heavenly, heavenly, my blessing",
          "Rains down on me",
          "My fallacy comes naturally",
          "My mesmerizing [unclear]",
          "Once free",
        ],
        ru: [
          "Небесное, небесное моё благословение",
          "Проливается на меня дождём",
          "Моё заблуждение приходит само собой",
          "Моё завораживающее [неразборчиво]",
          "Когда-то свободное",
        ],
      },
      {
        label: "Refrain",
        en: [
          "And I come into your house",
          "Bend into your mouth [unclear]",
          "Dead or dry, my mesmerizing eyes [unclear]",
          "Right through your eyes — justify",
          "I justify",
        ],
        ru: [
          "И я вхожу в твой дом",
          "Склоняюсь к твоим губам [неразборчиво]",
          "Мёртвые или сухие — мои завораживающие глаза [неразборчиво]",
          "Прямо сквозь твои глаза — оправдай",
          "Я оправдываю",
        ],
      },
      {
        label: "Verse 2 / Outro",
        en: [
          "Heavenly, heavenly, blessing rains down on me",
          "Its destiny comes painfully",
          "My [unclear] never-ending",
          "[Refrain repeats]",
          "Justify, I justify",
        ],
        ru: [
          "Небесное, небесное благословение проливается на меня",
          "Его судьба приходит болезненно",
          "Моё [неразборчиво] — бесконечно",
          "[Рефрен повторяется]",
          "Оправдай — я оправдываю",
        ],
      },
    ],
  },
  {
    slug: "camden",
    title: "Camden",
    number: "05",
    duration: "3:14",
    audioSrc: "/audio/camden.mp3",
    confidence: "medium",
    status: "draft",
    motif: "CAMDEN LOCK / ONE CUP / LET US STAY",
    visualCue: {
      it: "Biglietto londinese, mercato, Camden Lock",
      ru: "Лондонский билет, рынок, Camden Lock",
    },
    sections: [
      {
        label: "Verse 1",
        en: [
          "All by myself, down at Camden Lock",
          "Wanting what I say [unclear], I should roll with you",
          "We got all we need, a cup and a pocket",
          "After [unclear] and pickles too",
        ],
        ru: [
          "Совсем один, внизу у Camden Lock",
          "Желая того, что говорю [неразборчиво], я должен пойти с тобой",
          "У нас есть всё нужное: чашка и карман",
          "После [неразборчиво] и ещё солёных огурцов",
        ],
      },
      {
        label: "Chorus",
        en: [
          "I’ve never let you down, just crying away",
          "I’ve never let you down",
          "Let us, let us, let us stay",
        ],
        ru: [
          "Я никогда тебя не подводил — просто выплакивал всё",
          "Я никогда тебя не подводил",
          "Позволь нам, позволь нам остаться",
        ],
      },
      {
        label: "Verse 2 / Outro",
        en: [
          "[Restless soul], down at Camden Lock [unclear]",
          "Only what I say — all my soul is you [unclear]",
          "We got all we need, are you coming for it?",
          "After all, I hope you know what to do",
          "[Chorus repeats]",
          "Oh, let us stay",
        ],
        ru: [
          "[Беспокойная душа], внизу у Camden Lock [неразборчиво]",
          "Только то, что я говорю — вся моя душа это ты [неразборчиво]",
          "У нас есть всё нужное — ты идёшь за этим?",
          "В конце концов, надеюсь, ты знаешь, что делать",
          "[Припев повторяется]",
          "О, позволь нам остаться",
        ],
      },
    ],
  },
  {
    slug: "torture",
    title: "Torture",
    number: "06",
    duration: "3:00",
    audioSrc: "/audio/torture.mp3",
    confidence: "medium",
    status: "draft",
    motif: "WALL / ANOTHER ONE / NO!",
    visualCue: {
      it: "Muro storto, crepe nere, segnale NO",
      ru: "Кривая стена, чёрные трещины, знак NO",
    },
    sections: [
      {
        label: "Chorus",
        en: [
          "’Cause it’ll torture you",
          "How come it won’t shut up?",
          "’Cause it’ll torture you",
          "And now watch you living with another one",
          "Living with another one, living with another one",
        ],
        ru: [
          "Потому что это будет мучить тебя",
          "Почему оно никак не замолчит?",
          "Потому что это будет мучить тебя",
          "А теперь смотри: ты живёшь с кем-то другим",
          "Живёшь с кем-то другим, живёшь с кем-то другим",
        ],
      },
      {
        label: "Verse 1",
        en: [
          "Don’t you turn back",
          "It’s one more hope you learned to mask",
          "I said, don’t you turn back",
          "It’s one more hope you learned to mask",
          "I said, don’t you put it in a stand-back [unclear]",
          "Simply go back where you stand",
        ],
        ru: [
          "Не оборачивайся",
          "Это ещё одна надежда, которую ты научился скрывать",
          "Я сказал: не оборачивайся",
          "Это ещё одна надежда, которую ты научился скрывать",
          "Я сказал: не ставь это в отступление [неразборчиво]",
          "Просто вернись туда, где стоишь",
        ],
      },
      {
        label: "Verse 2 / Outro",
        en: [
          "Round one, never fold",
          "We make it hit against the wall",
          "I said, wrong one, never fooled",
          "Your life is hit against the wall",
          "[Chorus repeats]",
          "I’ll watch you, I’ll watch you",
          "No!",
        ],
        ru: [
          "Первый раунд — никогда не сдавайся",
          "Мы заставляем это удариться о стену",
          "Я сказал: не тот — и не был одурачен",
          "Твоя жизнь ударяется о стену",
          "[Припев повторяется]",
          "Я буду смотреть за тобой, буду смотреть",
          "Нет!",
        ],
      },
    ],
  },
];
