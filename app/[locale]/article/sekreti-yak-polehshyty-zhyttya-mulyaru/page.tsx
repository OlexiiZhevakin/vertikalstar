
import Image from 'next/image';
import Help from './Help/Help';
import styles from './page.module.scss';
import Title from '@/app/[locale]/components/title/Title';
import { useTranslations } from 'next-intl';

const Article = () => {
  const t = useTranslations('articles.article1');
  return (
    <>
      <article>
        <section className={styles.head}>
          <div className="container">
            <Title title={'h1'}>{t('title')}</Title>
            <div className={styles.articleinfo}>
              <div>
                <p className={styles.date}>{t('publisher')} <time dateTime="2023-07-20">
                  {t('date')}</time>
                </p>
                <p className={styles.author}>{t('author')}</p>
              </div>
              <Image className={styles.articleimg} src='/img/blog/author.jpg' alt='' width={100} height={100}/>
            </div>
          </div>
        </section>

        <section className={styles.blog}>
          <div className="container">
            <Title title={'left'}>{t('title2')}</Title>
            <p className={styles.text}>{t('content1')}</p>
            <p className={styles.text}>{t('content2')}</p>
            <ul className={styles.fixed}>
              <li>{t('li1')}</li>
              <li>{t('li2')}</li>
              <li>{t('li3')}</li>
              <li>{t('li4')}</li>
            </ul>
            <p className={styles.text}>{t('content3')}</p>
            <p className={styles.text}>{t('content4')}</p>
            <figure>
              <Image src="/img/blog/page/5-sekretiv-yak-polehshyty-zhyttya-mulyaru/mulyar.jpg" width={1200} height={620} loading="lazy" alt={t('alt1')} />
              <figcaption>{t('title2')}</figcaption>
            </figure>
            <p className={styles.text}>{t('content5')}</p>
            <p className={styles.text}>{t('content6')}</p>
            <p className={styles.text}>{t('content7')}</p>
            <p className={styles.text}>{t('content8')}</p>
            <p className={styles.text}>{t('content9')}</p>
            <p className={styles.text}>
              {t('content10')}
              <span className={styles.line}></span>
            </p>
            <p className={styles.text}>{t('content11')}</p>
            <p className={styles.text}>{t('content12')}</p>
            <p className={styles.text}>{t('content13')}</p>
            <p className={styles.text}>
              <span className={styles.line}></span>
              <strong>{t('content14')}</strong>
            </p>
            <p className={styles.text}>
              <strong>{t('content15')}</strong>
            </p>
            <p className={styles.text}>{t('content16')}</p>
            <p className={styles.text}>
              <strong>{t('content17')}</strong>
            </p>

            <ul className={styles.list}>
              <li>
                {t('li5')}
                <p>{t('content18')}</p>
              </li>
              <li>
                {t('li6')}
                <p>{t('content19')}</p>
              </li>
              <li>
                {t('li7')}
                <p>{t('content20')}</p>
              </li>
              <li>
                {t('li8')}
                <p>{t('content21')}</p>
              </li>
              <li>
                {t('li9')}
                <p>{t('content22')}</p>
              </li>
              <li>
                {t('li10')}
                <p>{t('content23')}</p>
              </li>
              <li>
                {t('li11')}
                <p>{t('content24')}</p>
              </li>
            </ul>
            <figure>
              <Image className={styles.img} src='/img/blog/page/5-sekretiv-yak-polehshyty-zhyttya-mulyaru/dobavka-domolit.jpg' alt='Домоліт' title='Домоліт' width={496} height={620}/>
              <figcaption>
                {t('figcaption')}
                <span>"DOMOLIT"</span>
              </figcaption>
            </figure>

            <p className={styles.text}>{t('content25')}</p>

            <p className={styles.text}>{t('content26')}</p>
            
            <div className={styles.domolit}>
              <Image src='/img/blog/page/5-sekretiv-yak-polehshyty-zhyttya-mulyaru/domolit.png' alt='Domolit' width={300} height={300} />
              <div className={styles.content}>
                <ul className={styles.domolitlist}>
                  <li>
                    <span>{t('li12')}</span>
                    {t('content27')}
                  </li>
                  <li>
                    <span>{t('li13')}</span>
                    {t('content28')}
                  </li>
                  <li>
                    <span>{t('li14')}</span>
                    {t('content29')}
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.download}>
              <Image className={styles.icon} src='/img/blog/page/5-sekretiv-yak-polehshyty-zhyttya-mulyaru/file-pdf-solid.svg' alt='Скачати тех карту' title='Скачати тех карту' width={30} height={30}/>
              <a className='btn' href="/tekhnichna-karta.pdf" download>{t('download')}</a>
            </div>
          </div>
        </section>
      </article>
      <Help />
    </>
  )
}

export default Article;