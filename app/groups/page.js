import Link from 'next/link';
import {
    Music,
    Users,
    Shield,
    Heart,
    Zap,
    Calendar,
    Mic,
    Theater,
    Award,
    Globe,
    ChevronRight
} from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { departments } from '@/lib/data';
import styles from './page.module.css';

export const metadata = {
    title: 'Ministries & Groups - RCCG Covenant Chapel Mega Zone',
    description: 'Discover our vibrant ministry departments. Join Choir, Youth, Ushering, Drama, and more. Find your place to serve at Covenant Chapel!',
};

const iconMap = {
    Music,
    Users,
    Shield,
    Heart,
    Zap,
    Calendar,
    Mic,
    Theater,
    Award,
    Globe,
};

export default function GroupsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.heroLabel}>Get Involved</span>
                        <h1 className={styles.heroTitle}>
                            Find Your Place<br />
                            <span className={styles.heroAccent}>To Serve</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Discover where you can use your gifts to build God's kingdom and grow alongside fellow believers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Groups Directory */}
            <section className={`section ${styles.directory}`}>
                <div className="container">
                    <SectionHeader
                        subtitle="Our Ministries"
                        title="Ministry Departments"
                        description="Every gift matters. Every person is needed. Find the ministry that fits your calling and start making an impact today."
                    />
                    <div className={styles.groupsGrid}>
                        {departments.map((dept) => {
                            const IconComponent = iconMap[dept.icon] || Heart;
                            return (
                                <Link key={dept.id} href={`/groups/${dept.slug}`} className={styles.groupCard}>
                                    <div className={styles.groupIcon}>
                                        <IconComponent size={32} />
                                    </div>
                                    <div className={styles.groupContent}>
                                        <h3 className={styles.groupTitle}>{dept.name}</h3>
                                        <p className={styles.groupDescription}>{dept.description}</p>
                                        <div className={styles.groupMeta}>
                                            <span className={styles.meetingTime}>{dept.meetingTime}</span>
                                        </div>
                                        <span className={styles.groupLink}>
                                            Learn More & Join <ChevronRight size={16} />
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Not Sure Where to Start?</h2>
                        <p>
                            Reach out to us and we'll help you find the perfect ministry
                            that matches your gifts and passions.
                        </p>
                        <Link href="/contact" className="btn btn-white btn-lg">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
