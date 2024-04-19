import styles from './Options.module.css';
import TypeCar from './TypeCar';
import Equipment from './Equipment';
import { useState } from 'react';
import Location from './Location';

const Options = () => {
  const [activeElements, setActiveElements] = useState([]);

  const handlerClick = id => {
    let updateIdElements;
    const isActive = activeElements.includes(id);

    if (isActive) {
      updateIdElements = activeElements.filter(idEl => idEl !== id);
    } else {
      updateIdElements = [...activeElements, id];
    }

    setActiveElements(updateIdElements);
  };
  return (
    <div className={styles.wrap_options}>
      <p className={styles.subtitle_location}>Location</p>
      <Location />
      <p className={styles.subtitle_filter}>Filters</p>
      <h4 className={styles.title_options}>Vehicle equipment</h4>
      <div className={styles.line}></div>
      <Equipment onClick={handlerClick} activeElements={activeElements} />
      <h4 className={styles.title_options}>Vehicle type</h4>
      <div className={styles.line}></div>
      <TypeCar onClick={handlerClick} activeElements={activeElements} />
    </div>
  );
};

export default Options;
