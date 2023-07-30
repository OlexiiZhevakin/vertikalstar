import styles from './Blog.module.scss';
import BlogHomeCard from '@/card/BlogHomeCard/BlogHomeCard';
import Title from '@/components/title/Title';
import blogHomedData from '@/data/blogHome';
import Link from 'next/link';

const Blog = () => {
  return(
    <section>
      <div className="container">
        <Title title={'line'}>Блог та новини</Title>
        <ul className={styles.list}>
          {blogHomedData.map((card, index) => {
            return(
              <li key={index}>
                <BlogHomeCard
                  link={card.link}
                  image={card.image}
                  title={card.title}
                  date={card.date}
                />
              </li>
            )
          })}
        </ul>
        <div>
          <Link className={styles.btn} href="/blog">Читати більше</Link>
        </div>
      </div>
    </section>
  )
}

export default Blog;