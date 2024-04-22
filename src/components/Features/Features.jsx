import { modifieFirstLetter } from 'utils/modifieFirstLetter';
import styles from './Featureі.module.css';
// import ListDetailsAdvert from 'components/ListDetailsAdvert';
// import sprite from '../../img/svg/symbol-defs.svg';

const Features = ({
  vehicleDetails,
  transmission,
  adults,
  engine,
  details,
}) => {
  console.log('details', details)
  return (
    <div>
      {/* <ListDetailsAdvert /> */}
      <h4>Vehicle details</h4>
      {/* <svg height='24' width='24'>
        <use href={`${sprite}#icon-users`}></use>
      </svg> */}
      <ul>
        {Object.keys(vehicleDetails).map(el => (
          <li className={styles.list} key={vehicleDetails[el]}>
            <p>{modifieFirstLetter(el)}</p>
            <p>{vehicleDetails[el]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
