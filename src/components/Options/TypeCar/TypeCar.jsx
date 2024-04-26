import { createTypeCar } from 'utils/createTypeCar';
import styles from './TypeCar.module.css';
import styleParent from '../Options.module.css';
import { settingActiveTypeCar } from 'utils/settingActiveTypeCar';
import { useEffect, useState } from 'react';

const TypeCar = ({ onClickType }) => {
  const [activeTypeCar, setActiveTypeCar] = useState('');

  useEffect(() => {
    onClickType(activeTypeCar);
  }, [onClickType, activeTypeCar]);

  const handelTypeClick = value => {
    settingActiveTypeCar({
      value,
      activeTypeCar,
      setActiveTypeCar,
    });
  };
  return (
    <ul className={styleParent.list_option}>
      {createTypeCar().map(({ id, value, text, svg }) => (
        <li
          key={id}
          data-name={value}
          className={`${styleParent.item_option} ${styles.item} ${
            activeTypeCar === value && styleParent.active_item
          }`}
          onClick={() => handelTypeClick(value)}
        >
          <button
            className={styleParent.btn_option}
            type="button"
            data-name={value}
          >
            {svg}
            <p className={styleParent.btn_text}>{text}</p>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TypeCar;
