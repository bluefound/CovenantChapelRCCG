'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Calendar, User, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { sermons } from '@/lib/data';
import styles from './SermonsPreview.module.css';

export default function SermonsPreview() {
    return (
        <section className={`section bg-cream ${styles.sermons}`}>
            <div className="container">
                <SectionHeader
                    subtitle="Spiritual Growth"
                    title="Recent Sermons"
                    description="Catch up on our latest messages and be inspired by the Word of God."
                />

                <div className={styles.sermonsGrid}>
                    {sermons.map((sermon) => (
                        <div key={sermon.id} className={styles.sermonCard}>
                            <div className={styles.thumbnailContainer}>
                                <Image
                                    src={sermon.thumbnail}
                                    alt={sermon.title}
                                    fill
                                    className={styles.thumbnail}
                                />
                                <div className={styles.overlay}>
                                    <button className={styles.playBtn} aria-label="Watch Sermon">
                                        <Play size={32} fill="currentColor" />
                                    </button>
                                </div>
                            </div>
                            <div className={styles.sermonInfo}>
                                <div className={styles.meta}>
                                    <span className={styles.metaItem}>
                                        <Calendar size={14} />
                                        {sermon.date}
                                    </span>
                                    <span className={styles.metaItem}>
                                        <User size={14} />
                                        {sermon.preacher}
                                    </span>
                                </div>
                                <h4 className={styles.sermonTitle}>{sermon.title}</h4>
                                <Link href="/media" className={styles.watchLink}>
                                    Watch Now <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.sermonsCta}>
                    <Link href="/media" className="btn btn-primary btn-lg">
                        Browse All Sermons
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
