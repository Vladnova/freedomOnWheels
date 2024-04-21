import { useState } from 'react';
import Modal from 'components/Modal';
import ListDetailsAdvert from './ListDetailsAdvert';
import Button from 'components/Button';
import styles from './ItemAdverts.module.css';
import { ReactComponent as IconStar } from '../../../img/svg/star.svg';
import { ReactComponent as IconHeart } from '../../../img/svg/heart.svg';
import { ReactComponent as IconMapPin } from '../../../img/svg/map-pin.svg';
import { settingActiveElement } from 'utils/settingActiveElement';

const ItemAdverts = ({ catalog }) => {
  const [showModal, setShowModal] = useState(false);
  const [activeElements, setActiveElements] = useState([]);

  const handelClickShowMore = id => {
    setShowModal(true);
  };

  return (
    <>
      {catalog.map(
        ({
          id,
          name,
          description,
          gallery,
          location,
          rating,
          price,
          reviews,
          transmission,
          adults,
          engine,
          details,
        }) => (
          <li className={styles.item} key={id}>
            <div className={styles.wrap_img}>
              <img
                className={styles.image}
                src={gallery[0]}
                alt={name}
                width={290}
                height={310}
              />
            </div>
            <div className={styles.wrap_right_part}>
              <div className={styles.wrap_head_item}>
                <div className={styles.wrap_subtitle}>
                  <h4 className={styles.name_and_prise_text}>{name}</h4>
                  <div className={styles.wrap_price}>
                    <h4 className={styles.name_and_prise_text}>
                      €{price.toFixed(2)}
                    </h4>
                    <IconHeart
                      className={`${styles.heart} ${activeElements.includes(id) && styles.active_heart}`}
                      width="24"
                      height="24"
                      aria-label="heart"
                      onClick={() =>
                        settingActiveElement(
                          id,
                          activeElements,
                          setActiveElements
                        )
                      }
                    />
                  </div>
                </div>
                <div className={styles.wrap_reviews}>
                  <IconStar width="16" height="16" aria-label="star" />
                  <p className={styles.reviews}>
                    {rating}({reviews.length} Reviews)
                  </p>
                  <IconMapPin
                    className={styles.map_pin}
                    width="16"
                    height="16"
                    aria-label="map-pin"
                  />
                  <p>{location}</p>
                </div>
              </div>
              <p className={styles.description_advert}>{description}...</p>

              <ListDetailsAdvert
                details={details}
                adults={adults}
                transmission={transmission}
                engine={engine}
              />
              <Button
                type="button"
                className={styles.button_show_more}
                onClick={() => handelClickShowMore(id)}
              >
                Show more
              </Button>
            </div>
          </li>
        )
      )}
      {showModal && <Modal />}
    </>
  );
};

export default ItemAdverts;
