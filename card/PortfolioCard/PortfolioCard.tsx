import Image from 'next/image'
import styles from './portfolioCard.module.scss'

type Props = {
  image: string
  title: string
  place: string
}

const PortfolioCard = ({image, title, place}: Props) => {
  return(
    <article className={styles.card}>
      <div className={styles.img}>
        <Image 
          src={image} 
          alt={title} 
          title={title}
          width={360} 
          height={480}/>
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{place}</p>
      </div>
    </article>
  )
}

export default PortfolioCard