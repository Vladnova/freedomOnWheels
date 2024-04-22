import styles from './Modal.module.css';
import ReactDOM from 'react-dom';
import { ReactComponent as IconClose } from '../../img/svg/close.svg';
import { ReactComponent as IconStar } from '../../img/svg/star.svg';
import { ReactComponent as IconMapPin } from '../../img/svg/map-pin.svg';
import Button from 'components/Button';
import { useEffect, useState } from 'react';

const Modal = ({ isToggleModal, advert }) => {
  useEffect(() => {
    const handlerESC = e => {
      if (e.code === 'Escape') {
        isToggleModal();
      }
    };

    document.addEventListener('keydown', handlerESC);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handlerESC);
      document.body.style.overflow = 'auto';
    };
  }, [isToggleModal]);

  const modalRoot = document.getElementById('modal');
  const [toggleActiveBtn, setToggleActiveBtn] = useState(0);
  if (!modalRoot) return null;

  const handleClickOverlay = event => {
    if (event.target === event.currentTarget) {
      isToggleModal();
    }
  };

  const handleClickFeatures = () => {
    setToggleActiveBtn(1);
  };

  const handleClickReviews = () => {
    setToggleActiveBtn(2);
  };


  const {
    name,
    description,
    gallery,
    location,
    rating,
    price,
    // reviews,
    // transmission,
    // adults,
    // engine,
    // details,
  } = advert;

  return ReactDOM.createPortal(
    <div
      className={`${styles.modal} ${
        isToggleModal ? styles.open : styles.closing
      }`}
    >
      <div className={styles.modal_overlay} onClick={handleClickOverlay}>
        <div className={styles.modal_content}>
          <div className={styles.wrap_head_modal}>
            <h4 className={styles.name}>{name}</h4>
            <IconClose className={styles.close_btn} width="32" height="32" aria-label="close" onClick={isToggleModal}/>
          </div>
          <div className={styles.wrap_loc_and_rating}>
            <IconStar width="16" height="16" aria-label="star" />
            <p className={styles.reviews}>{rating} (Reviews)</p>
            <IconMapPin
              className={styles.map_pin}
              width="16"
              height="16"
              aria-label="map-pin"
            />
            <p>{location}</p>
          </div>
          <h4 className={styles.price_modal}>€{price.toFixed(2)}</h4>
          <ul className={styles.gallery}>
            {gallery.map((url, idx) => (
              <li className={styles.wrap_img} key={idx}>
                <img className={styles.image} src={url} alt={name} />
              </li>
            ))}
          </ul>
          <p className={styles.desc_modal}>{description}</p>
          <div className={styles.wrap_btn}>
            <Button
              onClick={handleClickFeatures}
              className={`${styles.btn_modal} ${
                toggleActiveBtn === 1 && styles.active_btn
              }`}
              type="button"
            >
              Features
            </Button>
            <Button
            onClick={handleClickReviews}
              className={`${styles.btn_modal} ${
                toggleActiveBtn === 2 && styles.active_btn
              }`}
              type="button"
            >
              Reviews
            </Button>
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
