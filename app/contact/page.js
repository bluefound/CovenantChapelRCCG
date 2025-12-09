'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    Heart,
    MessageCircle,
    CheckCircle
} from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { submitToSheet } from '@/lib/sheets';
import styles from './page.module.css';

export default function ContactPage() {
    const [activeForm, setActiveForm] = useState('general');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        prayerRequest: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (activeForm === 'prayer') {
            await submitToSheet('prayer-request', {
                name: formData.name,
                email: formData.email,
                request: formData.prayerRequest
            });
        } else {
            await submitToSheet('contact', {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message
            });
        }

        setIsSubmitting(false);
        setSubmitted(true);
    };

    const resetForm = () => {
        setSubmitted(false);
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
            prayerRequest: ''
        });
    };

    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.heroLabel}>Get In Touch</span>
                        <h1 className={styles.heroTitle}>
                            We'd Love to<br />
                            <span className={styles.heroAccent}>Hear From You</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Have questions? Want to visit? Need prayer?
                            Reach out — we're here for you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className={`section ${styles.contactSection}`}>
                <div className="container">
                    <div className={styles.contactGrid}>
                        {/* Contact Info */}
                        <div className={styles.contactInfo}>
                            <h2>Contact Information</h2>
                            <p className={styles.infoSubtitle}>
                                Reach out to us through any of these channels.
                                We'll respond as soon as possible.
                            </p>

                            <div className={styles.infoList}>
                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}>
                                        <MapPin size={24} />
                                    </div>
                                    <div className={styles.infoContent}>
                                        <h4>Our Location</h4>
                                        <p>Opposite Owkaz Filling Station,<br />Badore Simawa, Sagamu, Ogun State</p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}>
                                        <Phone size={24} />
                                    </div>
                                    <div className={styles.infoContent}>
                                        <h4>Phone</h4>
                                        <p><a href="tel:+2349167369876">0916 736 9876</a></p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}>
                                        <Mail size={24} />
                                    </div>
                                    <div className={styles.infoContent}>
                                        <h4>Email</h4>
                                        <p><a href="mailto:rccgconvenantmegachapel@gmail.com">rccgconvenantmegachapel@gmail.com</a></p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}>
                                        <Clock size={24} />
                                    </div>
                                    <div className={styles.infoContent}>
                                        <h4>Service Hours</h4>
                                        <p>Sunday: 7:30 AM - 12:00 PM</p>
                                        <p>Tuesday & Thursday: 5:30 PM - 6:30 PM</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className={styles.mapPlaceholder}>
                                <MapPin size={48} />
                                <span>Map Coming Soon</span>
                            </div>
                        </div>

                        {/* Contact Forms */}
                        <div className={styles.formSection}>
                            {/* Form Tabs */}
                            <div className={styles.formTabs}>
                                <button
                                    className={`${styles.formTab} ${activeForm === 'general' ? styles.active : ''}`}
                                    onClick={() => { setActiveForm('general'); resetForm(); }}
                                >
                                    <MessageCircle size={18} />
                                    General Inquiry
                                </button>
                                <button
                                    className={`${styles.formTab} ${activeForm === 'prayer' ? styles.active : ''}`}
                                    onClick={() => { setActiveForm('prayer'); resetForm(); }}
                                >
                                    <Heart size={18} />
                                    Prayer Request
                                </button>
                            </div>

                            {submitted ? (
                                <div className={styles.successMessage}>
                                    <div className={styles.successIcon}>
                                        <CheckCircle size={64} />
                                    </div>
                                    <h3>Message Sent!</h3>
                                    <p>
                                        {activeForm === 'prayer'
                                            ? 'Your prayer request has been received. Our prayer team will be praying for you.'
                                            : 'Thank you for reaching out. We\'ll get back to you as soon as possible.'}
                                    </p>
                                    <button className="btn btn-primary" onClick={resetForm}>
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form className={styles.contactForm} onSubmit={handleSubmit}>
                                    {activeForm === 'general' ? (
                                        <>
                                            <div className={styles.formRow}>
                                                <div className={styles.formGroup}>
                                                    <label>Your Name *</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="form-input"
                                                        placeholder="Enter your name"
                                                    />
                                                </div>
                                                <div className={styles.formGroup}>
                                                    <label>Email Address *</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="form-input"
                                                        placeholder="your@email.com"
                                                    />
                                                </div>
                                            </div>

                                            <div className={styles.formGroup}>
                                                <label>Subject *</label>
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="form-input"
                                                    placeholder="What is this about?"
                                                />
                                            </div>

                                            <div className={styles.formGroup}>
                                                <label>Message *</label>
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="form-textarea"
                                                    placeholder="How can we help you?"
                                                    rows={5}
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className={styles.formRow}>
                                                <div className={styles.formGroup}>
                                                    <label>Your Name *</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="form-input"
                                                        placeholder="Enter your name"
                                                    />
                                                </div>
                                                <div className={styles.formGroup}>
                                                    <label>Email Address (Optional)</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className="form-input"
                                                        placeholder="your@email.com"
                                                    />
                                                </div>
                                            </div>

                                            <div className={styles.formGroup}>
                                                <label>Prayer Request *</label>
                                                <textarea
                                                    name="prayerRequest"
                                                    value={formData.prayerRequest}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="form-textarea"
                                                    placeholder="Share your prayer request with us. We will be praying for you..."
                                                    rows={6}
                                                />
                                            </div>

                                            <p className={styles.privacyNote}>
                                                <Heart size={14} /> Your prayer request is confidential and will only be shared with our prayer team.
                                            </p>
                                        </>
                                    )}

                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg"
                                        disabled={isSubmitting}
                                        style={{ width: '100%' }}
                                    >
                                        {isSubmitting ? 'Sending...' : (
                                            <>
                                                <Send size={18} />
                                                {activeForm === 'prayer' ? 'Submit Prayer Request' : 'Send Message'}
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className={`section bg-cream ${styles.newsletterSection}`}>
                <div className="container">
                    <div className={styles.newsletterContent}>
                        <SectionHeader
                            subtitle="Stay Connected"
                            title="Subscribe to Updates"
                            description="Get weekly reminders, service notifications, and words of encouragement delivered to your inbox."
                        />
                        <form className={styles.newsletterForm}>
                            <div className={styles.checkboxGroup}>
                                <label className={styles.checkbox}>
                                    <input type="checkbox" defaultChecked />
                                    <span>Weekly Newsletter</span>
                                </label>
                                <label className={styles.checkbox}>
                                    <input type="checkbox" defaultChecked />
                                    <span>Tuesday Service Reminder</span>
                                </label>
                                <label className={styles.checkbox}>
                                    <input type="checkbox" defaultChecked />
                                    <span>Thursday Service Reminder</span>
                                </label>
                                <label className={styles.checkbox}>
                                    <input type="checkbox" defaultChecked />
                                    <span>Sunday Service Reminder</span>
                                </label>
                                <label className={styles.checkbox}>
                                    <input type="checkbox" defaultChecked />
                                    <span>Monthly Course Over Vigil Reminder</span>
                                </label>
                            </div>
                            <div className={styles.emailSubscribe}>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="form-input"
                                    required
                                />
                                <button type="submit" className="btn btn-primary">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
