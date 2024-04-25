import styles from './Header.module.css';
import { StyledLink } from './StyledLink';

const Header = () => {
  return (
    <header className={styles.container}>
      <nav>
        <ul className={styles.wrapList}>
          <li className={styles.list}>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li className={styles.list}>
            <StyledLink to="/catalog">Adverts</StyledLink>
          </li>
          <li className={styles.list}>
            <StyledLink to="/favorites">Favorites</StyledLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
