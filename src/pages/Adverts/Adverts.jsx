import ListAdverts from 'components/ListAdverts';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAdvertsSelector,
  getErrorSelector,
  getLoaderSelector,
} from 'store/selectors';
import { fetchAdverts } from 'store/thunks';
import styles from './Adverts.module.css';
import Button from 'components/Button';
import Options from 'components/Options';
import Loader from 'components/Loader';
import Error from 'components/Error';

const Adverts = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(getAdvertsSelector);
  const [page, setPage] = useState(1);
  const isLoading = useSelector(getLoaderSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchAdverts(page));
  }, [dispatch, page]);

  const handlerLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <main className={styles.container}>
      <Options />
      {isLoading && <Loader />}

      {!isLoading && (
        <div className={`${error && styles.wrap_adverts}`}>
          {error && <Error message={error} />}
          <ListAdverts catalog={adverts} />
          {adverts.length > 3 && (
            <Button
              type="button"
              className={styles.button_load_more}
              onClick={handlerLoadMore}
            >
              Load more
            </Button>
          )}
        </div>
      )}
    </main>
  );
};

export default Adverts;
