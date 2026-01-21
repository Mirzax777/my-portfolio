import styles from '../../styles/Header.module.css';

function Header() {
    return (
        <header className={styles.navbar}>
            <nav>
                <ul className={styles['navbar-list']}>
                    <li className={styles['navbar-item']}><a href="#home" className={styles['navbar-link']}>Home</a></li>
                    <li className={styles['navbar-item']}><a href="#about" className={styles['navbar-link']}>About</a></li>
                    <li className={styles['navbar-item']}><a href="#projects" className={styles['navbar-link']}>Projects</a></li>
                    <li className={styles['navbar-item']}><a href="#contact" className={styles['navbar-link']}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;