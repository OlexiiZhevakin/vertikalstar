
import Link from 'next/link';
import styles from './BrandCard.module.scss';

type Props = {
  link: string,
  image: string,
  imageWebp: string,
  title: string,
  country: string
}

const BrandCard = ({link, image, imageWebp, title, country}: Props) => {
  return(
    <Link href={link}>
      <article className={styles.card}>
        <picture>
          <source type="image/webp" srcSet={imageWebp} title={title}/>
          <img src={image} width="268" height="168" loading="lazy" alt={title} title={title} />
        </picture>
        <div>
          <h3>{title}</h3>
          <p>{country}</p>
        </div>
      </article>
    </Link>
  )
}

export default BrandCard;