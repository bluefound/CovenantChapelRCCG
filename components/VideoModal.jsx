'use client';
import { X } from 'lucide-react';
import styles from './VideoModal.module.css';

export default function VideoModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
                    <X size={24} />
                </button>
                <div className={styles.videoContainer}>
                    <iframe
                        src="https://www.youtube.com/embed/live_stream?channel=UCb1eAVpyUB97mXCr8&autoplay=1"
                        title="Covenant Chapel Live Stream"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className={styles.iframe}
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
