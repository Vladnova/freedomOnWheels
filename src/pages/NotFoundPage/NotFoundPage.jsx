import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrap_not_found}>
      <h1 className={styles.title_404}>404</h1>
      <h3 className={styles.subtitle_404}>Not Found</h3>
      <p className={styles.text_404}>
        The resource requested could not be found on this server!
      </p>
      <Button className={styles.btn_404} type="button" onClick={() => navigate('/')}>
        Go Home Page
      </Button>
    </div>
  );
};

export default NotFoundPage;
