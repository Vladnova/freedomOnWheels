import styles from './ItemDetailsAdvert.module.css';

const ItemDetailsAdvert = ({children, svg}) => {
  return (
    <li className={styles.item_details}>
      {svg}
      <p className={styles.text_details}>{children}</p>
    </li>
  )
}

export default ItemDetailsAdvert
