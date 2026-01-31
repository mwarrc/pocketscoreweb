'use client';

import { useState, useCallback } from "react";
import Header from "../components/Header";
import styles from "./contact.module.css";

export default function Contact() {
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
                            <span>V0.1.1_Connectivity</span>
                        </div>
                        <div className={styles.badgeAccent}></div>
                    </div>

                    <h1 className={styles.title}>
                        <div className={styles.titleWrapper}>
                            <span className={styles.titleMain}>Get In</span>
                            <span className={styles.titleMainStroke}>Get In</span>
                        </div>
                        <div className={styles.titleWrapper}>
                            <span className={styles.titleMain}>Touch</span>
                            <span className={styles.titleMainStroke}>Touch</span>
                        </div>
                    </h1>
                </section>

                <div
                    className={styles.grid}
                    style={{
                        transform: 'translate(var(--mouse-x, 0), var(--mouse-y, 0))',
                        transition: 'transform 0.1s ease-out'
                    }}
                >
                    <div className={styles.cardWrapper}>
                        <a href="https://github.com/mwarrc/PocketScore/issues" target="_blank" rel="noopener noreferrer" className={styles.card}>
                            <div className={styles.iconContainer}>
                                <span className="material-symbols-rounded">bug_report</span>
                            </div>
                            <h2>Report Bugs</h2>
                            <p>Found a system anomaly? File a report on our secure GitHub infrastructure to maintain engine stability.</p>
                            <span style={{ fontSize: '24px', fontWeight: 950, marginTop: 'auto' }}>SUBMIT_ISSUE →</span>
                        </a>
                        <div className={styles.cardShadow}></div>
                    </div>

                    <div className={styles.cardWrapper}>
                        <a href="https://github.com/mwarrc/PocketScore/discussions" target="_blank" rel="noopener noreferrer" className={styles.card}>
                            <div className={styles.iconContainer}>
                                <span className="material-symbols-rounded">forum</span>
                            </div>
                            <h2>Community</h2>
                            <p>Discuss match mechanics, request hardware support, or connect with other operators in the hub.</p>
                            <span style={{ fontSize: '24px', fontWeight: 950, marginTop: 'auto' }}>OPEN_HUB →</span>
                        </a>
                        <div className={styles.cardShadow}></div>
                    </div>

                    <div className={styles.cardWrapper}>
                        <div className={styles.card}>
                            <div className={styles.iconContainer}>
                                <span className="material-symbols-rounded">alternate_email</span>
                            </div>
                            <h2>Direct Link</h2>
                            <p>For strategic partnerships, security disclosures, or direct architectural inquiries.</p>
                            <div className={styles.email}>mwarrc.dev@gmail.com</div>
                            <span style={{ fontSize: '24px', fontWeight: 950, marginTop: 'auto', opacity: 0.3 }}>SECURE_CHANNEL</span>
                        </div>
                        <div className={styles.cardShadow}></div>
                    </div>

                    <div className={styles.cardWrapper}>
                        <div className={styles.card}>
                            <div className={styles.iconContainer}>
                                <span className="material-symbols-rounded">terminal</span>
                            </div>
                            <h2>Lead Architect</h2>
                            <p>Connect directly with Mwariri Clinton for technical deep-dives or ecosystem collaboration.</p>

                            <div className={styles.socialGrid}>
                                <a href="https://github.com/mwarrc" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GITHUB</a>
                                <a href="https://x.com/mwarrc" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>TWITTER</a>
                                <a href="https://instagram.com/mwarrc" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>INSTA</a>
                            </div>

                            <span style={{ fontSize: '24px', fontWeight: 950, marginTop: 'auto' }}>@MWARRC →</span>
                        </div>
                        <div className={styles.cardShadow}></div>
                    </div>
                </div>

                <section className={styles.dotGridSection}>
                    <div className={styles.dotGrid}>
                        {[...Array(120)].map((_, i) => (
                            <div key={i} className={`${styles.dot} ${Math.random() > 0.95 ? styles.dotActive : ''}`}></div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
