
import ItemAdverts from './ItemAdverts';
import styles from './ListAdverts.module.css';

const ListAdverts = ({ catalog, className = '' }) => {

  return (
    <ul className={`${styles.list} ${className}`}>
      <ItemAdverts catalog={catalog} />
    </ul>
  );
};

export default ListAdverts;
