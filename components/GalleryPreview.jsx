'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import styles from './GalleryPreview.module.css';

const galleryImages = [
    { src: '/images/worship-1.jpg', alt: 'Worship ministration' },
    { src: '/images/prayer-1.jpg', alt: 'Prayer session' },
    { src: '/images/drama-1.jpg', alt: 'Drama presentation' },
    { src: '/images/worship-2.jpg', alt: 'Worship leader' },
    { src: '/images/congregation-1.jpg', alt: 'Congregation in worship' },
];

export default function GalleryPreview() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
        }, 3500);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className={`section ${styles.gallery}`}>
            <div className="container">
                <SectionHeader
                    subtitle="Memories"
                    title="Photo Gallery"
                    description="Moments of worship, fellowship, and celebration captured in time."
                />

                {/* Rotating Hero Image */}
                <div className={styles.heroCarousel}>
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className={`${styles.heroSlide} ${index === currentIndex ? styles.active : ''}`}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                style={{ objectFit: 'cover' }}
                                priority={index === 0}
                            />
                        </div>
                    ))}
                    <div className={styles.carouselDots}>
                        {galleryImages.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`View image ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Thumbnail Grid */}
                <div className={styles.thumbnailGrid}>
                    {galleryImages.map((image, index) => (
                        <button
                            key={index}
                            className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </button>
                    ))}
                </div>

                <div className={styles.galleryCta}>
                    <Link href="/media" className="btn btn-secondary btn-lg">
                        View Full Gallery
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
