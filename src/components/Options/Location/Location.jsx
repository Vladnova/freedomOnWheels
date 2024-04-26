import { useSelector } from 'react-redux';
import styles from './Location.module.css';
import { getAllAdvertsSelector } from 'store/selectors';

const Location = ({ onClickLocation }) => {
  const allAdverts = useSelector(getAllAdvertsSelector);
  const allLocations = [...new Set(allAdverts.map(item => item.location))];

  const handelChange = e => {
    onClickLocation(e.target.value);
  };
  return (
    <select
      name="select"
      className={styles.select_location}
      onChange={handelChange}
    >
      <option value="">Please select location</option>
      {allLocations.map((name, idx) => (
        <option key={idx} value={name}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default Location;
