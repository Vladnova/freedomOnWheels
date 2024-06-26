import ItemDetailsAdvert from './ItemDetailsAdvert';
import { createNewObject } from '../../utils/createNewObject';
import styles from './ListDetailsAdvert.module.css';
import { createParamsForItem } from 'utils/createParamsForItem';
import Icon from 'components/Icon';
import { ReactComponent as IconAc } from '../../img/svg/AC-smol.svg';
import { createDetailsArr } from 'utils/createDetailsArr';

const ListDetailsAdvert = ({
  details,
  adults,
  transmission,
  engine,
  idxEl
}) => {
  const newObj = createNewObject({ details, adults, transmission, engine });

  return (
    <ul className={styles.wrap_list_details}>
      {createDetailsArr(newObj, idxEl)
        .map(el => {
          const value = createParamsForItem(newObj, el);
          return (
            newObj[el] > 0 && (
              <ItemDetailsAdvert
                svg={
                  value === 'AC' ? (
                    <IconAc />
                  ) : (
                    <Icon width="20" height="20" name={el} />
                  )
                }
                key={value}
              >
                {value}
              </ItemDetailsAdvert>
            )
          );
        })}
    </ul>
  );
};

export default ListDetailsAdvert;
