import Link from 'next/link';
import { Heart, Target, Eye, Star, BookOpen, Users, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import styles from './page.module.css';

export const metadata = {
    title: 'About Us - RCCG Covenant Chapel Mega Zone',
    description: 'Learn about our history, vision, mission, and pastoral team at Covenant Chapel Mega Zone - A Church Filled With Love.',
};

const coreValues = [
    {
        icon: Heart,
        title: 'Love',
        description: 'The heartbeat of everything we do. We love God and love people unconditionally.'
    },
    {
        icon: BookOpen,
        title: 'Faith',
        description: 'Unwavering trust in God\'s promises and His Word as our ultimate guide.'
    },
    {
        icon: Star,
        title: 'Holiness',
        description: 'Living lives that honor God in purity, integrity, and righteousness.'
    },
    {
        icon: Users,
        title: 'Service',
        description: 'Using our gifts and talents to bless others and build God\'s kingdom.'
    },
    {
        icon: Target,
        title: 'Spiritual Growth',
        description: 'Continual transformation in Christ through the Word, prayer, and fellowship.'
    }
];

const leaders = [
    {
        name: 'Pastor [Name]',
        position: 'Parish Pastor',
        bio: 'A shepherd after God\'s heart, committed to nurturing believers and spreading the Gospel with love and compassion.',
        image: null
    },
    {
        name: 'Pastor [Name]',
        position: 'Assistant Pastor',
        bio: 'Dedicated to teaching God\'s Word and supporting the spiritual growth of our congregation.',
        image: null
    },
    {
        name: 'Minister [Name]',
        position: 'Worship Minister',
        bio: 'Leading our church into God\'s presence through anointed worship and praise.',
        image: null
    }
];

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.heroLabel}>About Us</span>
                        <h1 className={styles.heroTitle}>
                            A Church Filled<br />
                            <span className={styles.heroAccent}>With Love</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Discover who we are, what we believe, and why we exist.
                        </p>
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className={`section ${styles.history}`}>
                <div className="container">
                    <div className={styles.historyGrid}>
                        <div className={styles.historyContent}>
                            <SectionHeader
                                subtitle="Our Story"
                                title="The Journey So Far"
                                centered={false}
                            />
                            <div className={styles.historyText}>
                                <p>
                                    <strong>Covenant Chapel Mega Zone</strong> is a parish of The Redeemed Christian Church of God,
                                    a global ministry founded by Pastor E.A. Adeboye. Our parish was birthed out of a burning
                                    desire to create a worship environment where God's love is tangible, His presence is evident,
                                    and every soul finds a place to belong.
                                </p>
                                <p>
                                    Over the years, we have grown from a small group of believers into a vibrant community of
                                    worshippers, united by our shared love for Christ and commitment to serve one another.
                                    Every service, every gathering, every outreach is driven by one purpose: to share the love
                                    of God with all people.
                                </p>
                                <p>
                                    Today, we continue to build on this foundation, raising disciples who will impact their
                                    world for Jesus Christ. Our journey is one of faith, love, and unwavering devotion to
                                    God's calling.
                                </p>
                            </div>
                        </div>
                        <div className={styles.historyImage}>
                            <div className={styles.imagePlaceholder}>
                                <BookOpen size={64} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className={`section bg-cream ${styles.visionMission}`}>
                <div className="container">
                    <div className={styles.vmGrid}>
                        <div className={styles.vmCard}>
                            <div className={styles.vmIcon}>
                                <Eye size={32} />
                            </div>
                            <h3>Our Vision</h3>
                            <p>
                                To raise a generation of believers who are deeply rooted in God's Word, empowered by the
                                Holy Spirit, and committed to spreading the love of Christ across the world.
                            </p>
                        </div>
                        <div className={styles.vmCard}>
                            <div className={styles.vmIcon}>
                                <Target size={32} />
                            </div>
                            <h3>Our Mission</h3>
                            <p>
                                To nurture spiritual growth through sound biblical teaching, fervent prayer, genuine
                                fellowship, and compassionate service to all people regardless of their background.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className={`section ${styles.values}`}>
                <div className="container">
                    <SectionHeader
                        subtitle="What We Stand For"
                        title="Our Core Values"
                        description="These principles guide everything we do as a church family."
                    />
                    <div className={styles.valuesGrid}>
                        {coreValues.map((value, index) => (
                            <div key={index} className={styles.valueCard}>
                                <div className={styles.valueIcon}>
                                    <value.icon size={28} />
                                </div>
                                <h4>{value.title}</h4>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className={`section bg-cream ${styles.leadership}`}>
                <div className="container">
                    <SectionHeader
                        subtitle="Meet Our Team"
                        title="Pastoral Leadership"
                        description="Servants of God committed to shepherding our congregation with love and wisdom."
                    />
                    <div className={styles.leadersGrid}>
                        {leaders.map((leader, index) => (
                            <div key={index} className={styles.leaderCard}>
                                <div className={styles.leaderImage}>
                                    <Heart size={48} />
                                </div>
                                <div className={styles.leaderInfo}>
                                    <h4>{leader.name}</h4>
                                    <span className={styles.leaderPosition}>{leader.position}</span>
                                    <p>{leader.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Ready to Be Part of Our Family?</h2>
                        <p>
                            We'd love to welcome you to Covenant Chapel Mega Zone.
                            Come experience the love of God with us.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className="btn btn-white btn-lg">
                                Plan Your Visit
                                <ArrowRight size={20} />
                            </Link>
                            <Link href="/groups" className="btn btn-secondary btn-lg" style={{ borderColor: 'white', color: 'white' }}>
                                Join a Ministry
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
