import styles from './ItemDetailsAdvert.module.css';

const ItemDetailsAdvert = ({children}) => {
  return (
    <li className={styles.item_details}>
      <p className={styles.text_details}>{children}</p>
    </li>
  )
}

export default ItemDetailsAdvert
