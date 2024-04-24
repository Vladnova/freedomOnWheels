import { useSelector } from 'react-redux';
import styles from '../Adverts/Adverts.module.css';
import ListAdverts from 'components/ListAdverts';
import { getFavoritesSelector } from 'store/selectors';
const Favorites = () => {
  const favorites = useSelector(getFavoritesSelector);
  return (
    <main className={styles.container}>
      <div className={styles.wrap_adverts}>
        <ListAdverts catalog={favorites} />
      </div>
    </main>
  );
};

export default Favorites;
