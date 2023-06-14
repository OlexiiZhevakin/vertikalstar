
import styles from './hrdCard.module.scss';
import Link from 'next/link';

type Props = {
  title: string,
  image: string,
  imageWebp: string,
  link: string
}

const HdrCard = ({title, link, image, imageWebp}: Props) => {
  return(
    <article className={styles.card}>
      <picture>
          <source type="image/webp" srcSet={imageWebp} title={title}/>
          <img src={image} width="240" height="180" loading="lazy" alt={title} title={title} />
        </picture>
      <div>
        <h3>{title}</h3>
        <Link className='btn' href={link}>
          Детальніше
        </Link>
      </div>
    </article>
  )
}

export default HdrCard;