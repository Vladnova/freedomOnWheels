import styles from './Modal.module.css';
import ReactDOM from 'react-dom';
import Button from 'components/Button';
import { useEffect, useState } from 'react';
import Features from 'components/Features';
import Form from 'components/Form';
import Icon from 'components/Icon';

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
  const [toggleActiveBtn, setToggleActiveBtn] = useState('');
  if (!modalRoot) return null;

  const handleClickOverlay = event => {
    if (event.target === event.currentTarget) {
      isToggleModal();
    }
  };

  const handleClickFeatures = () => {
    setToggleActiveBtn('features');
  };

  const handleClickReviews = () => {
    setToggleActiveBtn('reviews');
  };

  const {
    name,
    description,
    gallery,
    location,
    rating,
    price,
    // reviews,
    transmission,
    adults,
    engine,
    details,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = advert;

  const vehicleDetails = {
    form,
    length,
    width,
    height,
    tank,
    consumption,
  };

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
            <Icon
              className={styles.close_btn}
              width="32"
              height="32"
              name="close"
              onClick={isToggleModal}
            />
          </div>
          <div className={styles.wrap_loc_and_rating}>
            <Icon width="16" height="16" name="star" />
            <p className={styles.reviews}>{rating} (Reviews)</p>
            <Icon
              className={styles.map_pin}
              width="16"
              height="16"
              name="map-pin"
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
                toggleActiveBtn === 'features' && styles.active_btn
              }`}
              type="button"
            >
              Features
            </Button>
            <Button
              onClick={handleClickReviews}
              className={`${styles.btn_modal} ${
                toggleActiveBtn === 'reviews' && styles.active_btn
              }`}
              type="button"
            >
              Reviews
            </Button>
          </div>
          {toggleActiveBtn === 'features' && (
            <>
              <div className={styles.wrap_features}>
                <Features
                  vehicleDetails={vehicleDetails}
                  transmission={transmission}
                  adults={adults}
                  engine={engine}
                  details={details}
                />
                <Form />
              </div>
            </>
          )}
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
