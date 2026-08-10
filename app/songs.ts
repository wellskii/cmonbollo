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
    en: string;
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
    confidence: "high",
    status: "confirmed",
    motif: "PENCIL BOX / BIKE / BRIDGE",
    visualCue: {
      it: "Astuccio graffiato, bicicletta e ponte",
      ru: "Исцарапанный пенал, велосипед и мост",
      en: "Scratched pencil box, bicycle and bridge",
    },
    sections: [
      {
        label: "Verse 1",
        en: [
          "Scratch our name on your pencil box, kid",
          "We’re all the same, we just won’t accept it",
          "Slavishly adores, we wanna be slavishly, slavishly",
          "You’re riding a bike, you’re looking to being brave",
          "But then you fall off the bridge",
          "Another stupid mistake",
          "Am I slavishly adored?",
          "I wanna be slavishly, slavishly",
        ],
        ru: [
          "Нацарапай наше имя на своём пенале, малыш",
          "Мы все одинаковые, просто не хотим это принимать",
          "Рабски обожает — мы хотим быть рабски преданными, рабски преданными",
          "Ты едешь на велосипеде и пытаешься быть смелым",
          "Но потом падаешь с моста",
          "Ещё одна глупая ошибка",
          "Меня рабски обожают?",
          "Я хочу быть рабски преданным, рабски преданным",
        ],
      },
      {
        label: "Chorus",
        en: [
          "Say it for us, we are the common bollock",
          "Sing it for us, we’re just common bollocks",
          "And everything that you saw before us",
          "Nothing more than the common bollocks",
          "And everything that you heard before us",
          "Nothing more than the common bollocks",
        ],
        ru: [
          "Скажи это за нас — мы обычная чепуха",
          "Спой это для нас — мы просто обычная чепуха",
          "И всё, что ты видел до нас,",
          "Не более чем обычная чепуха",
          "И всё, что ты слышал до нас,",
          "Не более чем обычная чепуха",
        ],
      },
      {
        label: "Verse 2",
        en: [
          "Scratch our name on your pencil box, kid",
          "We’re all the same, we just won’t accept it",
          "Slavishly adores, we wanna be slavishly, slavishly",
          "You’re riding a bike, you’re looking to being brave",
          "But then you fall off the bridge",
          "Another stupid mistake",
          "Am I slavishly adored?",
          "I wanna be slavishly, slavishly",
        ],
        ru: [
          "Нацарапай наше имя на своём пенале, малыш",
          "Мы все одинаковые, просто не хотим это принимать",
          "Рабски обожает — мы хотим быть рабски преданными, рабски преданными",
          "Ты едешь на велосипеде и пытаешься быть смелым",
          "Но потом падаешь с моста",
          "Ещё одна глупая ошибка",
          "Меня рабски обожают?",
          "Я хочу быть рабски преданным, рабски преданным",
        ],
      },
      {
        label: "Chorus / Outro",
        en: [
          "Say it for us, we are the common bollock",
          "Sing it for us, we’re just common bollocks",
          "And everything that you saw before us",
          "Nothing more than the common bollocks",
          "And everything that you heard before us",
          "Nothing more than the common bollocks",
        ],
        ru: [
          "Скажи это за нас — мы обычная чепуха",
          "Спой это для нас — мы просто обычная чепуха",
          "И всё, что ты видел до нас,",
          "Не более чем обычная чепуха",
          "И всё, что ты слышал до нас,",
          "Не более чем обычная чепуха",
        ],
      },
    ],
  },
  {
    slug: "bum-bum",
    title: "Bum Bum",
    number: "02",
    duration: "3:29",
    audioSrc: "/audio/bum-bum.mp3",
    confidence: "high",
    status: "confirmed",
    motif: "BOMB / PARTY / KENSINGTON",
    visualCue: {
      it: "Bomba, festa finita e Kensington High Street",
      ru: "Бомба, закончившаяся вечеринка и Кенсингтон-Хай-стрит",
      en: "Bomb, ruined party and Kensington High Street",
    },
    sections: [
      {
        label: "Verse 1",
        en: [
          "You are a bomb but instead of the bum-bum",
          "You bring your doom into everything fun",
          "You turn it on, than you’re living it undone",
          "We start a party after you’re gone",
          "You put your backchat into the winegun",
          "We start dancing on High Street vibe",
          "You turn it on, than you’re living it undone",
          "We start a party after you’re gone",
        ],
        ru: [
          "Ты — бомба, но вместо этого самого «бум-бум»",
          "Ты приносишь гибель во всё весёлое",
          "Ты включаешь это, а потом оставляешь незаконченным",
          "Мы начинаем вечеринку после твоего ухода",
          "Ты заряжаешь свой бэкчат в вайнган",
          "Мы начинаем танцевать под вайб Хай-стрит",
          "Ты включаешь это, а потом оставляешь незаконченным",
          "Мы начинаем вечеринку после твоего ухода",
        ],
      },
      {
        label: "Pre-chorus",
        en: [
          "Hey, hey, no way! It’s been a year of the cowards",
          "Hey, hey, wrong way — instead of bleeding, let’s leave it, it’s so done",
        ],
        ru: [
          "Эй, эй, ни за что! Это был год трусов",
          "Эй, эй, не туда — вместо крови давай оставим это, всё уже кончено",
        ],
      },
      {
        label: "Chorus",
        en: [
          "I’d rather deal with a bum-bum tonight",
          "Oh, don’t bother leading up, I’ll get bounced tonight, tonight, yeah",
          "Oh, I’d rather deal with a bum-bum tonight",
          "Oh, let’s make a deal with a bum-bum",
          "Bum-bum-bum-bum, ba-ba-ba-bam",
        ],
        ru: [
          "Сегодня я лучше разберусь с этим «бум-бум»",
          "О, не утруждайся вести меня — сегодня меня вышвырнут, сегодня, да",
          "О, сегодня я лучше разберусь с этим «бум-бум»",
          "О, давай заключим сделку с этим «бум-бум»",
          "Бум-бум-бум-бум, ба-ба-ба-бам",
        ],
      },
      {
        label: "Verse 2",
        en: [
          "You put your backchat into the wineguns",
          "Stuck on Kensington High Street vibes",
          "You’re such a bummer to take to the school dance",
          "And they make it harder to describe",
          "You are a bomb but instead of the bum-bum",
          "You bring your doom into everything fun",
          "You turn it on, than you’re living it undone",
          "We start a party after you’re gone",
        ],
        ru: [
          "Ты заряжаешь свой бэкчат в вайнганы",
          "Застрял в вайбе Кенсингтон-Хай-стрит",
          "С тобой такой облом идти на школьные танцы",
          "И от этого всё ещё труднее описать",
          "Ты — бомба, но вместо этого самого «бум-бум»",
          "Ты приносишь гибель во всё весёлое",
          "Ты включаешь это, а потом оставляешь незаконченным",
          "Мы начинаем вечеринку после твоего ухода",
        ],
      },
      {
        label: "Pre-chorus / Chorus",
        en: [
          "Hey, hey, no way! It’s been a year of the cowards",
          "Hey, hey, wrong way — instead of bleeding, let’s leave it, it’s so done",
          "I’d rather deal with a bum-bum tonight",
          "Oh, don’t bother leading up, I’ll get bounced tonight, tonight, yeah",
          "Oh, I’d rather deal with a bum-bum tonight",
          "Oh, let’s make a deal with a bum-bum",
          "Bum-bum-bum-bum, ba-ba-ba-bam",
        ],
        ru: [
          "Эй, эй, ни за что! Это был год трусов",
          "Эй, эй, не туда — вместо крови давай оставим это, всё уже кончено",
          "Сегодня я лучше разберусь с этим «бум-бум»",
          "О, не утруждайся вести меня — сегодня меня вышвырнут, сегодня, да",
          "О, сегодня я лучше разберусь с этим «бум-бум»",
          "О, давай заключим сделку с этим «бум-бум»",
          "Бум-бум-бум-бум, ба-ба-ба-бам",
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
    confidence: "high",
    status: "confirmed",
    motif: "BLOND / LOCAL PAPER / FISH FINGER",
    visualCue: {
      it: "Biondo, giornale locale, Zorro e fish finger",
      ru: "Блондин, местная газета, Зорро и рыбная палочка",
      en: "Blond dandy, local paper, Zorro and fish finger",
    },
    sections: [
      {
        label: "Verse 1",
        en: [
          "I’m so numb",
          "I’m too hot to respond",
          "What a sucker, you turned me to blond",
          "Higher, I’ll capture your eyes",
          "You’re my ardor, too hard to despise",
        ],
        ru: [
          "Я совсем онемел",
          "Я слишком горяч, чтобы отвечать",
          "Вот я дурак — из-за тебя я стал блондином",
          "Выше — я поймаю твой взгляд",
          "Ты моя страсть, тебя слишком трудно презирать",
        ],
      },
      {
        label: "Chorus",
        en: [
          "Everybody’s copying you",
          "What is why you’re struggling too",
          "Everybody’s copying you",
          "That is what I’ll do",
          "Ooooooh, ooooooh",
        ],
        ru: [
          "Все копируют тебя",
          "Вот почему тебе тоже нелегко",
          "Все копируют тебя",
          "Вот что я сделаю",
          "О-о-о-о, о-о-о-о",
        ],
      },
      {
        label: "Verse 2",
        en: [
          "Beat it, buddy, call the local paper first",
          "It ain’t funny? I’ve got no remorse",
          "Zip it, Zorro! Wind it out like bazinga",
          "Zip it, Zorro! You can all suck my fish finger",
        ],
        ru: [
          "Отвали, приятель, сначала позвони в местную газету",
          "Не смешно? А мне совсем не жаль",
          "Закройся, Зорро! Выкрути это, как «базинга»",
          "Закройся, Зорро! Можете все пососать мою рыбную палочку",
        ],
      },
      {
        label: "Chorus",
        en: [
          "Everybody’s copying you",
          "What is why you’re struggling too",
          "Everybody’s copying you",
          "That is what I’ll do",
          "Ooooooh, ooooooh",
        ],
        ru: [
          "Все копируют тебя",
          "Вот почему тебе тоже нелегко",
          "Все копируют тебя",
          "Вот что я сделаю",
          "О-о-о-о, о-о-о-о",
        ],
      },
      {
        label: "Verse 3",
        en: [
          "Harder! Too hot to respond",
          "What a sucker, you turned me to blond",
          "My eye candy, showing off like a cupcake",
          "Modern dandy but much more electric",
        ],
        ru: [
          "Сильнее! Слишком горяч, чтобы отвечать",
          "Вот я дурак — из-за тебя я стал блондином",
          "Моя услада для глаз красуется, как кекс",
          "Современный денди, но куда электричнее",
        ],
      },
      {
        label: "Chorus / Outro",
        en: [
          "Everybody’s copying you",
          "What is why you’re struggling too",
          "Everybody’s copying you",
          "That is what I’ll do",
          "Ooooooh, ooooooh",
        ],
        ru: [
          "Все копируют тебя",
          "Вот почему тебе тоже нелегко",
          "Все копируют тебя",
          "Вот что я сделаю",
          "О-о-о-о, о-о-о-о",
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
    confidence: "high",
    status: "confirmed",
    motif: "HOUSE / MOUTH / TESTIFY",
    visualCue: {
      it: "Casa aperta, bocca, pioggia e occhi",
      ru: "Открытый дом, рот, дождь и глаза",
      en: "Open house, mouth, rain and mesmerising eyes",
    },
    sections: [
      {
        label: "Verse 1",
        en: [
          "Airy, heavenly",
          "My blessings rain down on me",
          "My palacing comes naturally",
          "My mesmerising runs free",
        ],
        ru: [
          "Воздушно, небесно",
          "Мои благословения проливаются на меня дождём",
          "Моя дворцовость приходит сама собой",
          "Моё очарование гуляет на свободе",
        ],
      },
      {
        label: "Refrain ×2",
        en: [
          "And I’ll come into your house, spit into your mouth",
          "Dare to try",
          "My mesmeriser lies right to your eyes",
          "Testify",
        ],
        ru: [
          "И я войду в твой дом, плюну тебе в рот",
          "Только попробуй",
          "Мой гипнотизёр врёт прямо тебе в глаза",
          "Свидетельствуй",
        ],
      },
      {
        label: "Verse 2",
        en: [
          "Airy, heavenly",
          "My blessings rain down on me",
          "It’s devastating, comes painfully",
          "My mesmerising runs free",
        ],
        ru: [
          "Воздушно, небесно",
          "Мои благословения проливаются на меня дождём",
          "Это опустошает и приходит через боль",
          "Моё очарование гуляет на свободе",
        ],
      },
      {
        label: "Refrain ×2 / Outro",
        en: [
          "And I’ll come into your house, spit into your mouth",
          "Dare to try",
          "My mesmeriser lies right to your eyes",
          "Testify",
        ],
        ru: [
          "И я войду в твой дом, плюну тебе в рот",
          "Только попробуй",
          "Мой гипнотизёр врёт прямо тебе в глаза",
          "Свидетельствуй",
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
    confidence: "high",
    status: "confirmed",
    motif: "POCKET / SODA / PICKLES",
    visualCue: {
      it: "Camden Locket, tasca, soda e sottaceti",
      ru: "Камден-Локет, карман, газировка и солёные огурцы",
      en: "Camden Locket, pocket, soda and pickles",
    },
    sections: [
      {
        label: "Verse 1",
        en: [
          "I love by myself down to Camden Locket",
          "Oh, now what do I say? I share all with you",
          "We got all we need right here in a pocket",
          "I will give you a soda and pickles too",
        ],
        ru: [
          "Я люблю в одиночку идти к Камден-Локет",
          "О, что мне теперь сказать? Я делюсь с тобой всем",
          "Всё, что нам нужно, лежит прямо здесь, в кармане",
          "Я дам тебе газировку и солёные огурцы",
        ],
      },
      {
        label: "Chorus ×2",
        en: [
          "I’ve never left shortage, I’m crying away",
          "I’ve never left shortage, let us, let us, let us stay",
        ],
        ru: [
          "Я никогда не оставлял нехватки и теперь выплакиваю всё",
          "Я никогда не оставлял нехватки — позволь нам, позволь нам остаться",
        ],
      },
      {
        label: "Verse 2",
        en: [
          "We live soul in soul down to Camden Locket",
          "Oh, now what do I say? All my soul is you",
          "We got all we need, are you coming for it?",
          "After all, I hope you know what to do",
        ],
        ru: [
          "Мы живём душа в душу у Камден-Локет",
          "О, что мне теперь сказать? Вся моя душа — это ты",
          "У нас есть всё нужное — ты идёшь за этим?",
          "В конце концов, надеюсь, ты знаешь, что делать",
        ],
      },
      {
        label: "Chorus / Outro",
        en: [
          "I’ve never left shortage, I’m crying away",
          "I’ve never left shortage, let us, let us, let us stay",
        ],
        ru: [
          "Я никогда не оставлял нехватки и теперь выплакиваю всё",
          "Я никогда не оставлял нехватки — позволь нам, позволь нам остаться",
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
    confidence: "high",
    status: "confirmed",
    motif: "BIN BAG / WALL / ROLLING HEAD",
    visualCue: {
      it: "Sacco nero, muro storto e testa che rotola",
      ru: "Чёрный мешок, кривая стена и катящаяся голова",
      en: "Bin bag, crooked wall and rolling head",
    },
    sections: [
      {
        label: "Opening chorus",
        en: [
          "Is it a torture",
          "To come and watch you?",
          "Is it a torture?",
          "I’ll watch you leaving with another one",
          "Leaving with another one",
          "Leaving with another one",
          "Oh, oh, oh, oh, no",
        ],
        ru: [
          "Разве это пытка —",
          "Прийти и смотреть на тебя?",
          "Разве это пытка?",
          "Я буду смотреть, как ты уходишь с кем-то другим",
          "Уходишь с кем-то другим",
          "Уходишь с кем-то другим",
          "О, о, о, о, нет",
        ],
      },
      {
        label: "Verse 1",
        en: [
          "Don’t you turn your back",
          "You’re one more hole to call a man",
          "I said, why don’t you put it in a bin bag?",
          "Simply drop it where you stand",
        ],
        ru: [
          "Не поворачивайся спиной",
          "Ты ещё одна дыра, которую называют мужчиной",
          "Я сказал: почему бы тебе не сунуть это в мусорный мешок?",
          "Просто брось там, где стоишь",
        ],
      },
      {
        label: "Chorus",
        en: [
          "Cuz it’s a torture",
          "To come and watch you",
          "Cuz it’s a torture",
          "Now watch me leaving with another one",
          "Leaving with another one",
          "Leaving with another one",
          "Oh, oh, oh, oh, no",
        ],
        ru: [
          "Потому что это пытка —",
          "Прийти и смотреть на тебя",
          "Потому что это пытка",
          "Теперь смотри, как я ухожу с кем-то другим",
          "Ухожу с кем-то другим",
          "Ухожу с кем-то другим",
          "О, о, о, о, нет",
        ],
      },
      {
        label: "Verse 2",
        en: [
          "Round ones never fold",
          "They’re banging heads against the walls",
          "I said, the right one never falls",
          "Your stupid head now jumps and rolls",
        ],
        ru: [
          "Круглые никогда не сгибаются",
          "Они бьются головами о стены",
          "Я сказал: правильный никогда не падает",
          "Твоя дурацкая голова теперь скачет и катится",
        ],
      },
      {
        label: "Chorus / Outro",
        en: [
          "Cuz it’s a torture",
          "To come and watch you",
          "Cuz it’s a torture",
          "Now watch me leaving with another one",
          "Leaving with another one",
          "Leaving with another one",
          "Oh, oh, oh, oh, no",
        ],
        ru: [
          "Потому что это пытка —",
          "Прийти и смотреть на тебя",
          "Потому что это пытка",
          "Теперь смотри, как я ухожу с кем-то другим",
          "Ухожу с кем-то другим",
          "Ухожу с кем-то другим",
          "О, о, о, о, нет",
        ],
      },
    ],
  },
];
