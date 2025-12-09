'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import styles from './Header.module.css';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Groups', href: '/groups' },
    { name: 'Events', href: '/events' },
    { name: 'Media', href: '/media' },
    { name: 'Giving', href: '/giving' },
    { name: 'Contact', href: '/contact' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoIcon}>
                        <Image
                            src="/images/logo.png"
                            alt="Covenant Chapel Logo"
                            width={48}
                            height={48}
                            priority
                        />
                    </div>
                    <div className={styles.logoText}>
                        <span className={styles.logoName}>Covenant Chapel</span>
                        <span className={styles.logoSubtext}>Mega Zone</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className={styles.desktopNav}>
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href} className={styles.navLink}>
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className={styles.headerActions}>
                    <Link href="/contact" className={`btn btn-primary ${styles.ctaBtn}`}>
                        Join Us
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={styles.mobileMenuBtn}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ''}`}>
                <nav className={styles.mobileNavLinks}>
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={styles.mobileNavLink}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className={`btn btn-primary ${styles.mobileCta}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Join Us Today
                    </Link>
                </nav>
            </div>
        </header>
    );
}
