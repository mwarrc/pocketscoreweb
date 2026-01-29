'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";
import Header from "./components/Header";

export default function Home() {
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cycleTimer = useRef<NodeJS.Timeout | null>(null);

  const screenshots = [
    { src: "/screenshots/ss_10.jpg", alt: "Setup Players Screen" },
    { src: "/screenshots/ss_12.jpg", alt: "Live Scoreboard" },
    { src: "/screenshots/ss_16.jpg", alt: "Match History Screen" },
    { src: "/screenshots/ss_17.jpg", alt: "Rules & Settings" },
    { src: "/screenshots/ss_1.jpg", alt: "Pool Setup" },
    { src: "/screenshots/ss_5.jpg", alt: "Game Logic" }
  ];

  useEffect(() => {
    const speed = isHovering ? 200 : 4000;
    cycleTimer.current = setInterval(() => {
      setActiveScreenshot((prev) => (prev + 1) % screenshots.length);
    }, speed);
    return () => {
      if (cycleTimer.current) clearInterval(cycleTimer.current);
    };
  }, [isHovering, screenshots.length]);

  // Parallax mouse effect for brutalism
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      containerRef.current.style.setProperty('--mouse-x', `${x}px`);
      containerRef.current.style.setProperty('--mouse-y', `${y}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <Header />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.badgeWrapper}>
              <div className={styles.badge}>
                <span>Version 0.1.0 Alpha</span>
              </div>
              <div className={styles.badgeAccent}></div>
            </div>

            <h1 className={styles.title}>
              <div className={styles.titleWrapper}>
                <span className={styles.titleMain}>Pocket</span>
                <span className={styles.titleMainStroke}>Pocket</span>
              </div>
              <div className={styles.titleWrapper}>
                <span className={styles.titleMain}>Score</span>
                <span className={styles.titleMainStroke}>Score</span>
              </div>
              <span className={styles.titleSub}>The Boldest Core Keeper</span>
            </h1>

            <p className={styles.description}>
              A hyper-expressive, open-source score-keeping engine.
              Built with M3 Expressive logic for those who take their games seriously.
              No cloud. No tracking. Pure local power.
            </p>

            <div className={styles.ctaButtons}>
              <div className={styles.btnWrapper}>
                <a
                  href="https://github.com/mwarrc/PocketScore/releases/download/v-0.1.0/PocketScore.apk"
                  className={styles.primaryButton}
                  download
                >
                  Grab APK
                </a>
                <div className={styles.btnShadow}></div>
              </div>

              <div className={styles.btnWrapper}>
                <Link href="/screenshots" className={styles.secondaryButton}>
                  Visuals
                </Link>
                <div className={styles.btnShadow}></div>
              </div>

              <div className={styles.btnWrapper}>
                <Link href="/roadmap" className={styles.secondaryButton}>
                  Vision
                </Link>
                <div className={styles.btnShadow}></div>
              </div>
            </div>
          </div>

          <div
            className={styles.heroVisual}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className={styles.visualContainer}>
              <div className={styles.floatingShape1}></div>
              <div className={styles.floatingShape2}></div>
              <div className={styles.phoneFrame}>
                <div className={styles.phoneScreen}>
                  {screenshots.map((screenshot, index) => (
                    <Image
                      key={screenshot.src}
                      src={screenshot.src}
                      alt={screenshot.alt}
                      width={400}
                      height={866}
                      className={`${styles.screenshot} ${index === activeScreenshot ? styles.screenshotActive : ''}`}
                      priority={index === 0}
                    />
                  ))}
                </div>
              </div>
              <div className={styles.visualAccent}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Brutal Features Section */}
      <section className={styles.features}>
        <div className={styles.stickyHeader}>
          <h2 className={styles.verticalTitle}>FEATURES_</h2>
        </div>

        <div className={styles.featureGrid}>
          <div className={`${styles.featureBlock} ${styles.cyanBlock}`}>
            <div className={styles.blockInner}>
              <span className="material-symbols-rounded">speed</span>
              <h3>Hyper Performance</h3>
              <p>Direct Kotlin implementation. No heavy frameworks. Zero lag scoring.</p>
              <div className={styles.blockDecoration}></div>
            </div>
          </div>

          <div className={`${styles.featureBlock} ${styles.magentaBlock}`}>
            <div className={styles.blockInner}>
              <span className="material-symbols-rounded">palette</span>
              <h3>Dynamic M3</h3>
              <p>Expressive styling that adapts to your vibe. Material You in full effect.</p>
              <div className={styles.blockDecoration}></div>
            </div>
          </div>

          <div className={`${styles.featureBlock} ${styles.yellowBlock}`}>
            <div className={styles.blockInner}>
              <span className="material-symbols-rounded">lan</span>
              <h3>Zero Cloud</h3>
              <p>Everything stays on your metal. Private by default, open by choice.</p>
              <div className={styles.blockDecoration}></div>
            </div>
          </div>

          <div className={`${styles.featureBlock} ${styles.whiteBlock}`}>
            <div className={styles.blockInner}>
              <span className="material-symbols-rounded">history</span>
              <h3>Deep Stats</h3>
              <p>Every match archived. Every victory tracked with precision metrics.</p>
              <div className={styles.blockDecoration}></div>
            </div>
          </div>
        </div>
      </section>

      {/* "Build" Section - High Impact */}
      <section className={styles.buildSection}>
        <div className={styles.buildContent}>
          <div className={styles.buildText}>
            <h2 className={styles.buildTitle}>ENGINEERED FOR THE BOLD</h2>
            <div className={styles.techStack}>
              <div className={styles.techItem}>Kotlin 2.0</div>
              <div className={styles.techItem}>Jetpack Compose</div>
              <div className={styles.techItem}>Room DB</div>
              <div className={styles.techItem}>Material 3</div>
            </div>
            <p className={styles.buildDesc}>
              We didn't just build a scorekeeper. We built a high-performance engine
              designed to withstand the most intense sessions.
            </p>
          </div>

          <div className={styles.buildGraphic}>
            <div className={styles.boxGrid}>
              {[...Array(9)].map((_, i) => (
                <div key={i} className={styles.animatedBox}></div>
              ))}
            </div>
            <div className={styles.graphicOverlay}>STABLE_V0.1</div>
          </div>
        </div>
      </section>

      {/* Dynamic Highlights Section */}
      <section className={styles.highlights}>
        <div className={styles.highlightMarquee}>
          <div className={styles.marqueeContent}>
            <span>BUILT DIFFERENT • OPEN SOURCE • ZERO TRACKING • NATIVE PERFORMANCE • </span>
            <span>BUILT DIFFERENT • OPEN SOURCE • ZERO TRACKING • NATIVE PERFORMANCE • </span>
          </div>
        </div>

        <div className={styles.highlightGrid}>
          <div className={styles.highlightCardWrapper}>
            <div className={styles.highlightCard}>
              <div className={styles.cardGlow}></div>
              <div className={styles.cardIndex}>01</div>
              <div className={styles.highlightIconContainer}>
                <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.highlightIcon}>
                  <path d="M9 8H23C24.1 8 25 8.9 25 10V17C25 22.5 20.5 26 16 26C11.5 26 7 22.5 7 17V10C7 8.9 7.9 8 9 8Z" fill="currentColor" />
                  <rect x="13" y="12" width="1" height="6" fill="white" fillOpacity="0.8" />
                  <rect x="15" y="12" width="1" height="6" fill="white" fillOpacity="0.8" />
                  <rect x="17" y="12" width="1" height="6" fill="white" fillOpacity="0.8" />
                  <rect x="19" y="12" width="1" height="6" fill="white" fillOpacity="0.8" />
                  <path d="M10.5 17.5L19.5 12.5" stroke="white" strokeWidth="1" strokeOpacity="0.9" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className={styles.highlightTitle}>Authentic Code</h3>
              <p className={styles.highlightDesc}>Direct Kotlin implementation. No wrappers. Just raw performance and expressive M3 UI logic.</p>
            </div>
            <div className={styles.cardShadow}></div>
          </div>

          <div className={styles.highlightCardWrapper}>
            <div className={styles.highlightCard}>
              <div className={styles.cardGlow}></div>
              <div className={styles.cardIndex}>02</div>
              <span className={`material-symbols-rounded ${styles.highlightIcon}`}>security</span>
              <h3 className={styles.highlightTitle}>Bunker Secure</h3>
              <p className={styles.highlightDesc}>Encryption at rest for your local DB. Your match history stays on your device, exactly where it belongs.</p>
            </div>
            <div className={styles.cardShadow}></div>
          </div>

          <div className={styles.highlightCardWrapper}>
            <div className={styles.highlightCard}>
              <div className={styles.cardGlow}></div>
              <div className={styles.cardIndex}>03</div>
              <span className={`material-symbols-rounded ${styles.highlightIcon}`}>bolt</span>
              <h3 className={styles.highlightTitle}>Zero Latency</h3>
              <p className={styles.highlightDesc}>Optimized for instant point entry. Because every second counts when the competition is heating up.</p>
            </div>
            <div className={styles.cardShadow}></div>
          </div>
        </div>
      </section>

      <section className={styles.dotGridSection}>
        <div className={styles.dotGrid}>
          {[...Array(120)].map((_, i) => (
            <div key={i} className={`${styles.dot} ${Math.random() > 0.9 ? styles.dotActive : ''}`}></div>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerBrute}>
          <div className={styles.footerLeft}>
            <div className={styles.footerLogo}>POCKET_SCORE</div>
            <p>The definitive open-source scoring engine.</p>
          </div>

          <div className={styles.footerRight}>
            <a
              href="https://github.com/mwarrc/PocketScore"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.repoLink}
            >
              <span className="material-symbols-rounded">terminal</span>
              SOURCE_CODE
              <span className={styles.linkArrow}>→</span>
            </a>

            <div className={styles.footerMeta}>
              <span>V0.1.0_ALPHA</span>
              <span className={styles.metaDot}></span>
              <span>EST. 2026</span>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.brutalLine}></div>
          <div className={styles.legal}>
            <span>NO COOKIES • NO TRACKING • NO NONSENSE</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
