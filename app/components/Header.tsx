'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Screenshots', href: '/screenshots' },
        { name: 'Roadmap', href: '/roadmap' },
        { name: 'Releases', href: '/releases' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'FAQs', href: '/faqs' },
    ];

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logoWrapper}>
                    <div className={styles.logo}>
                        <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logoIcon}>
                            {/* Main Pocket Shape - Precise App XML Path */}
                            <path
                                d="M9 8H23C24.1 8 25 8.9 25 10V17C25 22.5 20.5 26 16 26C11.5 26 7 22.5 7 17V10C7 8.9 7.9 8 9 8Z"
                                fill="currentColor"
                            />
                            {/* Inner Details */}
                            <rect x="13" y="12" width="1.2" height="6" fill="white" fillOpacity="0.9" />
                            <rect x="15" y="12" width="1.2" height="6" fill="white" fillOpacity="0.9" />
                            <rect x="17" y="12" width="1.2" height="6" fill="white" fillOpacity="0.9" />
                            <rect x="19" y="12" width="1.2" height="6" fill="white" fillOpacity="0.9" />
                            <path d="M10.5 17.5L19.5 12.5" stroke="white" strokeWidth="1.2" strokeOpacity="0.95" strokeLinecap="round" />
                        </svg>
                        <span className={styles.logoText}>PocketScore</span>
                    </div>
                    <div className={styles.logoShadow}></div>
                </Link>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <div className={styles.navModules}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`${styles.navLink} ${pathname === link.href ? styles.activeLink : ''}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className={styles.linkPrefix}>_</span>
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className={styles.actions}>
                        <a
                            href="https://github.com/mwarrc/PocketScore"
                            className={styles.githubButton}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="material-symbols-rounded">terminal</span>
                            SRC
                        </a>
                        <a
                            href="https://github.com/mwarrc/PocketScore/releases/download/v-0.1.0/PocketScore.apk"
                            className={styles.downloadButton}
                            download
                        >
                            <span className="material-symbols-rounded">download_for_offline</span>
                            APK_STABLE
                        </a>
                    </div>
                </nav>

                <button
                    className={styles.menuToggle}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="material-symbols-rounded">
                        {isMenuOpen ? 'close' : 'menu_open'}
                    </span>
                </button>
            </div>

            <div className={styles.headerScanningLine}></div>
        </header>
    );
}
