'use client';

import { useCallback } from "react";
import Header from "../components/Header";
import styles from "./roadmap.module.css";

const ROADMAP_DATA = [
    {
        category: "Recently Deployed",
        features: [
            {
                title: "Active Roster",
                desc: "Persistent player pool management and quick-select roster system.",
                icon: "id_card",
                status: "shipped"
            },
            {
                title: "Data Backup",
                desc: "Full snapshot system with export/import functionality via .pscore files.",
                icon: "save",
                status: "shipped"
            },
            {
                title: "Strict Mode",
                desc: "Enforced turn-based logic with competitive integrity tools.",
                icon: "gavel",
                status: "shipped"
            }
        ]
    },
    {
        category: "Currently Brewing",
        features: [
            {
                title: "Team Support",
                desc: "Group players into teams and track collective scores. Perfect for board games and team sports.",
                icon: "groups",
                status: "brewing"
            },
            {
                title: "Real-time Sync",
                desc: "Join games with a QR code and sync scores across multiple devices instantly.",
                icon: "sync",
                status: "brewing"
            }
        ]
    },
    {
        category: "Coming Soon",
        features: [
            {
                title: "Advanced Statistics",
                desc: "Visual graphs and deep insights into your gaming sessions and player performance.",
                icon: "monitoring",
                status: "soon"
            },
            {
                title: "Game Timers",
                desc: "Integrated turn timers and game clocks to keep the pace of your sessions.",
                icon: "timer",
                status: "soon"
            },
            {
                title: "Social Sharing",
                desc: "Generate cool images of your game results for social media.",
                icon: "share",
                status: "soon"
            }
        ]
    },
    {
        category: "Future Strategy",
        features: [
            {
                title: "Tournament Mode",
                desc: "Organize brackets and track points across multiple games in a series.",
                icon: "emoji_events",
                status: "later"
            },
            {
                title: "Custom Themes",
                desc: "More color options and scoreboard styles to match your favorite games.",
                icon: "palette",
                status: "later"
            }
        ]
    }
];

export default function Roadmap() {
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
                            <span>V0.2.0_Development</span>
                        </div>
                        <div className={styles.badgeAccent}></div>
                    </div>

                    <h1 className={styles.title}>
                        <div className={styles.titleWrapper}>
                            <span className={styles.titleMain}>Engine</span>
                            <span className={styles.titleMainStroke}>Engine</span>
                        </div>
                        <div className={styles.titleWrapper}>
                            <span className={styles.titleMain}>Roadmap</span>
                            <span className={styles.titleMainStroke}>Roadmap</span>
                        </div>
                    </h1>
                </section>

                <div
                    className={styles.roadmapGrid}
                    style={{
                        transform: 'translate(var(--mouse-x, 0), var(--mouse-y, 0))',
                        transition: 'transform 0.1s ease-out'
                    }}
                >
                    {ROADMAP_DATA.map((cat, idx) => (
                        <div key={idx} className={styles.categorySection}>
                            <h2 className={styles.categoryTitle}>{cat.category}</h2>
                            {cat.features.map((feature, fIdx) => (
                                <div key={fIdx} className={styles.featureCardWrapper}>
                                    <div className={styles.featureCard}>
                                        <span className={`${styles.statusTag} ${feature.status === 'brewing' ? styles.statusBrewing :
                                            feature.status === 'soon' ? styles.statusSoon :
                                                feature.status === 'shipped' ? styles.statusShipped :
                                                    styles.statusLater
                                            }`}>
                                            {feature.status.toUpperCase()}
                                        </span>
                                        <span className={`material-symbols-rounded ${styles.featureIcon}`}>
                                            {feature.icon}
                                        </span>
                                        <h3 className={styles.featureTitle}>{feature.title}</h3>
                                        <p className={styles.featureDesc}>{feature.desc}</p>
                                    </div>
                                    <div className={styles.cardShadow}></div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <section className={styles.dotGridSection}>
                    <div className={styles.dotGrid}>
                        {[...Array(150)].map((_, i) => (
                            <div key={i} className={`${styles.dot} ${Math.random() > 0.9 ? styles.dotActive : ''}`}></div>
                        ))}
                    </div>
                </section>
            </main >
        </div >
    );
}
