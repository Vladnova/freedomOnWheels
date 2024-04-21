import styles from './Options.module.css';
import TypeCar from './TypeCar';
import Equipment from './Equipment';
import { useState } from 'react';
import Location from './Location';
import Button from 'components/Button';

const Options = () => {
  const [activeElements, setActiveElements] = useState([]);

  return (
    <div className={styles.wrap_options}>
      <p className={styles.subtitle_location}>Location</p>
      <Location />
      <p className={styles.subtitle_filter}>Filters</p>
      <h4 className={styles.title_options}>Vehicle equipment</h4>
      <div className={styles.line}></div>
      <Equipment
        setActiveElements={setActiveElements}
        activeElements={activeElements}
      />
      <h4 className={styles.title_options}>Vehicle type</h4>
      <div className={styles.line}></div>
      <TypeCar
        setActiveElements={setActiveElements}
        activeElements={activeElements}
      />
      <Button className={styles.btn_search} type="button">
        Search
      </Button>
    </div>
  );
};

export default Options;
