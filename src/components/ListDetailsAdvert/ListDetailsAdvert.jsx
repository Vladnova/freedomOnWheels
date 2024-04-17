import ItemDetailsAdvert from 'components/ItemDetailsAdvert';
import { normalize } from '../../utils/normalize';
import { modifieFirstLetter } from 'utils/modifieFirstLetter';
import styles from './ListDetailsAdvert.module.css';

const ListDetailsAdvert = ({ details, adults, transmission, engine }) => {
  return (
    <ul className={styles.wrap_list_details}>
      <ItemDetailsAdvert>{adults} adults</ItemDetailsAdvert>
      <ItemDetailsAdvert>{modifieFirstLetter(transmission)}</ItemDetailsAdvert>
      <ItemDetailsAdvert>{modifieFirstLetter(engine)}</ItemDetailsAdvert>
      {Object.keys(details)
        .slice(0, 3)
        .map((value, index) => (
          <ItemDetailsAdvert key={index}>
           {normalize(details, value)}
          </ItemDetailsAdvert>
        ))}
    </ul>
  );
};

export default ListDetailsAdvert;
