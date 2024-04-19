
import ItemAdverts from './ItemAdverts';
import styles from './ListAdverts.module.css';

const ListAdverts = ({ catalog }) => {
  return (
    <>
      <ul className={styles.list}>
        <ItemAdverts catalog={catalog} />
      </ul>

    </>
  );
};

export default ListAdverts;
