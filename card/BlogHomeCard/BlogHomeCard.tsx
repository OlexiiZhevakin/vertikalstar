import Link from "next/link";
import styles from './BlogHomeCard.module.scss';
import Image from "next/image";

type Props = {
  link: string,
  image: string,
  title: string,
  date: string
}

const BlogHomeCard = ({link, image, title, date}: Props) => {
  return(
    <Link href={link}>
      <article className={styles.card}>
        <Image className={styles.img} src={image} alt={title} title={title} width="380" height="250"/>
        <div>
          <span>{date}</span>
          <h3>{title}</h3>
        </div>
      </article>
    </Link>
  )
}

export default BlogHomeCard;