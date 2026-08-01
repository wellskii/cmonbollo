"use client";

import { useEffect, useState } from "react";
import { songs, type Song } from "./songs";

type Language = "it" | "ru";
type Theme = "archive" | "night" | "silly";

const copy = {
  it: {
    languageLabel: "Scegli la lingua",
    homeLabel: "C'mon, Bollo! — inizio",
    navConcert: "Concerto",
    navBollo: "Bollo",
    navStory: "Storia",
    navMerch: "Merch",
    heroKicker: "Samara · power-pop · reunion 2026",
    heroLine1: "SIAMO",
    heroLine2: "TORNATI.",
    heroNote:
      "Nel 2010 suonavamo a Samara. Nel 2026 ci riproviamo. La cantante ha davvero il passaporto italiano; gli altri fanno del loro meglio.",
    heroAlt: "La pecora simbolo dei C'mon, Bollo!",
    heroStamp: "ITALIANI*",
    heroCredit: "PECORA N. 01 / ANCORA SENZA SPIEGAZIONE",
    footnote1: "* Una persona del gruppo.",
    footnote2: "Il concerto, però, è davvero a Samara.",
    ticker: ["SAMARA", "2026", "REUNION", "DATA DA ANNUNCIARE"],
    concertLabel: "Annuncio concerto",
    concertIndex: "01 / IL RITORNO",
    concertEyebrow: "Concerto di reunion",
    concertLine1: "DI NUOVO.",
    concertLine2: "DAL VIVO.",
    when: "Quando",
    whenValue: "Autunno 2026",
    where: "Dove",
    whereValue: "Samara · da annunciare",
    status: "Stato",
    statusValue: "Prove in corso",
    notify: "Scrivimi quando c’è una data",
    manifestoLabel: "Manifesto del gruppo",
    manifestoLine1: "QUINDICI ANNI DI PAUSA.",
    manifestoLine2: "BASTA.",
    manifestoAccent: "SUONIAMO.",
    bolloIndex: "02 / IL VERO BOLLO",
    bolloEyebrow: "Gorilla. Musicista. Senza patente.",
    bolloTitle: "BOLLO NO DRIVE.",
    bolloLead: "Suona tutto. Guidare, invece, no.",
    bolloText:
      "Bollo viene da The Mighty Boosh. È il gorilla che perde la patente e ci ha dato il nome. La pecora non c’entra niente. Per questo è rimasta.",
    bolloAlt:
      "Ritratto a collage di Bollo, gorilla musicista con chitarra e bacchette",
    bolloDossier: "DOSSIER N. 01",
    species: "Specie",
    speciesValue: "Gorilla",
    role: "Ruolo",
    roleValue: "Tutti gli strumenti",
    license: "Patente",
    licenseValue: "Persa",
    storyIndex: "03 / COS’È SUCCESSO",
    storyEyebrow: "Samara · 2010–2026",
    storyTitle: "NON ERA MONTY PYTHON.",
    storyLead:
      "Il nome viene da The Mighty Boosh. Bollo perde la patente. Noi perdiamo quindici anni.",
    storyP1:
      "Nel 2010 suoniamo allo Snickers Urbania di Samara. Poi registriamo canzoni, apriamo un sito in Flash e ci mettiamo una pecora senza spiegazioni. Nel 2011 esce The Far, The Farther and The Beyond. Poi la band si ferma e la vita continua.",
    storyP2:
      "Ora ci ritroviamo per un concerto. La cantante è davvero cittadina italiana, quindi per una sera saremo una band italiana. Tecnicamente basta.",
    quote: "“C’mon, Bollo, get your monkey anus at the steering wheel.”",
    quoteBy: "— Vince Noir, motivo ufficiale del nome",
    oldSiteAlt:
      "Il sito originale dei C'mon, Bollo! del 2011 con una pecora",
    oldSiteCaption: "cmonbollo.com · 07.02.2011",
    bandPhotoAlt: "Foto d'archivio dei C'mon, Bollo! nel 2010",
    bandPhotoCaption: "“Suonano come appaiono” · Samara, 2010",
    merchIndex: "04 / MERCH",
    merchEyebrow: "Piccola tiratura per il concerto",
    merchTitle: "MAGLIETTE. BORSE. PECORE.",
    merchIntro:
      "Prepariamo qualcosa per il concerto. Quello che riusciamo a stampare, esisterà.",
    shirtName: "Maglietta «Di nuovo insieme»",
    shirtDesc: "Cotone nero · stampa sporca avorio/rosso",
    toteName: "Borsa «Bollo no drive»",
    toteDesc: "Tela naturale · Bollo ancora senza patente",
    posterName: "Poster «Samara · 2026»",
    posterDesc: "Poster A2 · Samara 2026",
    soon: "PRESTO",
    contactIndex: "05 / CONTATTO",
    contactEyebrow: "Concerti, stampa, vecchi demo e correzioni ai testi",
    contactTitle: "SCRIVICI.",
    footerClaim: "C’MON, BOLLO! · SAMARA · DI NUOVO INSIEME",
    oldSiteLink: "Sito 2011",
    articleLink: "Articolo 2010",
  },
  ru: {
    languageLabel: "Выберите язык",
    homeLabel: "C'mon, Bollo! — начало",
    navConcert: "Концерт",
    navBollo: "Болло",
    navStory: "История",
    navMerch: "Мерч",
    heroKicker: "Самара · пауэр-поп · реюнион 2026",
    heroLine1: "МЫ",
    heroLine2: "ВЕРНУЛИСЬ.",
    heroNote:
      "В 2010-м мы играли в Самаре. В 2026-м решили повторить. У вокалистки правда итальянский паспорт. Остальные просто хорошо держатся.",
    heroAlt: "Овца — символ группы C'mon, Bollo!",
    heroStamp: "ИТАЛЬЯНЦЫ*",
    heroCredit: "ОВЦА № 01 / ВСЁ ЕЩЁ БЕЗ ОБЪЯСНЕНИЙ",
    footnote1: "* Один человек из группы.",
    footnote2: "Концерт, впрочем, правда в Самаре.",
    ticker: ["САМАРА", "2026", "РЕЮНИОН", "ДАТА СКОРО"],
    concertLabel: "Анонс концерта",
    concertIndex: "01 / ВОЗВРАЩЕНИЕ",
    concertEyebrow: "Реюнион-концерт",
    concertLine1: "СНОВА.",
    concertLine2: "ВЖИВУЮ.",
    when: "Когда",
    whenValue: "Осень 2026",
    where: "Где",
    whereValue: "Самара · скоро объявим",
    status: "Статус",
    statusValue: "Репетируем",
    notify: "Напишите, когда будет дата",
    manifestoLabel: "Манифест группы",
    manifestoLine1: "ПЯТНАДЦАТЬ ЛЕТ ПЕРЕРЫВА.",
    manifestoLine2: "ХВАТИТ.",
    manifestoAccent: "ИГРАЕМ.",
    bolloIndex: "02 / НАСТОЯЩИЙ БОЛЛО",
    bolloEyebrow: "Горилла. Музыкант. Без прав.",
    bolloTitle: "BOLLO NO DRIVE.",
    bolloLead: "Играет на всём. За руль нельзя.",
    bolloText:
      "Болло — горилла из The Mighty Boosh, потерявшая права. От него у нас название. Овца тут вообще ни при чём, поэтому мы её оставили.",
    bolloAlt:
      "Коллажный портрет Болло — гориллы-музыканта с гитарой и барабанными палочками",
    bolloDossier: "ДОСЬЕ № 01",
    species: "Вид",
    speciesValue: "Горилла",
    role: "Роль",
    roleValue: "Все инструменты",
    license: "Права",
    licenseValue: "Потеряны",
    storyIndex: "03 / ЧТО ЭТО БЫЛО",
    storyEyebrow: "Самара · 2010–2026",
    storyTitle: "ЭТО НЕ МОНТИ ПАЙТОН.",
    storyLead:
      "Название пришло из The Mighty Boosh. Болло теряет права. Мы теряем пятнадцать лет.",
    storyP1:
      "В 2010 году мы играем на Snickers Urbania в Самаре. Потом записываем песни, делаем сайт на Flash и без объяснений помещаем туда овцу. В 2011-м выходит The Far, The Farther and The Beyond. Потом группа останавливается, а жизнь продолжается.",
    storyP2:
      "Теперь собираемся ради одного концерта. Вокалистка действительно гражданка Италии, поэтому на один вечер мы итальянская группа. Формально всё сходится.",
    quote: "“C’mon, Bollo, get your monkey anus at the steering wheel.”",
    quoteBy: "— Винс Нуар, официальная причина названия",
    oldSiteAlt:
      "Оригинальный сайт C'mon, Bollo! 2011 года с овцой",
    oldSiteCaption: "cmonbollo.com · 07.02.2011",
    bandPhotoAlt: "Архивная фотография C'mon, Bollo! 2010 года",
    bandPhotoCaption: "«Звучат так же, как выглядят» · Самара, 2010",
    merchIndex: "04 / МЕРЧ",
    merchEyebrow: "Небольшой тираж к концерту",
    merchTitle: "ФУТБОЛКИ. СУМКИ. ОВЦА.",
    merchIntro:
      "Сделаем несколько вещей к концерту. Что успеем напечатать — то и будет.",
    shirtName: "Футболка «Снова вместе»",
    shirtDesc: "Чёрный хлопок · белая и красная печать",
    toteName: "Сумка «Bollo no drive»",
    toteDesc: "Натуральный холст · Болло всё ещё без прав",
    posterName: "Постер «Самара · 2026»",
    posterDesc: "Постер A2 · Самара 2026",
    soon: "СКОРО",
    contactIndex: "05 / КОНТАКТ",
    contactEyebrow: "Концерты, пресса, старые демо и поправки к текстам",
    contactTitle: "ПИШИТЕ.",
    footerClaim: "C’MON, BOLLO! · САМАРА · СНОВА ВМЕСТЕ",
    oldSiteLink: "Сайт 2011",
    articleLink: "Статья 2010",
  },
} as const;

