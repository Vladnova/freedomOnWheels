import ListDetailsAdvert from 'components/ListDetailsAdvert';
import styles from './ItemAdverts.module.css';
import Button from 'components/Button';

const ItemAdverts = ({ catalog }) => {
  return (
    <>
      {catalog.map(
        ({
          _id,
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
          <li className={styles.item} key={_id}>
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
                  <h4>{name}</h4>
                  <h4>€{price.toFixed(2)}</h4>
                </div>
                <div className={styles.wrap_reviews}>
                  <p className={styles.reviews}>
                    {rating}({reviews.length} Reviews)
                  </p>
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
              <Button type="button" className={styles.button_show_more}>
                Show more
              </Button>
            </div>
          </li>
        )
      )}
    </>
  );
};

export default ItemAdverts;
