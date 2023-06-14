
import styles from './SliderCard.module.scss';
import Link from 'next/link';

type Props = {
  image: string,
  imageWebp: string,
  title: string,
  link: string,
  description: string
}

const SliderCard = ({image, imageWebp, title, link, description}: Props) => {
  return(
    <div className={styles.slide}>
      <Link href={link}>
        <picture>
          <source type="image/webp" srcSet={imageWebp} title={title}/>
          <img src={image} width="338" height="400" loading="lazy" alt={title} title={title} />
        </picture>
      </Link>
      <div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default SliderCard;