import ListAdverts from 'components/ListAdverts';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertsSelector } from 'store/selectors';
import { fetchAdverts } from 'store/thunks';
import styles from './Adverts.module.css';
import Button from 'components/Button';
import Options from 'components/Options';

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
      <Options/>
      <div>
        <ListAdverts catalog={adverts} />
        <Button
          type="button"
          className={styles.button_load_more}
          onClick={handlerLoadMore}
        >
          Load more
        </Button>
      </div>
    </main>
  );
};

export default Adverts;
