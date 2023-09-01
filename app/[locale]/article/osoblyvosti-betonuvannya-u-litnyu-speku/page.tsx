
import Title from '@/app/[locale]/components/title/Title'
import Help from './help/Help'
import styles from './page.module.scss'
import Image from 'next/image'
import { useTranslations } from 'next-intl';


const Article = () => {
  const t = useTranslations('articles.article3');
  return (
    <>
      <article>
        <section className={styles.head}>
          <div className="container">
            <Title title={'h1'}>{t('title')}</Title>
            <div className={styles.articleinfo}>
              <div>
                <p className={styles.date}>{t('publisher')}<time dateTime="2023-03-13">
                  {t('date')}</time>
                </p>
                <p className={styles.author}>{t('author')}</p>
              </div>
              <Image className={styles.articleimg} src='/img/blog/author.jpg' alt='' title='' width={100} height={100} />
            </div>
          </div>
        </section>

        <div className="blog">
          <div className="container">
            <div className={styles.descr}>
              <p>{t('content1')}</p>
              <p>{t('content2')}</p>
              <p>{t('content3')}</p>
              <p className={styles.promo}>{t('content4')}</p>
              <p>{t('content5')}</p>
              <p>{t('content6')}</p>
            </div>
            <Image className={styles.img} src='/img/blog/page/osoblyvosti-betonuvannya-u-litnyu-speku/osoblyvosti-betonuvannya-u-litnyu-speku-1.jpg' alt='' title='' width={833} height={500} />
            <div className={styles.descr}>
              <p>{t('content7')}</p>
              <p>{t('content8')}</p>
            </div>

            <div className={styles.descr}>
              <p className={styles.promo}>{t('content9')}</p>
              <p className={styles.promo}>{t('content10')}</p>
              <p>{t('content11')}</p>
              <p>{t('content12')}</p>
              <p>{t('content13')}</p>
              <p>{t('content14')}</p>
              <p>{t('content15')}</p>
            </div>
            <Image className={styles.img} src='/img/blog/page/osoblyvosti-betonuvannya-u-litnyu-speku/osoblyvosti-betonuvannya-u-litnyu-speku-2.jpg' alt='' title='' width={833} height={500} />
            <div className={styles.block}>
              <p className={styles.promo}>{t('content16')}</p>
              <p>{t('content17')}</p>
              <p>{t('content18')}</p>
              <p>{t('content19')}</p>
              <p>{t('content20')}</p>
            </div>

            <div className={styles.descr}>
              <p>{t('content21')}</p>
            </div>
            <Image className={styles.img} src='/img/blog/page/osoblyvosti-betonuvannya-u-litnyu-speku/osoblyvosti-betonuvannya-u-litnyu-speku-3.jpg' alt='' title='' width={833} height={500} />
            <div className={styles.descr}>
              <p>{t('content22')}</p>
              <p>{t('content23')}</p>
              <p>{t('content24')}</p>
            </div>
            <Image className={styles.img} src='/img/blog/page/osoblyvosti-betonuvannya-u-litnyu-speku/osoblyvosti-betonuvannya-u-litnyu-speku-4.jpg' alt='' title='' width={833} height={500} />
            <div className={styles.descr}>
              <p className={styles.promo}>{t('content25')}</p>
              <p className={styles.discount}>{t('content26')}</p>
              <div className={styles.promocode}>
                <p>{t('content27')}</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Help />
    </>
  )
}

export default Article