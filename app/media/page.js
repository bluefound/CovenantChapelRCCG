'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Search, X, Heart, Image as ImageIcon, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import styles from './page.module.css';

// Gallery data with real images
const galleryItems = [
    { id: 1, month: 'December', year: 2024, title: 'Worship Ministration', image: '/images/worship-1.jpg' },
    { id: 2, month: 'December', year: 2024, title: 'Prayer Session', image: '/images/prayer-1.jpg' },
    { id: 3, month: 'December', year: 2024, title: 'Drama Presentation', image: '/images/drama-1.jpg' },
    { id: 4, month: 'December', year: 2024, title: 'Worship Leader', image: '/images/worship-2.jpg' },
    { id: 5, month: 'December', year: 2024, title: 'Congregation Worship', image: '/images/congregation-1.jpg' },
    { id: 6, month: 'December', year: 2024, title: 'Church Member', image: '/images/member-1.jpg' },
    { id: 7, month: 'December', year: 2024, title: 'Church Member', image: '/images/member-2.jpg' },
    { id: 8, month: 'December', year: 2024, title: 'Child Dedication', image: '/images/dedication-1.jpg' },
    { id: 9, month: 'December', year: 2024, title: 'Worship Ministration', image: '/images/worship-3.jpg' },
    { id: 10, month: 'December', year: 2024, title: 'Church Member', image: '/images/member-3.jpg' },
];

const months = ['All', 'December'];

export default function MediaPage() {
    const [selectedMonth, setSelectedMonth] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [lightboxItem, setLightboxItem] = useState(null);

    const filteredItems = galleryItems.filter(item => {
        const matchesMonth = selectedMonth === 'All' || item.month === selectedMonth;
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesMonth && matchesSearch;
    });

    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.heroLabel}>Gallery</span>
                        <h1 className={styles.heroTitle}>
                            Captured<br />
                            <span className={styles.heroAccent}>Moments</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Relive moments of worship, fellowship, and celebration
                            from our church family.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className={`section ${styles.gallerySection}`}>
                <div className="container">
                    {/* Filters */}
                    <div className={styles.filters}>
                        <div className={styles.monthFilters}>
                            {months.map((month) => (
                                <button
                                    key={month}
                                    className={`${styles.filterBtn} ${selectedMonth === month ? styles.active : ''}`}
                                    onClick={() => setSelectedMonth(month)}
                                >
                                    {month}
                                </button>
                            ))}
                        </div>
                        <div className={styles.searchBox}>
                            <Search size={20} />
                            <input
                                type="text"
                                placeholder="Search photos..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            {searchQuery && (
                                <button
                                    className={styles.clearSearch}
                                    onClick={() => setSearchQuery('')}
                                >
                                    <X size={16} />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Gallery Grid */}
                    <div className={styles.galleryGrid}>
                        {filteredItems.map((item) => (
                            <div
                                key={item.id}
                                className={styles.galleryItem}
                                onClick={() => setLightboxItem(item)}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className={styles.itemOverlay}>
                                    <span className={styles.itemDate}>{item.month} {item.year}</span>
                                    <span className={styles.itemTitle}>{item.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredItems.length === 0 && (
                        <div className={styles.noResults}>
                            <Heart size={48} />
                            <h3>No photos found</h3>
                            <p>Try adjusting your search or filter.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox */}
            {lightboxItem && (
                <div className={styles.lightbox} onClick={() => setLightboxItem(null)}>
                    <button className={styles.closeLightbox}>
                        <X size={24} />
                    </button>
                    <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.lightboxImage}>
                            <Image
                                src={lightboxItem.image}
                                alt={lightboxItem.title}
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <div className={styles.lightboxInfo}>
                            <span>{lightboxItem.month} {lightboxItem.year}</span>
                            <h3>{lightboxItem.title}</h3>
                        </div>
                    </div>
                </div>
            )}

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Want to See Yourself in Our Gallery?</h2>
                        <p>
                            Join us for our services and special programs.
                            You'll find a family waiting to welcome you.
                        </p>
                        <a href="/contact" className="btn btn-white btn-lg">
                            Plan Your Visit
                            <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
