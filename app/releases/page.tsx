'use client';

import { useCallback } from "react";
import Header from "../components/Header";
import styles from "./releases.module.css";

const RELEASES_DATA = [
    {
        version: "V0.1.0-ALPHA",
        date: "2026-01-29",
        tag: "Latest",
        tagClass: styles.alphaTag,
        changelog: [
            "Initial public release of the PocketScore engine.",
            "Material 3 Expressive UI with fluid spring physics.",
            "Local-first architecture using DataStore.",
            "Live Scoreboard with real-time point entry.",
            "Match history persistence and management."
        ],
        downloadUrl: "https://github.com/mwarrc/PocketScore/releases/download/v-0.1.0/PocketScore.apk"
    }
];

export default function Releases() {
    const containerRef = useCallback((node: HTMLDivElement) => {
        if (node !== null) {
            const handleMouseMove = (e: MouseEvent) => {
                const { clientX, clientY } = e;
                const x = (clientX / window.innerWidth - 0.5) * 20;
                const y = (clientY / window.innerHeight - 0.5) * 20;
                node.style.setProperty('--mouse-x', `${x}px`);
                node.style.setProperty('--mouse-y', `${y}px`);
            };
            window.addEventListener('mousemove', handleMouseMove);
            return () => window.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    return (
        <div className="page-container" ref={containerRef}>
            <Header />

            <div className={styles.bgDecor}></div>

            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className={styles.badgeWrapper}>
                        <div className={styles.badge}>
                            <span>System_Manifest</span>
                        </div>
                        <div className={styles.badgeAccent}></div>
                    </div>

                    <h1 className={styles.title}>
                        <div className={styles.titleWrapper}>
                            <span className={styles.titleMain}>Build</span>
                            <span className={styles.titleMainStroke}>Build</span>
                        </div>
                        <div className={styles.titleWrapper}>
                            <span className={styles.titleMain}>Archive</span>
                            <span className={styles.titleMainStroke}>Archive</span>
                        </div>
                    </h1>
                </section>

                <div
                    className={styles.releaseList}
                    style={{
                        transform: 'translate(var(--mouse-x, 0), var(--mouse-y, 0))',
                        transition: 'transform 0.1s ease-out'
                    }}
                >
                    {RELEASES_DATA.map((release, i) => (
                        <div key={i} className={styles.releaseItemWrapper}>
                            <div className={styles.releaseItem}>
                                <div className={styles.releaseMeta}>
                                    <span className={`${styles.tag} ${release.tagClass}`}>{release.tag}</span>
                                    <h2 className={styles.version}>{release.version}</h2>
                                    <div className={styles.date}>COMMITTED: {release.date}</div>

                                    <div className={styles.changelog}>
                                        <h3>INTEGRATION_LOG</h3>
                                        <ul>
                                            {release.changelog.map((entry, idx) => (
                                                <li key={idx}>{entry}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className={styles.downloadArea}>
                                    <a href={release.downloadUrl} className={styles.downloadBtn} download>
                                        <span className="material-symbols-rounded">download</span>
                                        GET_PACKAGE
                                    </a>
                                </div>
                            </div>
                            <div className={styles.itemShadow}></div>
                        </div>
                    ))}
                </div>

                <section className={styles.dotGridSection}>
                    <div className={styles.dotGrid}>
                        {[...Array(120)].map((_, i) => (
                            <div key={i} className={styles.dot}></div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
