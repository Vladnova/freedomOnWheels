import styles from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  console.log('reviews', reviews);
  return (
    <ul className={styles.list_reviews}>
      {reviews.map(({ comment, reviewer_name, reviewer_rating }, idx) => (
        <li key={idx}>
          <div className={styles.wrap_user}>
            <p className={styles.avatar}>{reviewer_name.slice(0, 1)}</p>
            <div>
              <p className={styles.name}>{reviewer_name}</p>
              <p>{reviewer_rating}</p>
            </div>
          </div>
          <p className={styles.comment}>{comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
