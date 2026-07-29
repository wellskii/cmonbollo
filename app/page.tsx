"use client";

import { useEffect, useState } from "react";

type Language = "it" | "ru";

const copy = {
  it: {
    languageLabel: "Scegli la lingua",
    homeLabel: "C'mon, Bollo! — inizio",
    navConcert: "Concerto",
    navBollo: "Bollo",
    navStory: "Storia",
    navMerch: "Merch",
    heroKicker: "Power-pop italo-volgano · dal 2010*",
    heroLine1: "DI NUOVO",
    heroLine2: "INSIEME.",
    heroNote:
      "Una voce italiana vera, tre passaporti emotivi e un gregge di amplificatori tornano sul palco a Samara.",
    heroAlt: "La pecora simbolo dei C'mon, Bollo!",
    heroStamp: "MADE IN ITALY†",
    heroCredit: "PECORA N. 01 / ARCHIVIO RICOSTRUITO",
    footnote1: "* Più o meno.",
    footnote2: "† La cantante, sì. Il resto è geografia creativa.",
    ticker: ["SAMARA", "AUTUNNO 2026", "DATA DA ANNUNCIARE", "BOLLO NO DRIVE"],
    concertLabel: "Annuncio concerto",
    concertIndex: "01 / IL RITORNO",
    concertEyebrow: "Concerto di reunion",
    concertLine1: "UNA NOTTE.",
    concertLine2: "ZERO PATENTI.",
    when: "Quando",
    whenValue: "Autunno 2026",
    where: "Dove",
    whereValue: "Samara · da annunciare",
    status: "Stato",
    statusValue: "Molto insieme",
    notify: "Avvisami quando si sa tutto",
    manifestoLabel: "Manifesto del gruppo",
    manifestoLine1: "CI SIAMO SCIOLTI ABBASTANZA.",
    manifestoLine2: "ORA",
    manifestoAccent: "SUONIAMO.",
    bolloIndex: "02 / IL VERO BOLLO",
    bolloEyebrow: "Gorilla multi-strumentista · patente revocata",
    bolloTitle: "BOLLO NO DRIVE.",
    bolloLead:
      "Chitarra? Sì. Batteria? Anche. Volante? Assolutamente no.",
    bolloText:
      "Bollo è il santo patrono dei musicisti senza patente e la ragione per cui questo gruppo ha un nome. Dopo quindici anni è finalmente arrivato sul sito.",
    bolloAlt:
      "Ritratto a collage di Bollo, gorilla musicista con chitarra e bacchette",
    bolloDossier: "DOSSIER N. 01",
    species: "Specie",
    speciesValue: "Gorilla",
    role: "Ruolo",
    roleValue: "Tutti gli strumenti",
    license: "Patente",
    licenseValue: "Persa",
    storyIndex: "03 / LA STORIA VERA QUASI",
    storyEyebrow: "Samara, 2010 → Italia, emotivamente",
    storyTitle: "NON ERA MONTY PYTHON.",
    storyLead:
      "Il nome arriva da The Mighty Boosh: Bollo, gorilla multi-strumentista, perde la patente. Noi, invece, perdiamo quindici anni.",
    storyP1:
      "Nel 2010 suoniamo allo Snickers Urbania di Samara, pubblichiamo power-pop, apriamo un sito con Flash e mettiamo una pecora in copertina senza spiegare niente. Nel 2011 esce il singolo The Far, The Farther and The Beyond. Poi: silenzio discografico, vite adulte, cittadinanze interessanti.",
    storyP2:
      "Oggi torniamo come gruppo italiano. È una scelta artistica, burocratica e soprattutto divertente.",
    quote: "“C’mon, Bollo, get your monkey anus at the steering wheel.”",
    quoteBy: "— Vince Noir, motivo ufficiale del nome",
    oldSiteAlt:
      "Il sito originale dei C'mon, Bollo! del 2011 con una pecora",
    oldSiteCaption: "cmonbollo.com · 07.02.2011",
    bandPhotoAlt: "Foto d'archivio dei C'mon, Bollo! nel 2010",
    bandPhotoCaption: "“Suonano come appaiono” · Samara, 2010",
    merchIndex: "04 / MERCE MOLTO UFFICIALE",
    merchEyebrow: "Prima edizione della seconda venuta",
    merchTitle: "PORTA LA PECORA. E BOLLO.",
    merchIntro:
      "Tre oggetti in preparazione per la sera del concerto. Tiratura piccola, umorismo grande.",
    shirtName: "Maglietta «Di nuovo insieme»",
    shirtDesc: "Cotone nero · stampa sporca avorio/rosso",
    toteName: "Borsa «Bollo no drive»",
    toteDesc: "Tela naturale · inchiostro italiano molto serio",
    posterName: "Poster «Samara · 2026»",
    posterDesc: "Risograph A2 · numerato, forse correttamente",
    soon: "PRESTO",
    contactIndex: "05 / CONTATTO",
    contactEyebrow: "Per date, stampa, passaporti, gorilla e pecore",
    contactTitle: "SCRIVICI, BELLA.",
    footerClaim: "C’MON, BOLLO! · GRUPPO ITALIANO CON RADICI A SAMARA",
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
    heroKicker: "Итало-волжский пауэр-поп · с 2010 года*",
    heroLine1: "СНОВА",
    heroLine2: "ВМЕСТЕ.",
    heroNote:
      "Одна настоящая итальянская вокалистка, три эмоциональных паспорта и стадо усилителей возвращаются на сцену в Самаре.",
    heroAlt: "Овца — символ группы C'mon, Bollo!",
    heroStamp: "СДЕЛАНО В ИТАЛИИ†",
    heroCredit: "ОВЦА № 01 / АРХИВ РЕКОНСТРУИРОВАН",
    footnote1: "* Плюс-минус.",
    footnote2: "† Вокалистка — да. Остальное — творческая география.",
    ticker: ["САМАРА", "ОСЕНЬ 2026", "ДАТА СКОРО", "BOLLO NO DRIVE"],
    concertLabel: "Анонс концерта",
    concertIndex: "01 / ВОЗВРАЩЕНИЕ",
    concertEyebrow: "Реюнион-концерт",
    concertLine1: "ОДНА НОЧЬ.",
    concertLine2: "НОЛЬ ПРАВ.",
    when: "Когда",
    whenValue: "Осень 2026",
    where: "Где",
    whereValue: "Самара · скоро объявим",
    status: "Статус",
    statusValue: "Очень вместе",
    notify: "Сообщите, когда всё станет известно",
    manifestoLabel: "Манифест группы",
    manifestoLine1: "МЫ ДОСТАТОЧНО ДОЛГО БЫЛИ РАСПУЩЕНЫ.",
    manifestoLine2: "ТЕПЕРЬ",
    manifestoAccent: "ИГРАЕМ.",
    bolloIndex: "02 / НАСТОЯЩИЙ БОЛЛО",
    bolloEyebrow: "Горилла-мультиинструменталист · права отозваны",
    bolloTitle: "BOLLO NO DRIVE.",
    bolloLead:
      "Гитара? Да. Барабаны? Тоже. Руль? Категорически нет.",
    bolloText:
      "Болло — святой покровитель музыкантов без водительских прав и причина, по которой у группы такое имя. Спустя пятнадцать лет он наконец появился на сайте.",
    bolloAlt:
      "Коллажный портрет Болло — гориллы-музыканта с гитарой и барабанными палочками",
    bolloDossier: "ДОСЬЕ № 01",
    species: "Вид",
    speciesValue: "Горилла",
    role: "Роль",
    roleValue: "Все инструменты",
    license: "Права",
    licenseValue: "Потеряны",
    storyIndex: "03 / ПОЧТИ ПРАВДИВАЯ ИСТОРИЯ",
    storyEyebrow: "Самара, 2010 → Италия, эмоционально",
    storyTitle: "ЭТО НЕ МОНТИ ПАЙТОН.",
    storyLead:
      "Название пришло из The Mighty Boosh: Болло, горилла-мультиинструменталист, теряет права. Мы вместо этого теряем пятнадцать лет.",
    storyP1:
      "В 2010 году мы играем на Snickers Urbania в Самаре, выпускаем пауэр-поп, открываем сайт на Flash и без объяснений помещаем овцу на обложку. В 2011-м выходит сингл The Far, The Farther and The Beyond. Дальше — музыкальная тишина, взрослая жизнь и интересные гражданства.",
    storyP2:
      "Сегодня мы возвращаемся как итальянская группа. Это решение художественное, бюрократическое и, главное, смешное.",
    quote: "“C’mon, Bollo, get your monkey anus at the steering wheel.”",
    quoteBy: "— Винс Нуар, официальная причина названия",
    oldSiteAlt:
      "Оригинальный сайт C'mon, Bollo! 2011 года с овцой",
    oldSiteCaption: "cmonbollo.com · 07.02.2011",
    bandPhotoAlt: "Архивная фотография C'mon, Bollo! 2010 года",
    bandPhotoCaption: "«Звучат так же, как выглядят» · Самара, 2010",
    merchIndex: "04 / ОЧЕНЬ ОФИЦИАЛЬНЫЙ МЕРЧ",
    merchEyebrow: "Первый тираж второго пришествия",
    merchTitle: "НОСИ ОВЦУ. И БОЛЛО.",
    merchIntro:
      "Три предмета готовятся к вечеру концерта. Маленький тираж, большой юмор.",
    shirtName: "Футболка «Снова вместе»",
    shirtDesc: "Чёрный хлопок · грязная печать айвори/красным",
    toteName: "Сумка «Bollo no drive»",
    toteDesc: "Натуральный холст · очень серьёзная итальянская краска",
    posterName: "Постер «Самара · 2026»",
    posterDesc: "Ризография A2 · пронумерован, возможно правильно",
    soon: "СКОРО",
    contactIndex: "05 / КОНТАКТ",
    contactEyebrow: "По концертам, прессе, паспортам, гориллам и овцам",
    contactTitle: "ПИШИТЕ, BELLA.",
    footerClaim: "C’MON, BOLLO! · ИТАЛЬЯНСКАЯ ГРУППА С КОРНЯМИ В САМАРЕ",
    oldSiteLink: "Сайт 2011",
    articleLink: "Статья 2010",
  },
} as const;

