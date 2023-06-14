import BlogCard from "@/card/BlogCard/BlogCard";
import blogData from "@/data/blogData";
import styles from './List.module.scss';

const List = () => {
  return(
    <ul className={styles.list}>
      {blogData.map((card, index) => {
      return(
        <li key={index}>
        <BlogCard
          link={card.link}
          image={card.image}
          imageWebp={card.imageWebp}
          title={card.title}
        />
      </li>
      )
    })} 
    </ul>
  )
}

export default List;