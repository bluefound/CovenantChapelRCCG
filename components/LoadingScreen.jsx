'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './LoadingScreen.module.css';

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        // Start fade out after 2.5 seconds
        const fadeTimer = setTimeout(() => {
            setIsFading(true);
        }, 2500);

        // Remove loading screen after fade animation
        const removeTimer = setTimeout(() => {
            setIsLoading(false);
        }, 3200);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div className={`${styles.loadingScreen} ${isFading ? styles.fadeOut : ''}`}>
            <div className={styles.content}>
                {/* Logo */}
                <div className={styles.logoContainer}>
                    <Image
                        src="/images/logo.png"
                        alt="Covenant Chapel Logo"
                        width={150}
                        height={150}
                        priority
                        className={styles.logo}
                    />
                </div>

                {/* Church Name */}
                <h1 className={styles.churchName}>Covenant Chapel</h1>
                <span className={styles.tagline}>Mega Zone</span>

                {/* Loading Animation */}
                <div className={styles.loader}>
                    <div className={styles.loaderDot}></div>
                    <div className={styles.loaderDot}></div>
                    <div className={styles.loaderDot}></div>
                </div>

                {/* Welcome Message */}
                <p className={styles.welcomeMessage}>We're glad you made it</p>
            </div>
        </div>
    );
}
