import styles from './Modal.module.css';

const Modal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <h4>TEST</h4>
        <svg
          className={styles.btn_close}
          width="16"
          height="16"
          aria-label="close-icon"
        >
          <use href="../../img/sprite.svg#icon-fully"></use>
        </svg>
        <p>Reviews</p>
        <p>Location</p>
        <h4>Price</h4>
        <ul>
          <li>
            <img src="" alt="" />
          </li>
        </ul>
        <p>Description</p>
        <ul>
          <li><a href="/">Feature</a></li>
          <li><a href="/">Reviews</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
