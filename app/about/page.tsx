'use client';

import Header from "../components/Header";
import styles from "./about.module.css";
import Image from "next/image";

export default function About() {
    return (
        <div className="page-container">
            <Header />

            <div className={styles.bgDecor}></div>

            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className={styles.badgeWrapper}>
                        <div className={styles.badge}>
                            <span>V0.1.0_Identity</span>
                        </div>
                        <div className={styles.badgeAccent}></div>
                    </div>

                    <h1 className={styles.title}>
                        <div className={styles.titleWrapper}>
                            <span className={styles.titleMain}>Core</span>
                            <span className={styles.titleMainStroke}>Core</span>
                        </div>
                        <div className={styles.titleWrapper}>
                            <span className={styles.titleMain}>Identity</span>
                            <span className={styles.titleMainStroke}>Identity</span>
                        </div>
                    </h1>
                </section>

                <div className={styles.contentGrid}>
                    <section className={styles.infoSection}>
                        <div className={styles.description}>
                            PocketScore is an expressive, open-source score-keeping engine designed for those who value performance and privacy.
                            Built with a focus on local execution and sleek M3 aesthetics, it eliminates the noise of modern utility apps.
                        </div>

                        <div className={styles.statsGrid}>
                            <div className={styles.statBlock}>
                                <span className={styles.statValue}>100%</span>
                                <span className={styles.statLabel}>Local Execution</span>
                            </div>
                            <div className={styles.statBlock}>
                                <span className={styles.statValue}>0</span>
                                <span className={styles.statLabel}>External Tracking</span>
                            </div>
                            <div className={styles.statBlock}>
                                <span className={styles.statValue}>K2.0</span>
                                <span className={styles.statLabel}>Kotlin Compiler</span>
                            </div>
                            <div className={styles.statBlock}>
                                <span className={styles.statValue}>∞</span>
                                <span className={styles.statLabel}>Open Source</span>
                            </div>
                        </div>

                        <div className={styles.textBlock}>
                            <h2 style={{ fontSize: '32px', fontWeight: 950, textTransform: 'uppercase', marginBottom: '24px' }}>
                                Engineering Philosophy
                            </h2>
                            <p style={{ fontSize: '20px', color: '#999', lineHeight: 1.6 }}>
                                We believe that software should be beautiful but brutal. Every line of Kotlin in PocketScore is optimized for the metal,
                                ensuring that the UI remains fluid even during the most intense high-stakes gaming sessions.
                                No middle-men. No analytics. Pure scoring power.
                            </p>
                        </div>
                    </section>

                    <aside className={styles.devSection}>
                        <div className={styles.devCard}>
                            <div
                                className={styles.devImageContainer}
                                onContextMenu={(e) => e.preventDefault()}
                            >
                                <div className={styles.imageGuard}></div>
                                <div className={styles.nameTag}>Mwariri Clinton</div>
                                <Image
                                    src="/devpic/image.png"
                                    alt="Developer Profile"
                                    width={300}
                                    height={300}
                                    className={styles.devImage}
                                    priority
                                    draggable={false}
                                />
                            </div>
                            <h2 className={styles.devName}>MWARRC</h2>
                            <span className={styles.devRole}>Lead Architect / PocketScore</span>

                            <div className={styles.socialGrid}>
                                <a href="https://github.com/mwarrc" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GH</a>
                                <a href="https://x.com/mwarrc" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>X_</a>
                                <a href="https://instagram.com/mwarrc" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>IG</a>
                            </div>
                        </div>
                        <div className={styles.devShadow}></div>
                    </aside>
                </div>

                <section className={styles.dotGridSection}>
                    <div className={styles.dotGrid}>
                        {[...Array(120)].map((_, i) => (
                            <div key={i} className={`${styles.dot} ${Math.random() > 0.9 ? styles.dotActive : ''}`}></div>
                        ))}
                    </div>
                </section>
            </main >
        </div >
    );
}
