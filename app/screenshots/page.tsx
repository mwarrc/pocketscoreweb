'use client';

import Image from "next/image";
import { useState, useCallback, useEffect, useMemo } from "react";
import Header from "../components/Header";
import styles from "./screenshots.module.css";

const SCREENSHOTS_DATA = [
    {
        src: "/screenshots/ss_10.jpg",
        alt: "Setup Players Screen",
        title: "Setup Players",
        desc: "Initialize match parameters and player identities. Scalable to any group size.",
        tags: ["_CORE_INIT", "UX_FLOW"]
    },
    {
        src: "/screenshots/ss_11.jpg",
        alt: "Player Selection",
        title: "Player Pool",
        desc: "Local archival database for rapid player retrieval and persistent stats tracking.",
        tags: ["_DB_LOCAL", "DATA_MGMT"]
    },
    {
        src: "/screenshots/ss_12.jpg",
        alt: "Scoreboard Screen",
        title: "Live Scoreboard",
        desc: "High-octane HUD tracking real-time status, turn sequences, and performance metrics.",
        tags: ["_HUD_LIVE", "ENGINE_ACTIVE"]
    },
    {
        src: "/screenshots/ss_13.jpg",
        alt: "Score Input",
        title: "Point Entry",
        desc: "Low-latency numerical interface engineered for rapid and precise value submission.",
        tags: ["_INPUT_IO", "SYSTEM_FEED"]
    },
    {
        src: "/screenshots/ss_16.jpg",
        alt: "Game History",
        title: "Match History",
        desc: "Deep-trace logs of every historical match session. Absolute data integrity.",
        tags: ["_LOG_TRACE", "DATA_ARCHIVE"]
    },
    {
        src: "/screenshots/ss_17.jpg",
        alt: "Settings Screen",
        title: "Rules & Settings",
        desc: "Global system configuration, turn-logic enforcement, and theme hybridization.",
        tags: ["_SYS_CONFIG", "M3_THEME"]
    },
    {
        src: "/screenshots/ss_5.jpg",
        alt: "Theme Customization",
        title: "Expressive UI",
        desc: "Dynamic color matching and spring-loaded transitions powered by the M3 engine.",
        tags: ["_VISUAL_FX", "UX_MOTION"]
    },
    {
        src: "/screenshots/ss_8.jpg",
        alt: "Round Summary",
        title: "Round Status",
        desc: "In-depth analytics and performance breakdowns at the conclusion of every game cycle.",
        tags: ["_DATA_FEED", "HUD_META"]
    }
];

export default function Screenshots() {
    const [activeIndex, setActiveIndex] = useState(0);

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

    const total = SCREENSHOTS_DATA.length;

    const navigate = useCallback((direction: number) => {
        setActiveIndex((prev) => (prev + direction + total) % total);
    }, [total]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') navigate(-1);
            if (e.key === 'ArrowRight') navigate(1);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [navigate]);

    const activeScreenshot = useMemo(() => SCREENSHOTS_DATA[activeIndex], [activeIndex]);

    return (
        <div className="page-container" ref={containerRef}>
            <Header />

            <div className={styles.bgDecor}></div>

            <main className={styles.main}>
                <div className={styles.hero}>
                    <div className={styles.badgeWrapper}>
                        <div className={styles.badge}>
                            <span>V0.1.0_Archive</span>
                        </div>
                        <div className={styles.badgeAccent}></div>
                    </div>

                    <h1 className={styles.title}>
                        <div className={styles.titleWrapper}>
                            <span className={styles.titleMain}>Visual</span>
                            <span className={styles.titleMainStroke}>Visual</span>
                        </div>
                        <div className={styles.titleWrapper}>
                            <span className={styles.titleMain}>Engine</span>
                            <span className={styles.titleMainStroke}>Engine</span>
                        </div>
                    </h1>
                </div>

                <div className={styles.gallery}>
                    <div className={styles.viewerContainer}>
                        <div className={styles.visualContainer} style={{
                            transform: 'translate(var(--mouse-x, 0), var(--mouse-y, 0))',
                            transition: 'transform 0.1s ease-out'
                        }}>
                            <div className={styles.floatingShape1}></div>
                            <div className={styles.floatingShape2}></div>
                            <div className={styles.phoneFrame}>
                                <div className={styles.phoneScreen}>
                                    {SCREENSHOTS_DATA.map((s, i) => (
                                        <Image
                                            key={s.src}
                                            src={s.src}
                                            alt={s.alt}
                                            width={400}
                                            height={866}
                                            className={`${styles.activeImage} ${activeIndex === i ? styles.imageActive : ''}`}
                                            priority={i === activeIndex}
                                            quality={90}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.info}>
                        <h2 className={styles.infoTitle}>{activeScreenshot.title}</h2>

                        <div className={styles.tags}>
                            {activeScreenshot.tags.map(tag => (
                                <span key={tag} className={styles.tag}>{tag}</span>
                            ))}
                        </div>

                        <p className={styles.infoDesc}>{activeScreenshot.desc}</p>

                        <div className={styles.navControls}>
                            <div className={styles.btnWrapper}>
                                <button onClick={() => navigate(-1)} className={styles.navBtn} aria-label="Previous">
                                    <span className="material-symbols-rounded">arrow_back</span>
                                </button>
                                <div className={styles.btnShadow}></div>
                            </div>

                            <span className={styles.counter}>{activeIndex + 1} / {total}</span>

                            <div className={styles.btnWrapper}>
                                <button onClick={() => navigate(1)} className={styles.navBtn} aria-label="Next">
                                    <span className="material-symbols-rounded">arrow_forward</span>
                                </button>
                                <div className={styles.btnShadow}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className={styles.gridSection}>
                    <h3 className={styles.gridHeading}>SYSTEM_CORE_DUMP_ARCHIVE</h3>
                    <div className={styles.grid}>
                        {SCREENSHOTS_DATA.map((s, i) => (
                            <div
                                key={i}
                                className={`${styles.thumbnailWrapper} ${activeIndex === i ? styles.thumbActive : ''}`}
                                onClick={() => setActiveIndex(i)}
                            >
                                <button className={styles.thumbnail}>
                                    <Image
                                        src={s.src}
                                        alt={s.alt}
                                        fill
                                        className={styles.thumbImage}
                                        quality={60}
                                    />
                                </button>
                                <div className={styles.thumbShadow}></div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
