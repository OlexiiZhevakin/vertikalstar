import Image from 'next/image';
import styles from './problem.module.scss'
import { useTranslations } from 'next-intl';

const Problem = () => {
  const t = useTranslations('hidroizolyatsiya');
  return (
    <section className={styles.container}>

      <div className="container">

        <div className={styles.item}>

          <div className={styles.img}>
            <Image src="/img/technologies/page/hidro/hssmi/block_about/shlyakhi-pidyomu-volohy.jpg" alt={t('problem.alt')} width={600} height={500}/>
          </div>

          <div className={styles.info}>
            <h3 className={styles.title}>
              {t('problem.title')}
            </h3>
            <div className={styles.text}>
              <p>
                {t('problem.content1')}
              </p>
              <p>
                {t('problem.content2')}
              </p>
              <p>
                {t('problem.content3')}
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Problem