import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div className={styles.brand}>
          <div className={styles.thirteen}>
            <Image
              src="/ikramlogo.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={inter.className}>
          <div className={styles.content}>
            <h1 className={styles.title}>Down for Maintenance 🛠️</h1>
            <p className={styles.contentText}>
              Ikram Maulana&apos;s Portfolio Web is currently undergoing planned
              maintenance. I&apos;ll be back with an better website experience.
              Follow me on{" "}
              <a
                href="https://github.com/Ikram-Maulana"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>{" "}
              for updates.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
