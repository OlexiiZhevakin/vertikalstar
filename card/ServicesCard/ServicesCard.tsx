
import Image from 'next/image';
import styles from './Services.module.scss';
import Link from 'next-intl/link';



type Props = {
  title: string,
  image: string,
  description: string,
  link: string,
}

const ServicesCard = ({ title, image, description, link }: Props) => {


  return (
    <article className={styles.card}>
        <Image src={image} alt={title} title={title} width={290} height={296} />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.descr}>{description}</p>
        <Link href={link} className='btn'>Детальніше</Link>
      </div>
    </article>

  )
}

export default ServicesCard;


