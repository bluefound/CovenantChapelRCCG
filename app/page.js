import Link from 'next/link';
import Image from 'next/image';
import {
  BookOpen,
  Heart,
  Sun,
  Moon,
  Zap,
  GraduationCap,
  Music,
  Users,
  Calendar,
  Globe,
  ArrowRight,
  Play,
  ChevronRight,
  Quote
} from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import ServiceTimeCard from '@/components/ServiceTimeCard';
import CountdownTimer from '@/components/CountdownTimer';
import GalleryPreview from '@/components/GalleryPreview';
import { departments, serviceTimes, testimonies } from '@/lib/data';
import styles from './page.module.css';

const iconMap = {
  BookOpen,
  Heart,
  Sun,
  Moon,
  Zap,
  GraduationCap,
  Music,
  Users,
  Calendar,
  Globe,
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <span className={styles.heroLabel}>The Redeemed Christian Church of God</span>
            <h1 className={styles.heroTitle}>
              A Family of Love,<br />
              <span className={styles.heroAccent}>Growing in Christ</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Covenant Chapel Mega Zone — A Church Filled With Love
            </p>
            <div className={styles.heroCtas}>
              <Link href="/contact" className="btn btn-primary btn-lg">
                Join Us This Sunday
                <ArrowRight size={20} />
              </Link>
              <Link href="#watch" className="btn btn-secondary btn-lg">
                <Play size={20} />
                Watch Online
              </Link>
            </div>
          </div>
          <div className={styles.heroLogo}>
            <div className={styles.rotatingLogo}>
              <Image
                src="/images/logo.png"
                alt="Covenant Chapel Logo"
                width={400}
                height={400}
                priority
              />
            </div>
          </div>
        </div>
        <div className={styles.heroWave}>
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50L48 45.8C96 41.7 192 33.3 288 33.3C384 33.3 480 41.7 576 48.3C672 55 768 60 864 56.7C960 53.3 1056 41.7 1152 40C1248 38.3 1344 46.7 1392 50.8L1440 55V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Welcome Section */}
      <section className={`section ${styles.welcome}`}>
        <div className="container">
          <div className={styles.welcomeGrid}>
            <div className={styles.welcomeContent}>
              <SectionHeader
                subtitle="Welcome Home"
                title="You Belong Here"
                centered={false}
              />
              <p className={styles.welcomeText}>
                Welcome to <strong>Covenant Chapel Mega Zone</strong> — a place where hearts are warmed,
                lives are transformed, and love flows freely. Whether you're new to faith or deepening
                your walk with Christ, you'll find a family here waiting to embrace you.
              </p>
              <p className={styles.welcomeText}>
                We believe that the love of God is the foundation of everything we do. Here, you're
                not a stranger; <strong>you're family</strong>. Come as you are, and experience the
                warmth of genuine Christian community.
              </p>
              <Link href="/about" className="btn btn-primary">
                Learn More About Us
                <ChevronRight size={18} />
              </Link>
            </div>
            <div className={styles.welcomeImage}>
              <Image
                src="/images/congregation-1.jpg"
                alt="Congregation worshipping together"
                width={600}
                height={450}
                className={styles.sectionImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Times Section */}
      <section className={`section bg-cream ${styles.services}`}>
        <div className="container">
          <SectionHeader
            subtitle="Join Us"
            title="Our Service Times"
            description="We gather throughout the week to worship, learn, and grow together. Find a service that works for you."
          />
          <div className={styles.servicesGrid}>
            {serviceTimes.map((service) => {
              const IconComponent = iconMap[service.icon] || Heart;
              return (
                <ServiceTimeCard
                  key={service.id}
                  icon={IconComponent}
                  day={service.day}
                  service={service.service}
                  time={service.time}
                  description={service.description}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className={`section ${styles.aboutPreview}`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImage}>
              <Image
                src="/images/worship-3.jpg"
                alt="Worship ministration"
                width={450}
                height={450}
                className={styles.sectionImage}
              />
            </div>
            <div className={styles.aboutContent}>
              <SectionHeader
                subtitle="Our Story"
                title="A Beacon of Hope"
                centered={false}
              />
              <p className={styles.aboutText}>
                For years, Covenant Chapel Mega Zone has been a beacon of hope in our community—a
                church filled with love, committed to raising disciples who impact their world for
                Jesus Christ.
              </p>
              <p className={styles.aboutText}>
                We are a parish of The Redeemed Christian Church of God, a global ministry that has
                brought the light of the Gospel to millions across the world. Our vision is to raise
                a generation of believers who are deeply rooted in God's Word, empowered by the Holy
                Spirit, and committed to spreading the love of Christ.
              </p>
              <div className={styles.aboutStats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>10+</span>
                  <span className={styles.statLabel}>Ministries</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>6</span>
                  <span className={styles.statLabel}>Weekly Services</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>∞</span>
                  <span className={styles.statLabel}>Love to Share</span>
                </div>
              </div>
              <Link href="/about" className="btn btn-primary">
                Read Our Full Story
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section className={`section bg-primary-light ${styles.ministries}`}>
        <div className="container">
          <SectionHeader
            subtitle="Get Involved"
            title="Our Ministries"
            description="Discover where you can serve, grow, and connect. Every gift matters in building God's kingdom."
          />
          <div className={styles.ministriesGrid}>
            {departments.slice(0, 6).map((dept) => {
              const IconComponent = iconMap[dept.icon] || Heart;
              return (
                <Link key={dept.id} href={`/groups/${dept.slug}`} className={styles.ministryCard}>
                  <div className={styles.ministryIcon}>
                    <IconComponent size={32} />
                  </div>
                  <h4 className={styles.ministryTitle}>{dept.shortName}</h4>
                  <p className={styles.ministryDescription}>{dept.description}</p>
                  <span className={styles.ministryLink}>
                    Learn More <ChevronRight size={16} />
                  </span>
                </Link>
              );
            })}
          </div>
          <div className={styles.ministriesCta}>
            <Link href="/groups" className="btn btn-primary btn-lg">
              View All Ministries
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonies Section */}
      <section className={`section ${styles.testimonies}`}>
        <div className="container">
          <SectionHeader
            subtitle="Life Stories"
            title="What God Is Doing"
            description="Hear from our members about how God has transformed their lives through our church family."
          />
          <div className={styles.testimoniesGrid}>
            {testimonies.map((testimony) => (
              <div key={testimony.id} className={styles.testimonyCard}>
                <Quote className={styles.quoteIcon} size={40} />
                <p className={styles.testimonyText}>{testimony.testimony}</p>
                <div className={styles.testimonyAuthor}>
                  <div className={styles.authorAvatar}>
                    <Heart size={20} />
                  </div>
                  <span className={styles.authorName}>{testimony.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Preview Section */}
      <section className={`section bg-cream ${styles.eventsPreview}`}>
        <div className="container">
          <div className={styles.eventsGrid}>
            <div className={styles.eventsContent}>
              <SectionHeader
                subtitle="Upcoming"
                title="Events & Programs"
                centered={false}
              />
              <p className={styles.eventsText}>
                From our monthly Course Over vigil to special celebrations, there's always
                something happening at Covenant Chapel. Join us for worship, fellowship, and
                life-changing encounters with God.
              </p>
              <div className={styles.eventsList}>
                <div className={styles.eventItem}>
                  <div className={styles.eventDate}>
                    <span className={styles.eventMonth}>Every</span>
                    <span className={styles.eventDay}>Sunday</span>
                  </div>
                  <div className={styles.eventInfo}>
                    <h5>Celebration Service</h5>
                    <p>9:00 AM – 11:30 AM</p>
                  </div>
                </div>
                <div className={styles.eventItem}>
                  <div className={styles.eventDate}>
                    <span className={styles.eventMonth}>Monthly</span>
                    <span className={styles.eventDay}>Last Day</span>
                  </div>
                  <div className={styles.eventInfo}>
                    <h5>Course Over Vigil</h5>
                    <p>11:00 PM (Online)</p>
                  </div>
                </div>
              </div>
              <Link href="/events" className="btn btn-primary">
                View All Events
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className={styles.eventsImage}>
              <div className={styles.eventsImagePlaceholder}>
                <Calendar size={64} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <GalleryPreview />

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Experience God's Love?</h2>
            <p>
              We'd love to have you join our family. Whether in-person or online,
              there's a place for you at Covenant Chapel Mega Zone.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className="btn btn-white btn-lg">
                Plan Your Visit
                <ArrowRight size={20} />
              </Link>
              <Link href="/groups" className="btn btn-secondary btn-lg" style={{ borderColor: 'white', color: 'white' }}>
                Join a Group
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
