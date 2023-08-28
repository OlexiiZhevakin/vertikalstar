import Btn from '@/app/[locale]/components/Btn/Btn';
import styles from './Blog.module.scss';
import BlogHomeCard from '@/card/BlogHomeCard/BlogHomeCard';
import Title from '@/app/[locale]/components/title/Title';
import blogHomedData from '@/data/blogHome';
import { useTranslations } from 'next-intl';

const Blog = () => {
  const t = useTranslations('home');
  return(
    <section>
      <div className="container">
        <Title title={'line'}>{t('blog.title')}</Title>
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
        <div className={styles.btn}>
          <Btn href='/blog'>{t('blog.btn')}</Btn>
        </div>
      </div>
    </section>
  )
}

export default Blog;