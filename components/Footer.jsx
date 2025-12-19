import Link from 'next/link';
import Image from 'next/image';
import {
    Instagram,
    Facebook,
    Youtube,
    Twitter,
    Mail,
    Phone,
    MapPin,
    Heart,
    MessageCircle,
    Music2
} from 'lucide-react';
import styles from './Footer.module.css';

const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Groups', href: '/groups' },
    { name: 'Events', href: '/events' },
    { name: 'Media', href: '/media' },
    { name: 'Give Online', href: '/giving' },
    { name: 'Contact', href: '/contact' },
];

const serviceTimes = [
    { day: 'Tuesday', service: 'Digging Deep', time: '5:30 PM' },
    { day: 'Thursday', service: 'Faith Clinic', time: '5:30 PM' },
    { day: 'Sunday', service: 'Sunday School', time: '7:30 AM' },
    { day: 'Sunday', service: 'Celebration Service', time: '9:00 AM' },
];

const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/rccg_ccmz?igsh=ZzI5cjVrZ2w4N2Ew' },
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/share/1BzmDyunMi/' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@rccgconvenantchapel?si=b1eAVpyUB97mXCr8' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'TikTok', icon: Music2, href: 'https://www.tiktok.com/@rccg_ccmz?_r=1&_t=ZM-92MYx9YcnRk' },
    { name: 'WhatsApp', icon: MessageCircle, href: 'https://chat.whatsapp.com/D8wYjVNgmPV15KCxLA6Y5Y' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            {/* Newsletter Section */}
            <div className={styles.newsletter}>
                <div className={styles.container}>
                    <div className={styles.newsletterContent}>
                        <div className={styles.newsletterText}>
                            <h3>Stay Connected with Our Family</h3>
                            <p>Subscribe to receive weekly updates, service reminders, and words of encouragement.</p>
                        </div>
                        <form className={styles.newsletterForm}>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className={styles.newsletterInput}
                                required
                            />
                            <button type="submit" className="btn btn-white">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className={styles.mainFooter}>
                <div className={styles.container}>
                    <div className={styles.footerGrid}>
                        {/* Brand Column */}
                        <div className={styles.footerColumn}>
                            <div className={styles.footerBrand}>
                                <div className={styles.logoIcon}>
                                    <Image
                                        src="/images/logo.png"
                                        alt="Covenant Chapel Logo"
                                        width={48}
                                        height={48}
                                    />
                                </div>
                                <div>
                                    <h4>Covenant Chapel</h4>
                                    <span>Mega Zone</span>
                                </div>
                            </div>
                            <p className={styles.brandDescription}>
                                A Family of Love, Growing in Christ. Join us as we worship, grow, and serve together.
                            </p>
                            <div className={styles.socialLinks}>
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className={styles.socialLink}
                                        aria-label={social.name}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <social.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className={styles.footerColumn}>
                            <h5 className={styles.columnTitle}>Quick Links</h5>
                            <ul className={styles.linkList}>
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className={styles.footerLink}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Service Times */}
                        <div className={styles.footerColumn}>
                            <h5 className={styles.columnTitle}>Service Times</h5>
                            <ul className={styles.serviceList}>
                                {serviceTimes.map((service, index) => (
                                    <li key={index} className={styles.serviceItem}>
                                        <span className={styles.serviceDay}>{service.day}</span>
                                        <span className={styles.serviceName}>{service.service}</span>
                                        <span className={styles.serviceTime}>{service.time}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className={styles.footerColumn}>
                            <h5 className={styles.columnTitle}>Get In Touch</h5>
                            <ul className={styles.contactList}>
                                <li className={styles.contactItem}>
                                    <MapPin size={18} />
                                    <span>Opposite Owkaz Filling Station,<br />Badore Simawa, Sagamu, Ogun State</span>
                                </li>
                                <li className={styles.contactItem}>
                                    <Phone size={18} />
                                    <a href="tel:+2349167369876">0916 736 9876</a>
                                </li>
                                <li className={styles.contactItem}>
                                    <Mail size={18} />
                                    <a href="mailto:rccgconvenantmegachapel@gmail.com">rccgconvenantmegachapel@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className={styles.copyright}>
                <div className={styles.container}>
                    <p>
                        © {currentYear} RCCG Covenant Chapel Mega Zone. All rights reserved.
                    </p>
                    <p className={styles.madeWith}>
                        Made with <Heart size={14} className={styles.heart} /> A Church Filled With Love
                    </p>
                </div>
            </div>
        </footer>
    );
}
