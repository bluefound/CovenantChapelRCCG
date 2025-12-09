import styles from './SectionHeader.module.css';

export default function SectionHeader({
    subtitle,
    title,
    description,
    centered = true,
    light = false
}) {
    return (
        <div className={`${styles.sectionHeader} ${centered ? styles.centered : ''} ${light ? styles.light : ''}`}>
            {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
            <h2 className={styles.title}>{title}</h2>
            {description && <p className={styles.description}>{description}</p>}
        </div>
    );
}
