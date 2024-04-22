import { modifieFirstLetter } from 'utils/modifieFirstLetter';
import styles from './Featureі.module.css';
import ListDetailsAdvert from 'components/ListDetailsAdvert';

const Features = ({
  vehicleDetails,
  transmission,
  adults,
  engine,
  details,
}) => {
  return (
    <div className={styles.wrap_features_options}>
      <ListDetailsAdvert
        transmission={transmission}
        adults={adults}
        engine={engine}
        details={details}
        idxEl={-1}
      />
      <h4 className={styles.subtitle_vehicle_details}>Vehicle details</h4>
      <div className={styles.line}></div>
      <ul className={styles.list}>
        {Object.keys(vehicleDetails).map(el => (
          <li className={styles.item} key={vehicleDetails[el]}>
            <p className={styles.text_vehicle_details}>{modifieFirstLetter(el)}</p>
            <p className={styles.text_vehicle_details}>{vehicleDetails[el]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
