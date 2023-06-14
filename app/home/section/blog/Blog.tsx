import styles from './Blog.module.scss';
import BlogHomeCard from '@/card/BlogHomeCard/BlogHomeCard';
import blogHomedData from '@/data/blogHome';

const Blog = () => {
  return(
    <section>
      <div className="container">
        <h2>Блог та новини</h2>
        <ul className={styles.list}>
          {blogHomedData.map((card, index) => {
            return(
              <li key={index}>
                <BlogHomeCard
                  link={card.link}
                  image={card.image}
                  imageWebp={card.imageWebp}
                  title={card.title}
                  date={card.date}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Blog;