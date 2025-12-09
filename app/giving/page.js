import Link from 'next/link';
import { BookOpen, ArrowRight, CreditCard, Wallet, Heart } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import GivingCard from '@/components/GivingCard';
import styles from './page.module.css';

export const metadata = {
    title: 'Give Online - RCCG Covenant Chapel Mega Zone',
    description: 'Support God\'s work through tithes, offerings, and special giving. Experience the joy of generosity at Covenant Chapel Mega Zone.',
};

const givingCategories = [
    {
        id: 'tithe',
        title: 'Tithes & Offering',
        description: 'Honor the Lord with your wealth and with the firstfruits of all your produce.',
        iconName: 'Gift',
        accountName: 'RCCG Covenant Chapel',
        accountNumber: '1227828231',
        bankName: 'Zenith Bank'
    },
    {
        id: 'vows',
        title: 'Vows & Pledges',
        description: 'When you make a vow to God, do not delay to fulfill it.',
        iconName: 'Heart',
        accountName: 'RCCG Covenant Chapel Programs',
        accountNumber: '0040117504',
        bankName: 'Premium Trust Bank'
    },
    {
        id: 'fishing',
        title: "Let's Go A-Fishing",
        description: 'Support our evangelism and outreach efforts to win souls for Christ.',
        iconName: 'Anchor',
        accountName: 'RCCG Covenant Chapel Let\'s Go A Fishing',
        accountNumber: '0040221117',
        bankName: 'Premium Trust Bank'
    }
];

export default function GivingPage() {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.heroLabel}>Online Giving</span>
                        <h1 className={styles.heroTitle}>
                            The Joy of<br />
                            <span className={styles.heroAccent}>Generosity</span>
                        </h1>
                        <div className={styles.scripture}>
                            <BookOpen size={24} />
                            <p>
                                "Give, and it will be given to you. A good measure, pressed down, shaken
                                together and running over, will be poured into your lap."
                            </p>
                            <span>— Luke 6:38</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Giving Options */}
            <section className={`section ${styles.givingSection}`}>
                <div className="container">
                    <SectionHeader
                        subtitle="Ways to Give"
                        title="Support God's Work"
                        description="Your generosity enables us to continue spreading the love of Christ and serving our community."
                    />
                    <div className={styles.givingGrid}>
                        {givingCategories.map((category) => (
                            <GivingCard key={category.id} category={category} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Info */}
            <section className={`section bg-cream ${styles.infoSection}`}>
                <div className="container">
                    <div className={styles.infoGrid}>
                        <div className={styles.infoCard}>
                            <Wallet size={32} />
                            <h4>Secure Giving</h4>
                            <p>All bank transfers are secure and receipts can be provided upon request.</p>
                        </div>
                        <div className={styles.infoCard}>
                            <CreditCard size={32} />
                            <h4>Multiple Options</h4>
                            <p>Transfer via mobile banking, USSD, or visit any bank branch.</p>
                        </div>
                        <div className={styles.infoCard}>
                            <Heart size={32} />
                            <h4>Every Gift Matters</h4>
                            <p>No amount is too small. Every gift is received with gratitude and used wisely.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Have Questions About Giving?</h2>
                        <p>
                            We're happy to help with any questions about tithes, offerings,
                            or other ways to support our ministry.
                        </p>
                        <Link href="/contact" className="btn btn-white btn-lg">
                            Contact Us
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