const Arrow = () => <span aria-hidden="true">↗</span>;

const themeCopy = {
  it: {
    label: "Stile del sito",
    archive: "Archivio",
    night: "Notte",
    silly: "Assurdo",
  },
  ru: {
    label: "Стиль сайта",
    archive: "Архив",
    night: "Ночь",
    silly: "Дичь",
  },
} as const;

const musicCopy = {
  it: {
    nav: "Musica",
    index: "04 / DAL NASTRO",
    eyebrow: "Sei canzoni · registrazioni originali",
    title: "SEI CANZONI. NESSUNA SCUSA.",
    intro:
      "Questi sono i nostri vecchi MP3. I testi inglesi sono stati ricostruiti a orecchio: dove non siamo sicuri, lo diciamo.",
    draftNote:
      "Una macchina ha ascoltato le canzoni due volte. Non ha capito tutto. Onestamente, neanche noi.",
    lyrics: "Apri testo e traduzione",
    english: "English · draft lyrics",
    russian: "Русский · перевод",
    draft: "BOZZA",
    confidence: {
      high: "chiarezza alta",
      medium: "da verificare",
      low: "molte parole dubbie",
    },
  },
  ru: {
    nav: "Песни",
    index: "04 / С ПЛЁНКИ",
    eyebrow: "Шесть песен · оригинальные записи",
    title: "ШЕСТЬ ПЕСЕН. НИКАКИХ ОПРАВДАНИЙ.",
    intro:
      "Это наши старые MP3. Английские тексты сняты на слух: где не уверены, так и написано.",
    draftNote:
      "Машина прослушала песни два раза. Поняла не всё. Мы, если честно, тоже.",
    lyrics: "Открыть текст и перевод",
    english: "English · черновой текст",
    russian: "Русский · перевод",
    draft: "ЧЕРНОВИК",
    confidence: {
      high: "высокая ясность",
      medium: "нужна проверка",
      low: "много сомнений",
    },
  },
} as const;

