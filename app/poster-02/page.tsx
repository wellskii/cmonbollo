import type { Metadata } from "next";
import { festival } from "../festival";
import styles from "./poster.module.css";

export const metadata: Metadata = {
  title: "Что-то почувствовать фест — афиша 02",
  description:
    "Типографическая афиша фестиваля 16 августа 2026 года в баре «Хват», Самара.",
};

export default function PosterTwo() {
  return (
    <main className={styles.posterPage}>
      <article
        className={styles.poster}
        aria-label="Афиша фестиваля «Что-то почувствовать», Самара, 16 августа 2026"
      >
        <header className={styles.utilityRow}>
          <span>САМАРА / 63</span>
          <span>ВОСКРЕСЕНЬЕ</span>
          <span>АФИША 02</span>
        </header>

        <section className={styles.masthead} aria-labelledby="poster-title">
          <p className={styles.overline}>НЕЗАВИСИМЫЙ ФЕСТИВАЛЬ</p>
          <h1 id="poster-title">
            <span>ЧТО-ТО</span>
            <span>ПОЧУВСТВОВАТЬ</span>
            <span>ФЕСТ</span>
          </h1>
          <div className={styles.dateMark} aria-label="16 августа">
            <strong>16</strong>
            <i>/</i>
            <strong>08</strong>
          </div>
          <p className={styles.year}>2026</p>
        </section>

        <section className={styles.runningOrder} aria-label="Расписание выступлений">
          <div className={styles.runningHead} aria-hidden="true">
            <span>ВРЕМЯ</span>
            <span>СЦЕНА</span>
            <span>СЕТ</span>
          </div>
          <ol>
            {festival.lineup.map((band) => (
              <li key={band.name}>
                <time dateTime={band.setTime}>{band.setTime}</time>
                <strong>{band.name}</strong>
                <span>
                  {Number(band.endTime.slice(0, 2)) * 60 +
                    Number(band.endTime.slice(3)) -
                    (Number(band.setTime.slice(0, 2)) * 60 +
                      Number(band.setTime.slice(3)))}
                  ′
                </span>
              </li>
            ))}
          </ol>
        </section>

        <footer className={styles.venueBlock}>
          <div className={styles.venueName}>
            <span>БАР</span>
            <strong>ХВАТ</strong>
          </div>
          <div className={styles.venueDetails}>
            <p>ГАЛАКТИОНОВСКАЯ, 40</p>
            <p>
              ДВЕРИ <strong>{festival.doors}</strong>
            </p>
          </div>
          <div className={styles.registration} aria-hidden="true">
            <span>JTFS</span>
            <b>16—08—26</b>
          </div>
        </footer>
      </article>
    </main>
  );
}
