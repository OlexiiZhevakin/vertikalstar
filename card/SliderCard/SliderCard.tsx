
import Image from 'next/image';
import styles from './SliderCard.module.scss';

type Props = {
  image: string,
  title: string,
  description: string
}

const SliderCard = ({image, title, description}: Props) => {
  return(
    <div className={styles.slide}>
      {/* <Link href={link}> */}
      <Image src={image} alt={title} title={title} width={340} height={340}/>
      {/* </Link> */}
      <div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default SliderCard;