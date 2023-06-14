import Link from 'next/link';
import styles from './BlogCard.module.scss';

type Props = {
  link: string,
  image: string,
  imageWebp: string,
  title: string
}

const BlogCard = ({link, image, imageWebp, title}: Props) => {
  return(
    <Link href={link}>
      <article className={styles.card}>
        <picture>
          <source type="image/webp" srcSet={imageWebp} title={title}/>
          <img src={image} width="400" height="250" loading="lazy" alt={title} title={title} />
        </picture>
        <div>
          <h2>{title}</h2>
        </div>
      </article>
    </Link>
  )
}

export default BlogCard;