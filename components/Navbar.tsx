import Link from 'next/link';
import styles from '../styles/Navbar.module.scss'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className="container">
                <div className={styles.navbar__wrapper}>
                    <span className={styles.navbar__main}><Link href="/"><a className={styles.navbar__logo}>Just</a></Link><p><span>|</span> It's a piece of cake</p></span>
                    <Link href={`/user/${1}`}><a className={styles.navbar__personal}>Личный кабинет</a></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;