import styles from '../../styles/Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className={styles.navbar}>
            <div className={styles['navbar-container']}>
                <div className={styles['navbar-name']}>Mirza</div>
                <nav>
                    <ul className={styles['navbar-list']}>
                        <li className={styles['navbar-item']}><Link to="/" className={styles['navbar-link']}>Home</Link></li>
                        <li className={styles['navbar-item']}><Link to="/about" className={styles['navbar-link']}>About</Link></li>
                        <li className={styles['navbar-item']}><Link to="/projects" className={styles['navbar-link']}>Projects</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;