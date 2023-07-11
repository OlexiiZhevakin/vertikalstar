
// import Image from 'next/image';
// import styles from './Services.module.scss';
// import Link from 'next/link';



// type Props = {
//   title: string,
//   image: string,
//   description: string,
//   link: string
// }

// const ServicesCard = ({title, image, description, link}: Props) => {

//   return(
//     <article className={styles.card}>
//         <Image src={image} alt={title} title={title} width={290} height={296} />
//       <div>
//         <h3>{title}</h3>
//         <p>{description}</p>
//         <Link href={link} className='btn'>Детальніше</Link>
//       </div>
//     </article>
//   )
// }

// export default ServicesCard;

'use client'
import { useState } from 'react';
import Image from 'next/image';
import styles from './Services.module.scss';
import Link from 'next/link';



type Props = {
  title: string,
  image: string,
  description: string,
  link: string,
  video: string
}

const ServicesCard = ({ title, image, description, link, video }: Props) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <article className={styles.card} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {isHovered && video ? (
        // Вместо изображения показывается видео
        <video className={styles.video} src={video} width={290} height={296} autoPlay muted loop poster={image} />
      ) : (
        // Иначе показывается изображение
        <Image src={image} alt={title} title={title} width={290} height={296} />
      )}
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={link} className='btn'>Детальніше</Link>
      </div>
    </article>

  )
}

export default ServicesCard;