import ListAdverts from 'components/ListAdverts';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertsSelector } from 'store/selectors';
import { fetchAdverts } from 'store/thunks';
import styles from './Adverts.module.css';
import Button from 'components/Button';

const Adverts = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(getAdvertsSelector);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAdverts(page));
  }, [dispatch, page]);

  const handlerLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <main className={styles.container}>
      <p>Location</p>
      <p>Filters</p>
      <input type="text" />
      <ListAdverts catalog={adverts} />
      <Button
        type="button"
        className={styles.button_load_more}
        onClick={handlerLoadMore}
      >
        Load more
      </Button>
    </main>
  );
};

export default Adverts;
