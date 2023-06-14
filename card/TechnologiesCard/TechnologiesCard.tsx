import Link from 'next/link';
import styles from './TechnologiesCard.module.scss';


type Props = {
  image: string,
  imageWebp: string,
  title: string,
  link: string,
}

const TechnologiesCard = ({image, imageWebp, title, link}: Props) => {
  return(
    <article className={styles.card}>
      <picture>
        <source type="image/webp" srcSet={imageWebp} title={title}/>
        <img src={image} width="360" height="270" loading="lazy" alt={title} title={title} />
      </picture>
      <div>
        <h3>{title}</h3>
        <Link className='btn' href={link}>Докладніше</Link>
      </div>
    </article>
  )
}

export default TechnologiesCard;