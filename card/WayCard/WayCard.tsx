import Image from 'next/image';
import styles from './WayCard.module.scss';
import { useTranslations } from 'next-intl';

type Props = {
  title: string,
  image: string,
  description: string,
  num: string
}

const WayCard = ({image, title, description, num}: Props) => {
  const t = useTranslations('home');
  return(
    <article className={styles.card}>
      <Image src={image} alt={title} title={title} width={280} height={200} />
      <div>
        <h3>
          
          <span>{num}</span>
        </h3>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default WayCard;