const Arrow = () => <span aria-hidden="true">↗</span>;

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

export default function Home() {
  const [language, setLanguage] = useState<Language>("it");
  const t = copy[language];

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
          <a href="#merch">{t.navMerch}</a>
        </nav>
        <div className="header-actions">
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
          <p>
            {language === "it" ? (
              <>
                Nel 2010 suoniamo allo Snickers Urbania di Samara, pubblichiamo
                power-pop, apriamo un sito con Flash e mettiamo una pecora in
                copertina senza spiegare niente. Nel 2011 esce il singolo{" "}
                <i>The Far, The Farther and The Beyond</i>. Poi: silenzio
                discografico, vite adulte, cittadinanze interessanti.
              </>
            ) : (
              <>
                В 2010 году мы играем на Snickers Urbania в Самаре, выпускаем
                пауэр-поп, открываем сайт на Flash и без объяснений помещаем овцу
                на обложку. В 2011-м выходит сингл{" "}
                <i>The Far, The Farther and The Beyond</i>. Дальше — музыкальная
                тишина, взрослая жизнь и интересные гражданства.
              </>
            )}
          </p>
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

      <section className="merch" id="merch" aria-labelledby="merch-title">
        <div className="merch-heading section-shell">
          <div className="section-index">{t.merchIndex}</div>
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
                <img src="/og.png" alt="" />
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
        <div className="section-index">{t.contactIndex}</div>
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
