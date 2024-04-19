import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Micro-Frontends
          <code className={styles.code}></code>
        </p>

      </div>

      <div className={styles.center}>
        <h2>
          Micro-Frontends And real-life example of it
        </h2>
      </div>

      <div className={styles.grid}>
        <a
          href="https://docs.google.com/presentation/d/1XIaTUpJjCsC62DJjjIMlg0O_BLlDT4kq/edit?usp=sharing&ouid=113271694178669473793&rtpof=true&sd=true"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            PPT <span>-&gt;</span>
          </h2>
          <p>View presentation on Micro-Frontends</p>
        </a>

        <a
          href="https://www.netflix.com/in/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Netflix <span>-&gt;</span>
          </h2>
          <p>Explore micro-frontends with real-life examples.</p>
        </a>

        <a
          href="https://www.amazon.com/Maisto-Special-Bugatti-Chiron-Vehicle/dp/B01N9TKLQH"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Amazon <span>-&gt;</span>
          </h2>
          <p>Discover templates and resources for building micro-frontends.</p>
        </a>

        <a
          href="https://open.spotify.com/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Spotify <span>-&gt;</span>
          </h2>
          <p>
            Deploy your micro-frontend application with ease.
          </p>
        </a>
      </div>
    </main>
  );
}
