import styles from './what.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Title from '@/app/[locale]/components/title/Title';
import { useTranslations } from 'next-intl';

const What = () => {
  const t = useTranslations('hidroizolyatsiya');
  return(
    <section className={styles.container}>
      <div className="container">
        <Title title={'h2'}>{t('what.title')}</Title>
        <div className={styles.inner}>
          <div className={styles.img}>
            <Image src='/img/technologies/page/hidro/hssmi/block_about/metod-inyektsiy.jpg' alt={t('what.alt')} title={t('what.alt')} width={600} height={500}/>
          </div>

          <div className={styles.info}>

            <h3 className={styles.subtitle}>
              {t('what.subtitle')}
            </h3>

            <div className={styles.items}>

              <div className={styles.item}>
                <FontAwesomeIcon className={styles.icon} icon={faCircleCheck} />
                <p>
                  {t('what.content1')}
                </p>
              </div>

              <div className={styles.item}>
                <FontAwesomeIcon className={styles.icon} icon={faCircleCheck} />
                <p>
                  {t('what.content2')}
                </p>
              </div>

              <div className={styles.item}>
                <FontAwesomeIcon className={styles.icon} icon={faCircleCheck} />
                <p>
                  {t('what.content3')}
                </p>
              </div>

              <div className={styles.item}>
                <FontAwesomeIcon className={styles.icon} icon={faCircleCheck} />
                <p>
                  {t('what.content4')}
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>

  )
}

export default What