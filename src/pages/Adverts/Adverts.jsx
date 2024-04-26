import ListAdverts from 'components/ListAdverts';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAdvertsSelector,
  getAllAdvertsSelector,
  getErrorSelector,
  getFilterSelector,
  getFilteredSelector,
  getLoaderSelector,
} from 'store/selectors';
import { fetchAdverts, fetchAllAdverts, fetchLoadMore } from 'store/thunks';
import styles from './Adverts.module.css';
import Button from 'components/Button';
import Options from 'components/Options';
import Loader from 'components/Loader';
import Error from 'components/Error';
import { resetFilter } from 'store/filterSlice';
import { checkFilter } from 'utils/checkFilter';

const Adverts = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(getAdvertsSelector);
  const allAdverts = useSelector(getAllAdvertsSelector);
  const [page, setPage] = useState(0);
  const isLoading = useSelector(getLoaderSelector);
  const error = useSelector(getErrorSelector);
  const filtered = useSelector(getFilteredSelector);
  const filter = useSelector(getFilterSelector);

  const [isFilter, setIsFilter] = useState(false);

  useEffect(() => {
    if (page === 0) {
      dispatch(fetchAdverts());
      dispatch(fetchAllAdverts());
      setPage(prev => prev + 1);
    }
    return () => {
      dispatch(resetFilter());
    };
  }, [dispatch, page]);

  const totalPages = Math.ceil(allAdverts.length / 4);

  const handlerLoadMore = () => {
    setPage(prev => prev + 1);
    dispatch(fetchLoadMore(page));
  };
  useEffect(() => {
    setIsFilter(checkFilter(filter));
  }, [filter]);
  

  return (
    <main className={styles.container}>
      <Options />
      {isLoading && <Loader />}

      {!isLoading && (
        <div className={`${error && styles.wrap_adverts}`}>
          {error && <Error message={error} />}
          {filtered.length ? (
            <ListAdverts catalog={isFilter ? filtered : adverts} />
          ) : (
            isFilter && (
              <h1 className={styles.title_not_found}>Nothing found</h1>
            )
          )}
          {!isFilter && totalPages >= page && (
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
