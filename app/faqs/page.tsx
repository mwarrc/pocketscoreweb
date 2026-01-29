'use client';

import { useCallback } from "react";
import Header from "../components/Header";
import styles from "./faqs.module.css";

export default function FAQs() {
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

    const faqs = [
        { q: "Is it really free?", a: "Yes, PocketScore is open source (MIT) and free of charge. No hidden fees, no subscriptions. Built for the community." },
        { q: "Does it work offline?", a: "100%. All your data is stored locally on your device's hardware. NO internet connection is required for high-performance scorekeeping." },
        { q: "Which platforms are supported?", a: "Currently, we focus on Android native performance. An iOS implementation is in strategic consideration for future expansion." },
        { q: "How can I contribute?", a: "Visit our direct GitHub repository to access the source code, bug reports, and strategic discussions. We value all operators' input." },
        { q: "Is my data secure?", a: "Absolutely. We use encryption at rest for your local database. Your match history never leaves your device." }
    ];

    return (
        <div className="page-container" ref={containerRef}>
            <Header />

            <div className={styles.bgDecor}></div>

            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className={styles.badgeWrapper}>
                        <div className={styles.badge}>
                            <span>V0.1.0_Documentation</span>
                        </div>
                        <div className={styles.badgeAccent}></div>
                    </div>

                    <h1 className={styles.title}>
                        <div className={styles.titleWrapper}>
                            <span className={styles.titleMain}>Core</span>
                            <span className={styles.titleMainStroke}>Core</span>
                        </div>
                        <div className={styles.titleWrapper}>
                            <span className={styles.titleMain}>Queries</span>
                            <span className={styles.titleMainStroke}>Queries</span>
                        </div>
                    </h1>
                </section>

                <div className={styles.faqList}>
                    {faqs.map((faq, i) => (
                        <div key={i} className={styles.faqItemWrapper}>
                            <div className={styles.faqItem}>
                                <div className={styles.index}>0{i + 1}</div>
                                <div className={styles.content}>
                                    <h2 className={styles.question}>{faq.q}</h2>
                                    <p className={styles.answer}>{faq.a}</p>
                                </div>
                                <span className={`material-symbols-rounded ${styles.icon}`}>
                                    add
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <section className={styles.dotGridSection}>
                    <div className={styles.dotGrid}>
                        {[...Array(60)].map((_, i) => (
                            <div key={i} className={styles.dot}></div>
                        ))}
                    </div>
                </section>
            </main>
        </div >
    );
}
