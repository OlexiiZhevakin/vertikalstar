
import styles from './Services.module.scss';
import Link from 'next/link';


type Props = {
  title: string,
  image: string,
  imageWebp: string,
  description: string,
  link: string
}

const ServicesCard = ({title, image, imageWebp, description, link}: Props) => {
  return(
    <article className={styles.card}>
      <picture>
        <source type="image/webp" srcSet={imageWebp} title={title}/>
        <img src={image} width="290" height="296" loading="lazy" alt={title} title={title} />
      </picture>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={link} className='btn'>Детальніше</Link>
      </div>
    </article>
  )
}

export default ServicesCard;