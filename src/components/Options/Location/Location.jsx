import styles from './Location.module.css';

const Location = () => {
  return (
    <select name="select" className={styles.select_location}>
      <option value="1">Ukraine, Kyiv</option>
      <option value="2">Ukraine, Poltava</option>
      <option value="3">Ukraine, Dnipro</option>
      <option value="4">Ukraine, Odesa</option>
      <option value="5">Ukraine, Kharkiv</option>
      <option value="6">Ukraine, Sumy</option>
      <option value="7">Ukraine, Lviv</option>
    </select>
  );
};

export default Location;
