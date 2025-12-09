import Link from 'next/link';
import {
    Calendar,
    Clock,
    MapPin,
    ArrowRight,
    Sun,
    Moon,
    BookOpen,
    Heart,
    Zap,
    GraduationCap
} from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import CountdownTimer from '@/components/CountdownTimer';
import { serviceTimes } from '@/lib/data';
import styles from './page.module.css';

export const metadata = {
    title: 'Events & Programs - RCCG Covenant Chapel Mega Zone',
    description: 'View upcoming services, programs, and special events at Covenant Chapel Mega Zone. Join us in worship!',
};

const iconMap = {
    BookOpen,
    Heart,
    Sun,
    Moon,
    Zap,
    GraduationCap,
};

const upcomingEvents = [
    {
        id: 1,
        title: 'Sunday Celebration Service',
        date: 'Every Sunday',
        time: '9:00 AM – 11:30 AM',
        location: 'Church Auditorium',
        description: 'Join us for our main weekly gathering filled with worship, the Word, and fellowship.',
        recurring: true
    },
    {
        id: 2,
        title: 'Course Over Monthly Vigil',
        date: 'Last Day of Every Month',
        time: '11:00 PM',
        location: 'Online',
        description: 'Cross over into the new month with prayers, worship, and prophetic declarations.',
        recurring: true
    },
    {
        id: 3,
        title: 'Daniel Generation Youth Fellowship',
        date: 'Every 2nd Friday',
        time: 'Evening',
        location: 'Church Premises',
        description: 'A special gathering for our youth to fellowship, learn, and grow together in faith.',
        recurring: true
    }
];

export default function EventsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.heroLabel}>Join Us</span>
                        <h1 className={styles.heroTitle}>
                            Events &<br />
                            <span className={styles.heroAccent}>Programs</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            From our weekly services to special gatherings, there's always
                            something happening at Covenant Chapel.
                        </p>
                    </div>
                </div>
            </section>

            {/* Countdown Section */}
            <section className={styles.countdownSection}>
                <div className="container">
                    <CountdownTimer title="Next Sunday Celebration Service" />
                </div>
            </section>

            {/* Weekly Services */}
            <section className={`section ${styles.weeklyServices}`}>
                <div className="container">
                    <SectionHeader
                        subtitle="Weekly Schedule"
                        title="Regular Services"
                        description="Our doors are open throughout the week. Come worship with us!"
                    />
                    <div className={styles.servicesGrid}>
                        {serviceTimes.map((service) => {
                            const IconComponent = iconMap[service.icon] || Heart;
                            return (
                                <div key={service.id} className={styles.serviceCard}>
                                    <div className={styles.serviceIcon}>
                                        <IconComponent size={28} />
                                    </div>
                                    <div className={styles.serviceInfo}>
                                        <span className={styles.serviceDay}>{service.day}</span>
                                        <h3 className={styles.serviceName}>{service.service}</h3>
                                        <div className={styles.serviceTime}>
                                            <Clock size={16} />
                                            <span>{service.time}</span>
                                        </div>
                                        <p className={styles.serviceDescription}>{service.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className={`section bg-cream ${styles.upcomingEvents}`}>
                <div className="container">
                    <SectionHeader
                        subtitle="Mark Your Calendar"
                        title="Upcoming Events"
                        description="Special programs and gatherings you don't want to miss."
                    />
                    <div className={styles.eventsGrid}>
                        {upcomingEvents.map((event) => (
                            <div key={event.id} className={styles.eventCard}>
                                <div className={styles.eventHeader}>
                                    <div className={styles.eventDate}>
                                        <Calendar size={20} />
                                        <span>{event.date}</span>
                                    </div>
                                    {event.recurring && (
                                        <span className={styles.recurringBadge}>Recurring</span>
                                    )}
                                </div>
                                <h3 className={styles.eventTitle}>{event.title}</h3>
                                <p className={styles.eventDescription}>{event.description}</p>
                                <div className={styles.eventMeta}>
                                    <div className={styles.eventMetaItem}>
                                        <Clock size={16} />
                                        <span>{event.time}</span>
                                    </div>
                                    <div className={styles.eventMetaItem}>
                                        <MapPin size={16} />
                                        <span>{event.location}</span>
                                    </div>
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
                        <h2>Want to Stay Updated?</h2>
                        <p>
                            Subscribe to our newsletter and never miss an event.
                            Get reminders for services and special programs.
                        </p>
                        <Link href="/contact" className="btn btn-white btn-lg">
                            Subscribe Now
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
