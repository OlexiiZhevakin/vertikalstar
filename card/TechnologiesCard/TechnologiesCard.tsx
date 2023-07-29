import Link from 'next/link';
import styles from './TechnologiesCard.module.scss';
import Image from 'next/image';


type Props = {
  image: string,
  title: string,
  link: string,
}

const TechnologiesCard = ({image, title, link}: Props) => {
  return(
    <article className={styles.card}>
      <Image src={image} alt={title} title={title} width={360} height={270} />
      <div>
        <h3>{title}</h3>
        <Link className='btn' href={link}>Докладніше</Link>
      </div>
    </article>
  )
}

export default TechnologiesCard;