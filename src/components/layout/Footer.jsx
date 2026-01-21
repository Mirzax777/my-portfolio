import styles from '../../styles/Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles['footer-text']}>
                Made with <span style={{ color: '#ffffff' }}>ReactJS</span> + <span style={{ color: '#ffffff' }}>Future Upgrade</span>
            </p>
        </footer>
    );
}

export default Footer;