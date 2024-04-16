import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
      <nav>
        <ul className={styles.wrapList}>
          <li className={styles.list}>
            <NavLink className={styles.link} to="/">
              Home
            </NavLink>
          </li>
          <li className={styles.list}>
            <NavLink className={styles.link} to="/catalog">
              Adverts
            </NavLink>
          </li>
          <li className={styles.list}>
            <NavLink className={styles.link} to="/favorites">
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
