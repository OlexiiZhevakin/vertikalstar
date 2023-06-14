import Link from "next/link";
import styles from './BlogHomeCard.module.scss';

type Props = {
  link: string,
  image: string,
  imageWebp: string,
  title: string,
  date: string
}

const BlogHomeCard = ({link, image, imageWebp, title, date}: Props) => {
  return(
    <Link href={link}>
      <article className={styles.card}>
        <picture>
          <source type="image/webp" srcSet={imageWebp} title={title}/>
          <img src={image} width="380" height="250" loading="lazy" alt={title} title={title} />
        </picture>
        <div>
          <span>{date}</span>
          <h3>{title}</h3>
        </div>
      </article>
    </Link>
  )
}

export default BlogHomeCard;