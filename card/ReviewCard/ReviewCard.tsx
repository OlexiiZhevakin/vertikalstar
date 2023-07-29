
import Image from 'next/image';
import styles from './ReviewCard.module.scss';
import Link from 'next/link';

type Props = {
  description: string,
  image: string,
  title: string,
  author: string,
  link: string
}

const ReviewCard = ({ description, image, title, author, link }: Props) => {
  return (
    <div className={styles.item}>
      <div className={styles.inner}>
        <p>{description}</p>
        <Image src={image} alt={description} title={title} width={100} height={100} />
        <p className={styles.author}>{author}</p>
        <Link className="btn" href={link}>Детальніше</Link>
      </div>
    </div>
  )
}

export default ReviewCard;