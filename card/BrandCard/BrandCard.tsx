
import Link from 'next/link';
import styles from './BrandCard.module.scss';
import Image from 'next/image';

type Props = {
  link: string,
  image: string,
  title: string,
  country: string
}

const BrandCard = ({link, image, title, country}: Props) => {
  return(
    <Link href={link}>
      <article className={styles.card}>
        <Image src={image} alt={title} title={title} width={268} height={168}/>
        <div>
          <h3>{title}</h3>
          <p>{country}</p>
        </div>
      </article>
    </Link>
  )
}

export default BrandCard;