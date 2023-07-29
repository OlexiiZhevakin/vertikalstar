import Image from 'next/image';
import styles from './BlogCard.module.scss';

type Props = {
  image: string,
  title: string
}

const BlogCard = ({ image, title}: Props) => {
  return(
    
      <article className={styles.card}>
        <Image className={styles.img} src={image} title={title} alt={title} width={400} height={250}/>
        <div>
          <h2>{title}</h2>
        </div>
      </article>
    
  )
}

export default BlogCard;