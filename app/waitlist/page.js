'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Mail, Bell, Heart, Calendar, CheckCircle } from 'lucide-react';
import { submitToSheet } from '@/lib/sheets';
import styles from './page.module.css';

export default function WaitlistPage() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // Launch date: December 21, 2025
    const launchDate = new Date('2025-12-21T00:00:00').getTime();

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = launchDate - now;

            if (distance > 0) {
                setCountdown({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [launchDate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        await submitToSheet('waitlist', { email });

        setIsSubmitting(false);
        setSubmitted(true);
    };

    return (
        <div className={styles.waitlistPage}>
            <div className={styles.container}>
                {/* Logo */}
                <div className={styles.logoSection}>
                    <div className={styles.logoWrapper}>
                        <Image
                            src="/images/logo.png"
                            alt="Covenant Chapel Logo"
                            width={120}
                            height={120}
                            priority
                            className={styles.logo}
                        />
                    </div>
                    <h1 className={styles.churchName}>Covenant Chapel</h1>
                    <span className={styles.tagline}>Mega Zone</span>
                </div>

                {/* Coming Soon Message */}
                <div className={styles.messageSection}>
                    <span className={styles.badge}>
                        <Heart size={16} />
                        A Church Filled With Love
                    </span>
                    <h2 className={styles.headline}>
                        Something Beautiful<br />
                        <span className={styles.accent}>is Coming</span>
                    </h2>
                    <p className={styles.description}>
                        We're preparing a digital home for our church family. Join the waitlist
                        to be the first to know when we launch!
                    </p>
                </div>

                {/* Countdown Timer */}
                <div className={styles.countdownSection}>
                    <div className={styles.launchDate}>
                        <Calendar size={18} />
                        <span>Launching December 21, 2025</span>
                    </div>
                    <div className={styles.countdown}>
                        <div className={styles.countdownItem}>
                            <span className={styles.countdownNumber}>{countdown.days}</span>
                            <span className={styles.countdownLabel}>Days</span>
                        </div>
                        <div className={styles.countdownItem}>
                            <span className={styles.countdownNumber}>{countdown.hours}</span>
                            <span className={styles.countdownLabel}>Hours</span>
                        </div>
                        <div className={styles.countdownItem}>
                            <span className={styles.countdownNumber}>{countdown.minutes}</span>
                            <span className={styles.countdownLabel}>Minutes</span>
                        </div>
                        <div className={styles.countdownItem}>
                            <span className={styles.countdownNumber}>{countdown.seconds}</span>
                            <span className={styles.countdownLabel}>Seconds</span>
                        </div>
                    </div>
                </div>

                {/* Waitlist Form */}
                <div className={styles.formSection}>
                    {submitted ? (
                        <div className={styles.successMessage}>
                            <div className={styles.successIcon}>
                                <CheckCircle size={48} />
                            </div>
                            <h3>You're on the list!</h3>
                            <p>We'll notify you the moment we launch. Thank you for your patience!</p>
                        </div>
                    ) : (
                        <>
                            <form onSubmit={handleSubmit} className={styles.waitlistForm}>
                                <div className={styles.inputGroup}>
                                    <Mail className={styles.inputIcon} size={20} />
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className={styles.emailInput}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className={styles.submitBtn}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        'Joining...'
                                    ) : (
                                        <>
                                            <Bell size={18} />
                                            Notify Me
                                        </>
                                    )}
                                </button>
                            </form>
                            <p className={styles.formNote}>
                                We respect your privacy. No spam, ever.
                            </p>
                        </>
                    )}
                </div>

                {/* Footer */}
                <div className={styles.footer}>
                    <p>&copy; 2025 RCCG Covenant Chapel Mega Zone</p>
                    <p className={styles.verse}>
                        "For I know the plans I have for you..." — Jeremiah 29:11
                    </p>
                </div>
            </div>
        </div>
    );
}
