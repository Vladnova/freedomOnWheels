import { NavLink } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <main className={styles.wrap_hero}>
      <div className={styles.wrap_hero_title}>
        <h1 className={styles.title}>Make memories, one mile at a time</h1>
        <NavLink className={styles.btn_go_catalog} to="/catalog">
          Go to ads
        </NavLink>
      </div>
    </main>
  );
};

export default Home;
