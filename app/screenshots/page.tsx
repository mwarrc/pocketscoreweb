'use client';

import Image from "next/image";
import { useState, useCallback, useEffect, useMemo } from "react";
import Header from "../components/Header";
import styles from "./screenshots.module.css";

// Generate 31 screenshots programmatically
const SCREENSHOTS_DATA = Array.from({ length: 31 }, (_, i) => ({
    src: `/screenshots/ss_${i + 1}.jpg`,
    alt: `System Visual ${i + 1}`,
    title: `VISUAL_LOG_${(i + 1).toString().padStart(2, '0')}`,
    desc: "Archive capture from the latest stable build. M3 Expressive engine in full operation.",
    tags: ["_SYS_DUMP", "UI_VERIFIED"]
}));

export default function Screenshots() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    // Handle ESC key for lightbox
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsLightboxOpen(false);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

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

            {/* LIGHTBOX OVERLAY */}
            {isLightboxOpen && (
                <div className={styles.lightboxOverlay} onClick={() => setIsLightboxOpen(false)}>
                    <button className={styles.closeButton} aria-label="Close Lightbox">
                        <span className="material-symbols-rounded">close</span>
                    </button>
                    <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={SCREENSHOTS_DATA[activeIndex].src}
                            alt={SCREENSHOTS_DATA[activeIndex].alt}
                            width={600}
                            height={1300}
                            className={styles.lightboxImage}
                            quality={100}
                            priority
                        />
                    </div>
                </div>
            )}

            <main className={styles.main}>
                <div className={styles.hero}>
                    <div className={styles.badgeWrapper}>
                        <div className={styles.badge}>
                            <span>V0.1.1_Archive</span>
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
                            <div className={styles.phoneFrame} onClick={() => setIsLightboxOpen(true)}>
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
