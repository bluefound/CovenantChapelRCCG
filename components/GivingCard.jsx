'use client';
import { useState } from 'react';
import { Gift, Heart, Anchor, Check, Copy } from 'lucide-react';
import styles from './GivingCard.module.css';

const iconMap = {
    Gift: Gift,
    Heart: Heart,
    Anchor: Anchor,
};

export default function GivingCard({ category }) {
    const [copied, setCopied] = useState(false);
    const Icon = iconMap[category.iconName] || Gift;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(category.accountNumber);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div className={styles.givingCard}>
            <div className={styles.cardIcon}>
                <Icon size={32} />
            </div>
            <h3>{category.title}</h3>
            <p className={styles.cardDescription}>{category.description}</p>

            <div className={styles.accountDetails}>
                <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Bank Name</span>
                    <span className={styles.detailValue}>{category.bankName}</span>
                </div>
                <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Account Name</span>
                    <span className={styles.detailValue}>{category.accountName}</span>
                </div>
                <div className={styles.detailRow}>
                    <span className={styles.detailLabel}>Account Number</span>
                    <span className={styles.detailValue}>{category.accountNumber}</span>
                </div>
            </div>

            <button
                className={`${styles.copyBtn} ${copied ? styles.copied : ''}`}
                onClick={handleCopy}
            >
                {copied ? (
                    <>
                        <Check size={18} />
                        Copied!
                    </>
                ) : (
                    <>
                        <Copy size={18} />
                        Copy Account Number
                    </>
                )}
            </button>
        </div>
    );
}
