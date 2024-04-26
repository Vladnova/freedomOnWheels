import styles from './Options.module.css';
import TypeCar from './TypeCar';
import Equipment from './Equipment';
import Location from './Location';
import Button from 'components/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFilter } from 'store/filterSlice';

const Options = () => {
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const [equipment, setEquipment] = useState([]);

  const dispatch = useDispatch();

  const getType = form => {
    setType(form);
  };

  const getLocation = value => {
    setLocation(value);
  };

  const getEquipment = arr => {
    setEquipment(arr);
  };

  const handlerClick = () => {
    dispatch(addFilter({ type, location, equipment }));
  };

  return (
    <div className={styles.wrap_options}>
      <p className={styles.subtitle_location}>Location</p>
      <Location onClickLocation={getLocation} />
      <p className={styles.subtitle_filter}>Filters</p>
      <h4 className={styles.title_options}>Vehicle equipment</h4>
      <div className={styles.line}></div>
      <Equipment onClickEquipment={getEquipment} />
      <h4 className={styles.title_options}>Vehicle type</h4>
      <div className={styles.line}></div>
      <TypeCar onClickType={getType} />
      <Button
        onClick={handlerClick}
        className={styles.btn_search}
        type="button"
      >
        Search
      </Button>
    </div>
  );
};

export default Options;
