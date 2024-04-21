import ItemDetailsAdvert from './ItemDetailsAdvert';
import { normalize } from '../../../../utils/normalize';
import { modifieFirstLetter } from 'utils/modifieFirstLetter';
import styles from './ListDetailsAdvert.module.css';
import { ReactComponent as IconAutomatic } from '../../../../img/svg/automatic-smol.svg';
import { ReactComponent as IconAdults } from '../../../../img/svg/users.svg';
import { ReactComponent as IconPetrol } from '../../../../img/svg/petrol.svg';

const ListDetailsAdvert = ({ details, adults, transmission, engine }) => {
  return (
    <ul className={styles.wrap_list_details}>
      <ItemDetailsAdvert svg={<IconAdults width="20" height="20" />}>
        {adults} adults
      </ItemDetailsAdvert>
      <ItemDetailsAdvert svg={<IconAutomatic width="20" height="20" />}>
        {modifieFirstLetter(transmission)}
      </ItemDetailsAdvert>
      <ItemDetailsAdvert svg={<IconPetrol width="20" height="20" />}>
        {modifieFirstLetter(engine)}
      </ItemDetailsAdvert>
      {Object.keys(details)
        .slice(0, 3)
        .map(el => {
          const { value, svg, id } = normalize(details, el);
          return (
            <ItemDetailsAdvert svg={svg} key={id}>
              {value}
            </ItemDetailsAdvert>
          );
        })}
    </ul>
  );
};

export default ListDetailsAdvert;
