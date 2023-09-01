
import Image from 'next/image';
import styles from './page.module.scss';
import Title from '@/app/[locale]/components/title/Title';
import { useTranslations } from 'next-intl';

const Article = () => {
  const t = useTranslations('articles.article2');
  return (
    <article>
      <section className={styles.head}>
        <div className="container">
          <Title title={'h1'}>{t('title')}</Title>
          <div className={styles.articleinfo}>
            <div>
              <p className={styles.date}>{t('publisher')}<time dateTime="2023-02-06">
                {t('date')}</time>
              </p>
              <p className={styles.author}>{t('author')}</p>
            </div>
            <Image className={styles.articleimg} src='/img/blog/author.jpg' alt='' title='' width={100} height={100} />
          </div>
        </div>
      </section>

      <section className={styles.blog}>
        <div className="container">
          <Title title={'left'}>{t('title2')}</Title>
          <p>{t('content1')}</p>
          <p>{t('content2')}</p>
          <figure>
            <Image src="/img/blog/page/remmers-tsikavi-fakty-o-kompaniyi/bernhard-remmers.jpg" width={451} height={651} alt={t('alt1')} />
            <figcaption className={styles.figcaption}>{t('alt1')}</figcaption>
          </figure>
          <p>{t('content3')}</p>
          <p>{t('content4')}</p>
          <figure>
            <Image src="/img/blog/page/remmers-tsikavi-fakty-o-kompaniyi/logistika-remmers.jpg" width={1200} height={616} alt={t('alt2')} />
            <figcaption className={styles.figcaption}>{t('alt2')}</figcaption>
          </figure>
          <p>{t('content5')}</p>
          <figure>
            <Image src="/img/blog/page/remmers-tsikavi-fakty-o-kompaniyi/labalatoriya-remmers.jpg" width={1200} height={616} alt={t('alt3')} />
            <figcaption className={styles.figcaption}>{t('alt3')}</figcaption>
          </figure>
          <p>{t('content6')}</p>
        </div>
      </section>
    </article>
  )
}

export default Article;