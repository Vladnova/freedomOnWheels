import { createTypeCar } from 'utils/createTypeCar';
import styles from './TypeCar.module.css';
import styleParent from '../Options.module.css';
import { settingActiveElement } from 'utils/settingActiveElement';

const TypeCar = ({ setActiveElements, activeElements }) => {
  return (
    <ul className={styleParent.list_option}>
      {createTypeCar().map(({ id, value, text, svg }) => (
        <li
          key={id}
          className={`${styleParent.item_option} ${styles.item} ${
            activeElements.includes(id) && styleParent.active_item
          }`}
          onClick={() => settingActiveElement(id, activeElements, setActiveElements)}
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
