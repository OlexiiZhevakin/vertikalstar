import styles from './portfolioCard.module.scss'

type Props = {
  imageWebp: string
  image: string
  title: string
  place: string
}

const PortfolioCard = ({imageWebp, image, title, place}: Props) => {
  return(
    <article className={styles.card}>
      <div className={styles.img}>
        <picture>
          <source type="image/webp" srcSet={imageWebp} title={title}/>
          <img src={image} width={360} height={480} loading="lazy" alt={title} title={title} />
        </picture>
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{place}</p>
      </div>
    </article>
  )
}

export default PortfolioCard