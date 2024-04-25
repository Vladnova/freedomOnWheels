import { useSelector } from 'react-redux';
import styles from './Location.module.css';
import { getAllAdvertsSelector } from 'store/selectors';

const Location = () => {
  const allAdverts = useSelector(getAllAdvertsSelector);
  const allLocations = allAdverts.map(({ location }) => location);
  return (
    <select name="select" className={styles.select_location}>
      <option value="">Please select location</option>
      {allLocations.map((name, idx) => (
        <option key={idx} value={idx}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default Location;
