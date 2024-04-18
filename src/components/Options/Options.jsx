import styles from './Options.module.css';
import { createEquipment } from '../../utils/createEquipment';

const Options = () => {
  return (
    <div className={styles.wrap_options}>
      <p className={styles.subtitle_location}>Location</p>
      <select name="select" className={styles.select_location}>
        <option value="1">Ukraine, Kyiv</option>
        <option value="2">Ukraine, Poltava</option>
        <option value="3">Ukraine, Dnipro</option>
        <option value="4">Ukraine, Odesa</option>
        <option value="5">Ukraine, Kharkiv</option>
        <option value="6">Ukraine, Sumy</option>
        <option value="7">Ukraine, Lviv</option>
      </select>
      <p className={styles.subtitle_filter}>Filters</p>
      <h4 className={styles.title_options}>Vehicle equipment</h4>
      <div className={styles.line}></div>
      <ul>
        {createEquipment().map(({ id, value, text, svg }) => (
          <li key={id}>
            <button type="button" data-name={value}>
              <svg width='40' height='40'>
                <use href={svg}></use>
              </svg>
              {text}
            </button>
          </li>
        ))}
      </ul>
      <h4 className={styles.title_options}>Vehicle type</h4>
      <div className={styles.line}></div>
    </div>
  );
};

export default Options;
