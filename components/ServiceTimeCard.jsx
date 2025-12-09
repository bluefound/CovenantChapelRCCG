import styles from './ServiceTimeCard.module.css';

export default function ServiceTimeCard({ icon: Icon, day, service, time, description }) {
    return (
        <div className={styles.card}>
            <div className={styles.iconWrapper}>
                <Icon size={28} />
            </div>
            <div className={styles.content}>
                <span className={styles.day}>{day}</span>
                <h4 className={styles.service}>{service}</h4>
                <span className={styles.time}>{time}</span>
                {description && <p className={styles.description}>{description}</p>}
            </div>
        </div>
    );
}
