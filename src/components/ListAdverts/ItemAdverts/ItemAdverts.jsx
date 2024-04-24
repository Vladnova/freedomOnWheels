import { useState } from 'react';
import Modal from 'components/Modal';
import ListDetailsAdvert from '../../ListDetailsAdvert';
import Button from 'components/Button';
import { settingActiveElement } from 'utils/settingActiveElement';
import { getOneAdvert } from 'api/adverts';
import Icon from 'components/Icon';
import styles from './ItemAdverts.module.css';

const ItemAdverts = ({ catalog }) => {
  const [showModal, setShowModal] = useState(false);
  const [activeElements, setActiveElements] = useState([]);
  const [advert, setadvert] = useState({});

  const handelClickShowMore = async id => {
    const data = await getOneAdvert(id);
    setadvert(data);
    isOpenModal();
  };

  const isOpenModal = e => {
    setShowModal(!showModal);
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
                    <Icon
                      className={`${styles.heart} ${
                        activeElements.includes(id) && styles.active_heart
                      }`}
                      width="24"
                      height="24"
                      name="heart"
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
                  <Icon
                    className={styles.active_star}
                    width="16"
                    height="16"
                    name="star"
                  />
                  <p className={styles.reviews}>
                    {rating}({reviews.length} Reviews)
                  </p>
                  <Icon
                    className={styles.map_pin}
                    width="16"
                    height="16"
                    name="map-pin"
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
                idxEl={6}
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
      {showModal && <Modal isToggleModal={isOpenModal} advert={advert} />}
    </>
  );
};

export default ItemAdverts;
