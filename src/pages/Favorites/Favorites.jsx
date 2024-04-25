import { useSelector } from 'react-redux';
import ListAdverts from 'components/ListAdverts';
import { getFavoritesSelector } from 'store/selectors';
import styles from './Favorites.module.css';

const Favorites = () => {
  const favorites = useSelector(getFavoritesSelector);
  return (
    <main className={styles.container}>
      {favorites.length ? (
        <ListAdverts catalog={favorites} className={styles.list_favorites} />
      ) : (
        <h1 className={styles.title}>Nothing has been added to favorites</h1>
      )}
    </main>
  );
};

export default Favorites;
