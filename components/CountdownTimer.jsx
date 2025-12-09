'use client';
import { useState, useEffect } from 'react';
import styles from './CountdownTimer.module.css';

function getNextSunday() {
    const now = new Date();
    const nextSunday = new Date(now);
    const daysUntilSunday = (7 - now.getDay()) % 7;

    if (daysUntilSunday === 0 && now.getHours() >= 12) {
        nextSunday.setDate(now.getDate() + 7);
    } else if (daysUntilSunday === 0) {
        // It's Sunday and before noon
    } else {
        nextSunday.setDate(now.getDate() + daysUntilSunday);
    }

    nextSunday.setHours(9, 0, 0, 0);
    return nextSunday;
}

function calcTimeLeft(targetDate) {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
}

export default function CountdownTimer({ title = "Next Sunday Service" }) {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const targetDate = getNextSunday();

        const interval = setInterval(() => {
            setTimeLeft(calcTimeLeft(targetDate));
        }, 1000);

        setTimeLeft(calcTimeLeft(targetDate));

        return () => clearInterval(interval);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className={styles.countdown}>
            <h4 className={styles.title}>{title}</h4>
            <div className={styles.timer}>
                <div className={styles.timeBlock}>
                    <span className={styles.number}>{String(timeLeft.days).padStart(2, '0')}</span>
                    <span className={styles.label}>Days</span>
                </div>
                <span className={styles.separator}>:</span>
                <div className={styles.timeBlock}>
                    <span className={styles.number}>{String(timeLeft.hours).padStart(2, '0')}</span>
                    <span className={styles.label}>Hours</span>
                </div>
                <span className={styles.separator}>:</span>
                <div className={styles.timeBlock}>
                    <span className={styles.number}>{String(timeLeft.minutes).padStart(2, '0')}</span>
                    <span className={styles.label}>Minutes</span>
                </div>
                <span className={styles.separator}>:</span>
                <div className={styles.timeBlock}>
                    <span className={styles.number}>{String(timeLeft.seconds).padStart(2, '0')}</span>
                    <span className={styles.label}>Seconds</span>
                </div>
            </div>
        </div>
    );
}