type MusicCopy = (typeof musicCopy)[Language];

function TickerLine({ items }: { items: readonly string[] }) {
  return (
    <span className="ticker-line">
      {items.map((item) => (
        <span className="ticker-item" key={item}>
          <b>{item}</b>
          <i aria-hidden="true">●</i>
        </span>
      ))}
    </span>
  );
}

function SongCard({
  song,
  labels,
  language,
}: {
  song: Song;
  labels: MusicCopy;
  language: Language;
}) {
  return (
    <article className={`song-card song-${song.slug}`}>
      <header>
        <span className="track-number">{song.number}</span>
        <div>
          <p>{song.visualCue[language]}</p>
          <h3>{song.title}</h3>
        </div>
        <span className="track-duration">{song.duration}</span>
      </header>

      <div className="song-motif" aria-hidden="true">
        {song.motif}
      </div>

      <audio controls preload="metadata" src={song.audioSrc}>
        Your browser does not support the audio element.
      </audio>

      <div className="transcript-status">
        <span>{labels.draft}</span>
        <span>{labels.confidence[song.confidence]}</span>
      </div>

      <details>
        <summary>{labels.lyrics}</summary>
        <div className="lyrics-grid">
          <section lang="en">
            <h4>{labels.english}</h4>
            {song.sections.map((section) => (
              <div className="lyric-section" key={`${song.slug}-${section.label}-en`}>
                <h5>{section.label}</h5>
                <p>
                  {section.en.map((line, lineIndex) => (
                    <span key={`${section.label}-en-${lineIndex}`}>{line}</span>
                  ))}
                </p>
              </div>
            ))}
          </section>
          <section lang="ru">
            <h4>{labels.russian}</h4>
            {song.sections.map((section) => (
              <div className="lyric-section" key={`${song.slug}-${section.label}-ru`}>
                <h5>{section.label}</h5>
                <p>
                  {section.ru.map((line, lineIndex) => (
                    <span key={`${section.label}-ru-${lineIndex}`}>{line}</span>
                  ))}
                </p>
              </div>
            ))}
          </section>
        </div>
      </details>
    </article>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("it");
  const [theme, setTheme] = useState<Theme>("archive");
  const t = copy[language];
  const music = musicCopy[language];
  const themes = themeCopy[language];

  useEffect(() => {
    const saved = window.localStorage.getItem("cmon-bollo-language");
    if (saved === "ru" || saved === "it") {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("cmon-bollo-language", language);
  }, [language]);

  useEffect(() => {
    const saved = window.localStorage.getItem("cmon-bollo-theme");
    if (saved === "archive" || saved === "night" || saved === "silly") {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("cmon-bollo-theme", theme);
  }, [theme]);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label={t.homeLabel}>
          C’MON, BOLLO!
        </a>
        <nav aria-label={language === "it" ? "Navigazione principale" : "Основная навигация"}>
          <a href="#concerto">{t.navConcert}</a>
          <a href="#bollo">{t.navBollo}</a>
          <a href="#storia">{t.navStory}</a>
          <a href="#musica">{music.nav}</a>
          <a href="#merch">{t.navMerch}</a>
        </nav>
        <div className="header-actions">
          <div className="theme-switch" role="group" aria-label={themes.label}>
            <button
              type="button"
              aria-pressed={theme === "archive"}
              onClick={() => setTheme("archive")}
            >
              {themes.archive}
            </button>
            <button
              type="button"
              aria-pressed={theme === "night"}
              onClick={() => setTheme("night")}
            >
              {themes.night}
            </button>
            <button
              type="button"
              aria-pressed={theme === "silly"}
              onClick={() => setTheme("silly")}
            >
              {themes.silly}
            </button>
          </div>
          <div className="language-switch" role="group" aria-label={t.languageLabel}>
            <button
              type="button"
              aria-pressed={language === "it"}
              onClick={() => setLanguage("it")}
            >
              IT
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              aria-pressed={language === "ru"}
              onClick={() => setLanguage("ru")}
            >
              RU
            </button>
          </div>
          <a className="header-cta" href="#contatto">
            SAMARA 2026 <Arrow />
          </a>
        </div>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="kicker">{t.heroKicker}</p>
          <h1 id="hero-title">
            {t.heroLine1}
            <br />
            <em>{t.heroLine2}</em>
          </h1>
          <p className="hero-note">{t.heroNote}</p>
        </div>

        <div className="hero-art" role="img" aria-label={t.heroAlt}>
          <div className="stamp">{t.heroStamp}</div>
          <span className="art-credit">{t.heroCredit}</span>
        </div>

        <div className="hero-footnote">
          <span>{t.footnote1}</span>
          <span>{t.footnote2}</span>
        </div>
      </section>

      <section className="ticker" aria-label={t.concertLabel}>
        <div>
          <TickerLine items={t.ticker} />
          <TickerLine items={t.ticker} />
        </div>
      </section>

      <section className="concert section-shell" id="concerto" aria-labelledby="concert-title">
        <div className="section-index">{t.concertIndex}</div>
        <div className="concert-main">
          <p className="eyebrow">{t.concertEyebrow}</p>
          <h2 id="concert-title">
            {t.concertLine1}
            <br />
            {t.concertLine2}
          </h2>
        </div>
        <div className="ticket">
          <div className="ticket-top">
            <span>C’MON, BOLLO!</span>
            <span>LIVE</span>
          </div>
          <div className="ticket-city">САМАРА</div>
          <dl>
            <div>
              <dt>{t.when}</dt>
              <dd>{t.whenValue}</dd>
            </div>
            <div>
              <dt>{t.where}</dt>
              <dd>{t.whereValue}</dd>
            </div>
            <div>
              <dt>{t.status}</dt>
              <dd>{t.statusValue}</dd>
            </div>
          </dl>
          <a href="mailto:cmonbollo@gmail.com?subject=C%E2%80%99mon%2C%20Bollo!%20%E2%80%94%20Samara%202026">
            {t.notify} <Arrow />
          </a>
        </div>
      </section>

      <section className="manifesto section-shell" aria-label={t.manifestoLabel}>
        <p>
          {t.manifestoLine1}
          <br />
          {t.manifestoLine2} <span>{t.manifestoAccent}</span>
        </p>
      </section>

      <section className="bollo-section section-shell" id="bollo" aria-labelledby="bollo-title">
        <div className="section-index">{t.bolloIndex}</div>
        <figure className="bollo-portrait">
          <img src="/bollo.png" alt={t.bolloAlt} />
          <figcaption>
            <span>{t.bolloDossier}</span>
            <strong>BOLLO</strong>
          </figcaption>
        </figure>
        <div className="bollo-copy">
          <p className="eyebrow">{t.bolloEyebrow}</p>
          <h2 id="bollo-title">{t.bolloTitle}</h2>
          <p className="bollo-lead">{t.bolloLead}</p>
          <p>{t.bolloText}</p>
          <dl className="bollo-facts">
            <div>
              <dt>{t.species}</dt>
              <dd>{t.speciesValue}</dd>
            </div>
            <div>
              <dt>{t.role}</dt>
              <dd>{t.roleValue}</dd>
            </div>
            <div>
              <dt>{t.license}</dt>
              <dd>{t.licenseValue}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="story section-shell" id="storia" aria-labelledby="story-title">
        <div className="section-index">{t.storyIndex}</div>
        <div className="story-copy">
          <p className="eyebrow">{t.storyEyebrow}</p>
          <h2 id="story-title">{t.storyTitle}</h2>
          <p className="lead">{t.storyLead}</p>
          <p>{t.storyP1}</p>
          <p>{t.storyP2}</p>
          <blockquote>
            {t.quote}
            <cite>{t.quoteBy}</cite>
          </blockquote>
        </div>

        <div className="archive-stack">
          <figure className="archive-poster">
            <img src="/archive/site-2011.png" alt={t.oldSiteAlt} />
            <figcaption>
              {t.oldSiteCaption}
              <span>01</span>
            </figcaption>
          </figure>
          <figure className="archive-photo">
            <img src="/archive/band-2010.jpg" alt={t.bandPhotoAlt} />
            <figcaption>
              {t.bandPhotoCaption}
              <span>02</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="music" id="musica" aria-labelledby="music-title">
        <div className="music-heading section-shell">
          <div className="section-index">{music.index}</div>
          <div>
            <p className="eyebrow">{music.eyebrow}</p>
            <h2 id="music-title">{music.title}</h2>
            <p>{music.intro}</p>
          </div>
          <aside>{music.draftNote}</aside>
        </div>
        <div className="song-grid section-shell">
          {songs.map((song) => (
            <SongCard
              key={song.slug}
              song={song}
              labels={music}
              language={language}
            />
          ))}
        </div>
      </section>

      <section className="merch" id="merch" aria-labelledby="merch-title">
        <div className="merch-heading section-shell">
          <div className="section-index">{t.merchIndex.replace(/^04/, "05")}</div>
          <p className="eyebrow">{t.merchEyebrow}</p>
          <h2 id="merch-title">{t.merchTitle}</h2>
          <p>{t.merchIntro}</p>
        </div>

        <div className="merch-grid">
          <article className="product product-shirt">
            <div className="product-visual" aria-hidden="true">
              <div className="shirt">
                <span>C’MON,</span>
                <strong>BOLLO!</strong>
                <small>SAMARA 2026</small>
              </div>
            </div>
            <div className="product-meta">
              <div>
                <h3>{t.shirtName}</h3>
                <p>{t.shirtDesc}</p>
              </div>
              <span className="status">{t.soon}</span>
            </div>
          </article>

          <article className="product product-tote">
            <div className="product-visual" aria-hidden="true">
              <div className="tote">
                <span>BOLLO</span>
                <strong>NO DRIVE.</strong>
                <small>MA PORTA TUTTO.</small>
              </div>
            </div>
            <div className="product-meta">
              <div>
                <h3>{t.toteName}</h3>
                <p>{t.toteDesc}</p>
              </div>
              <span className="status">{t.soon}</span>
            </div>
          </article>

          <article className="product product-poster">
            <div className="product-visual" aria-hidden="true">
              <div className="poster-sheet">
                <img src={theme === "silly" ? "/silly-hero.png" : "/og.png"} alt="" />
              </div>
            </div>
            <div className="product-meta">
              <div>
                <h3>{t.posterName}</h3>
                <p>{t.posterDesc}</p>
              </div>
              <span className="status">{t.soon}</span>
            </div>
          </article>
        </div>
      </section>

      <section className="contact section-shell" id="contatto" aria-labelledby="contact-title">
        <div className="section-index">{t.contactIndex.replace(/^05/, "06")}</div>
        <p className="eyebrow">{t.contactEyebrow}</p>
        <h2 id="contact-title">{t.contactTitle}</h2>
        <a href="mailto:cmonbollo@gmail.com">
          cmonbollo@gmail.com <Arrow />
        </a>
      </section>

      <footer>
        <p>{t.footerClaim}</p>
        <div>
          <a
            href="https://web.archive.org/web/20110207235251/http://cmonbollo.com/"
            target="_blank"
            rel="noreferrer"
          >
            {t.oldSiteLink} <Arrow />
          </a>
          <a
            href="https://noelena-says-hi.livejournal.com/825.html"
            target="_blank"
            rel="noreferrer"
          >
            {t.articleLink} <Arrow />
          </a>
        </div>
        <p>© 2010–2026 · BOLLO LOSE LICENSE</p>
      </footer>
    </main>
  );
}
