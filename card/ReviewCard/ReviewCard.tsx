
import styles from './ReviewCard.module.scss';
import Link from 'next/link';

type Props = {
  description: string,
  image: string,
  imageWebp: string,
  title: string,
  author: string,
  link: string
}

const ReviewCard = ({description, image, imageWebp, title, author, link}: Props) => {
  return(
    <div className={styles.item}>
      <p>{description}</p>
      <picture>
        <source type="image/webp" srcSet={imageWebp} title={title}/>
        <img src={image} width="100" height="100" loading="lazy" alt={description} title={title} />
      </picture>
      <p className={styles.author}>{author}</p>
      <Link className="btn" href={link}>Детальніше</Link>
    </div>
  )
}

export default ReviewCard;