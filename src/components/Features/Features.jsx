import { modifieFirstLetter } from 'utils/modifieFirstLetter';
import styles from './Featureі.module.css';
// import ListDetailsAdvert from 'components/ListDetailsAdvert';


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
