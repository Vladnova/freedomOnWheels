import styles from './Options.module.css';
import TypeCar from './TypeCar';
import Equipment from './Equipment';

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
      <Equipment />
      <h4 className={styles.title_options}>Vehicle type</h4>
      <div className={styles.line}></div>
      <TypeCar />
    </div>
  );
};

export default Options;
