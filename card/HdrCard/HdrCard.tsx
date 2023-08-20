
import Image from 'next/image';
import styles from './hrdCard.module.scss';
import Link from 'next-intl/link';

type Props = {
  title: string,
  image: string,
  link: string
}

const HdrCard = ({title, link, image}: Props) => {
  return(
    <article className={styles.card}>
      <Image src={image} alt={title} title={title} width={240} height={180} />
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