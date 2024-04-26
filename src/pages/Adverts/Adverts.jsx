import ListAdverts from 'components/ListAdverts';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAdvertsSelector,
  getAllAdvertsSelector,
  getErrorSelector,
  getFilteredSelector,
  getLoaderSelector,
} from 'store/selectors';
import { fetchAdverts, fetchAllAdverts, fetchLoadMore } from 'store/thunks';
import styles from './Adverts.module.css';
import Button from 'components/Button';
import Options from 'components/Options';
import Loader from 'components/Loader';
import Error from 'components/Error';

const Adverts = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(getAdvertsSelector);
  const allAdverts = useSelector(getAllAdvertsSelector);
  const [page, setPage] = useState(0);
  const isLoading = useSelector(getLoaderSelector);
  const error = useSelector(getErrorSelector);
  const filter = useSelector(getFilteredSelector);

  useEffect(() => {
    if (page === 0) {
      dispatch(fetchAdverts());
      dispatch(fetchAllAdverts());
      setPage(prev => prev + 1);
      // return;
    }
  }, [dispatch, page]);

  useEffect(() => {}, [filter]);

  const totalPages = Math.ceil(allAdverts.length / 4);

  const handlerLoadMore = () => {
    setPage(prev => prev + 1);
    dispatch(fetchLoadMore(page));
  };

  return (
    <main className={styles.container}>
      <Options />
      {isLoading && <Loader />}

      {!isLoading && (
        <div className={`${error && styles.wrap_adverts}`}>
          {error && <Error message={error} />}
          {filter.length ? (
            <ListAdverts catalog={filter.length < 13 ? filter : adverts} />
          ) : (
            <h1 className={styles.title_not_found}>Nothing found</h1>
          )}
          {!!filter.length && totalPages >= page && (
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
