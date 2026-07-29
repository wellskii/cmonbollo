const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="C'mon, Bollo! — inizio">
          C’MON, BOLLO!
        </a>
        <nav aria-label="Navigazione principale">
          <a href="#concerto">Concerto</a>
          <a href="#storia">Storia</a>
          <a href="#merch">Merch</a>
        </nav>
        <a className="header-cta" href="#contatto">
          SAMARA 2026 <Arrow />
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="kicker">Power-pop italo-volgano · dal 2010*</p>
          <h1 id="hero-title">
            DI NUOVO
            <br />
            <em>INSIEME.</em>
          </h1>
          <p className="hero-note">
            Una voce italiana vera, tre passaporti emotivi e un gregge di
            amplificatori tornano sul palco a Samara.
          </p>
        </div>

        <div className="hero-art" role="img" aria-label="La pecora simbolo dei C'mon, Bollo!">
          <div className="stamp">MADE IN ITALY†</div>
          <span className="art-credit">PECORA N. 01 / ARCHIVIO RICOSTRUITO</span>
        </div>

        <div className="hero-footnote">
          <span>* Più o meno.</span>
          <span>† La cantante, sì. Il resto è geografia creativa.</span>
        </div>
      </section>

      <section className="ticker" aria-label="Annuncio concerto">
        <div>
          <span>SAMARA</span>
          <i aria-hidden="true">●</i>
          <span>AUTUNNO 2026</span>
          <i aria-hidden="true">●</i>
          <span>DATA DA ANNUNCIARE</span>
          <i aria-hidden="true">●</i>
          <span>BOLLO NO DRIVE</span>
        </div>
      </section>

      <section className="concert section-shell" id="concerto" aria-labelledby="concert-title">
        <div className="section-index">01 / IL RITORNO</div>
        <div className="concert-main">
          <p className="eyebrow">Concerto di reunion</p>
          <h2 id="concert-title">
            UNA NOTTE.
            <br />
            ZERO PATENTI.
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
              <dt>Quando</dt>
              <dd>Autunno 2026</dd>
            </div>
            <div>
              <dt>Dove</dt>
              <dd>Samara · da annunciare</dd>
            </div>
            <div>
              <dt>Stato</dt>
              <dd>Molto insieme</dd>
            </div>
          </dl>
          <a href="mailto:cmonbollo@gmail.com?subject=C%E2%80%99mon%2C%20Bollo!%20%E2%80%94%20Samara%202026">
            Avvisami quando si sa tutto <Arrow />
          </a>
        </div>
      </section>

      <section className="manifesto section-shell" aria-label="Manifesto del gruppo">
        <p>
          CI SIAMO SCIOLTI ABBASTANZA.
          <br />
          ORA <span>SUONIAMO.</span>
        </p>
      </section>

      <section className="story section-shell" id="storia" aria-labelledby="story-title">
        <div className="section-index">02 / LA STORIA VERA QUASI</div>
        <div className="story-copy">
          <p className="eyebrow">Samara, 2010 → Italia, emotivamente</p>
          <h2 id="story-title">NON ERA MONTY PYTHON.</h2>
          <p className="lead">
            Il nome arriva da <i>The Mighty Boosh</i>: Bollo, gorilla
            multi-strumentista, perde la patente. Noi, invece, perdiamo
            quindici anni.
          </p>
          <p>
            Nel 2010 suoniamo allo Snickers Urbania di Samara, pubblichiamo
            power-pop, apriamo un sito con Flash e mettiamo una pecora in
            copertina senza spiegare niente. Nel 2011 esce il singolo{" "}
            <i>The Far, The Farther and The Beyond</i>. Poi: silenzio
            discografico, vite adulte, cittadinanze interessanti.
          </p>
          <p>
            Oggi torniamo come gruppo italiano. È una scelta artistica,
            burocratica e soprattutto divertente.
          </p>
          <blockquote>
            “C’mon, Bollo, get your monkey anus at the steering wheel.”
            <cite>— Vince Noir, motivo ufficiale del nome</cite>
          </blockquote>
        </div>

        <div className="archive-stack">
          <figure className="archive-poster">
            <img
              src="/archive/site-2011.png"
              alt="Il sito originale dei C'mon, Bollo! del 2011 con una pecora"
            />
            <figcaption>
              cmonbollo.com · 07.02.2011
              <span>01</span>
            </figcaption>
          </figure>
          <figure className="archive-photo">
            <img
              src="/archive/band-2010.jpg"
              alt="Foto d'archivio dei C'mon, Bollo! nel 2010"
            />
            <figcaption>
              “Suonano come appaiono” · Samara, 2010
              <span>02</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="merch" id="merch" aria-labelledby="merch-title">
        <div className="merch-heading section-shell">
          <div className="section-index">03 / MERCE MOLTO UFFICIALE</div>
          <p className="eyebrow">Prima edizione della seconda venuta</p>
          <h2 id="merch-title">PORTA LA PECORA.</h2>
          <p>
            Tre oggetti in preparazione per la sera del concerto. Tiratura
            piccola, umorismo grande.
          </p>
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
                <h3>Maglietta «Di nuovo insieme»</h3>
                <p>Cotone nero · stampa sporca avorio/rosso</p>
              </div>
              <span className="status">PRESTO</span>
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
                <h3>Borsa «Bollo no drive»</h3>
                <p>Tela naturale · inchiostro italiano molto serio</p>
              </div>
              <span className="status">PRESTO</span>
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
                <h3>Poster «Samara · 2026»</h3>
                <p>Risograph A2 · numerato, forse correttamente</p>
              </div>
              <span className="status">PRESTO</span>
            </div>
          </article>
        </div>
      </section>

      <section className="contact section-shell" id="contatto" aria-labelledby="contact-title">
        <div className="section-index">04 / CONTATTO</div>
        <p className="eyebrow">Per date, stampa, passaporti e pecore</p>
        <h2 id="contact-title">SCRIVICI, BELLA.</h2>
        <a href="mailto:cmonbollo@gmail.com">
          cmonbollo@gmail.com <Arrow />
        </a>
      </section>

      <footer>
        <p>C’MON, BOLLO! · GRUPPO ITALIANO CON RADICI A SAMARA</p>
        <div>
          <a
            href="https://web.archive.org/web/20110207235251/http://cmonbollo.com/"
            target="_blank"
            rel="noreferrer"
          >
            Sito 2011 <Arrow />
          </a>
          <a
            href="https://noelena-says-hi.livejournal.com/825.html"
            target="_blank"
            rel="noreferrer"
          >
            Articolo 2010 <Arrow />
          </a>
        </div>
        <p>© 2010–2026 · BOLLO LOSE LICENSE</p>
      </footer>
    </main>
  );
}
