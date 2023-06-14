import Image from 'next/image';
import styles from './WayCard.module.scss';

type Props = {
  title: string,
  image: string,
  imageWebp: string,
  description: string,
  num: string
}

const WayCard = ({image, imageWebp, title, description, num}: Props) => {
  return(
    <article className={styles.card}>
      <picture>
          <source type="image/webp" srcSet={imageWebp} title={title}/>
          <img src={image} width="280" height="200" loading="lazy" alt={title} title={title} />
        </picture>
      <div>
        <h3>
          {title}
          <span>{num}</span>
        </h3>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default WayCard;
