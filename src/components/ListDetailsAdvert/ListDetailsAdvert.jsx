import ItemDetailsAdvert from 'components/ItemDetailsAdvert';
import { normalize } from '../../utils/normalize';
import { modifieFirstLetter } from 'utils/modifieFirstLetter';

const ListDetailsAdvert = ({ details, adults, transmission, engine }) => {
  return (
    <ul>
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
