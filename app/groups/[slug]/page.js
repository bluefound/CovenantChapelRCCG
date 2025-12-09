'use client';
import { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
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
    ArrowLeft,
    CheckCircle,
    Clock,
    Target,
    ListChecks
} from 'lucide-react';
import { departments } from '@/lib/data';
import { submitToSheet } from '@/lib/sheets';
import styles from './page.module.css';

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

export default function GroupDetailPage({ params }) {
    // Unwrap params Promise in Next.js 14
    const resolvedParams = use(params);

    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        dateOfBirth: '',
        dateBornAgain: '',
        department: '',
        hasExperience: '',
        note: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const department = departments.find(d => d.slug === resolvedParams.slug);

    if (!department) {
        notFound();
    }

    const IconComponent = iconMap[department.icon] || Heart;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        await submitToSheet('group-join', {
            ...formData,
            department: department.name
        });

        setIsSubmitting(false);
        setSubmitted(true);
    };

    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <Link href="/groups" className={styles.backLink}>
                        <ArrowLeft size={18} />
                        Back to All Groups
                    </Link>
                    <div className={styles.heroContent}>
                        <div className={styles.heroIcon}>
                            <IconComponent size={48} />
                        </div>
                        <h1 className={styles.heroTitle}>{department.name}</h1>
                        <p className={styles.heroSubtitle}>{department.description}</p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className={`section ${styles.content}`}>
                <div className="container">
                    <div className={styles.contentGrid}>
                        {/* Main Content */}
                        <div className={styles.mainContent}>
                            {/* Purpose */}
                            <div className={styles.contentBlock}>
                                <div className={styles.blockHeader}>
                                    <Target size={24} />
                                    <h2>Our Purpose</h2>
                                </div>
                                <p>{department.purpose}</p>
                            </div>

                            {/* Activities */}
                            <div className={styles.contentBlock}>
                                <div className={styles.blockHeader}>
                                    <ListChecks size={24} />
                                    <h2>What We Do</h2>
                                </div>
                                <ul className={styles.activitiesList}>
                                    {department.activities.map((activity, index) => (
                                        <li key={index}>
                                            <CheckCircle size={18} />
                                            <span>{activity}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Meeting Time */}
                            <div className={styles.contentBlock}>
                                <div className={styles.blockHeader}>
                                    <Clock size={24} />
                                    <h2>Meeting Time</h2>
                                </div>
                                <p className={styles.meetingTime}>{department.meetingTime}</p>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className={styles.sidebar}>
                            <div className={styles.joinCard}>
                                <h3>Join This Ministry</h3>
                                <p>
                                    Ready to serve? We'd love to have you as part of our team.
                                    Fill out the form below and a team lead will reach out to you.
                                </p>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => setShowForm(true)}
                                    style={{ width: '100%' }}
                                >
                                    Join {department.shortName}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Form Modal */}
            {showForm && (
                <div className={styles.modalOverlay} onClick={() => !isSubmitting && setShowForm(false)}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        {submitted ? (
                            <div className={styles.successMessage}>
                                <div className={styles.successIcon}>
                                    <CheckCircle size={64} />
                                </div>
                                <h2>Thank You!</h2>
                                <p>A team lead will reach out to you shortly.</p>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => {
                                        setShowForm(false);
                                        setSubmitted(false);
                                        setFormData({
                                            fullName: '',
                                            phone: '',
                                            email: '',
                                            dateOfBirth: '',
                                            dateBornAgain: '',
                                            department: '',
                                            hasExperience: '',
                                            note: ''
                                        });
                                    }}
                                >
                                    Close
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className={styles.modalHeader}>
                                    <h2>Join {department.name}</h2>
                                    <button
                                        className={styles.closeBtn}
                                        onClick={() => setShowForm(false)}
                                        disabled={isSubmitting}
                                    >
                                        ×
                                    </button>
                                </div>
                                <form className={styles.joinForm} onSubmit={handleSubmit}>
                                    <div className={styles.formGroup}>
                                        <label>Full Name *</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            required
                                            className="form-input"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label>Phone Number *</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                                className="form-input"
                                                placeholder="Your phone number"
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
                                                placeholder="Your email"
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label>Date of Birth *</label>
                                            <input
                                                type="date"
                                                name="dateOfBirth"
                                                value={formData.dateOfBirth}
                                                onChange={handleInputChange}
                                                required
                                                className="form-input"
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label>When did you get born again? *</label>
                                            <input
                                                type="date"
                                                name="dateBornAgain"
                                                value={formData.dateBornAgain}
                                                onChange={handleInputChange}
                                                required
                                                className="form-input"
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>Have you served in this department before? *</label>
                                        <div className={styles.radioGroup}>
                                            <label className={styles.radioLabel}>
                                                <input
                                                    type="radio"
                                                    name="hasExperience"
                                                    value="yes"
                                                    checked={formData.hasExperience === 'yes'}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                                <span>Yes</span>
                                            </label>
                                            <label className={styles.radioLabel}>
                                                <input
                                                    type="radio"
                                                    name="hasExperience"
                                                    value="no"
                                                    checked={formData.hasExperience === 'no'}
                                                    onChange={handleInputChange}
                                                />
                                                <span>No</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>Short Note (Optional)</label>
                                        <textarea
                                            name="note"
                                            value={formData.note}
                                            onChange={handleInputChange}
                                            className="form-textarea"
                                            placeholder="Tell us a bit about yourself or why you want to join..."
                                            rows={3}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg"
                                        disabled={isSubmitting}
                                        style={{ width: '100%' }}
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
