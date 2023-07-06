import styles from './BlogCard.module.scss';

type Props = {
  image: string,
  imageWebp: string,
  title: string
}

const BlogCard = ({ image, imageWebp, title}: Props) => {
  return(
    
      <article className={styles.card}>
        <picture>
          <source type="image/webp" srcSet={imageWebp} title={title}/>
          <img src={image} width="400" height="250" loading="lazy" alt={title} title={title} />
        </picture>
        <div>
          <h2>{title}</h2>
        </div>
      </article>
    
  )
}

export default BlogCard;