import styles from './Error.module.css';

const Error = ({message}) => {
  return (
    <>
      <h1 className={styles.title_error}>Error</h1>
      <p>{message}</p>
    </>
  );
};

export default Error;
