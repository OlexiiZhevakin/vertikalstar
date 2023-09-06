import styles from './what.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Title from '@/app/[locale]/components/title/Title';
import { useTranslations } from 'next-intl';


const What = () => {
  const t = useTranslations('fasad.what');
  return (
    <section className={styles.container}>
      <div className="container">
        <p className={styles.subtitle}>{t('subtitle')}</p>
        <Title title={'left'}>{t('title')}</Title>
        <div className={styles.inner}>
          <div className={styles.img}>
            <Image src='/img/technologies/page/fasad/after-before/fasad-4.jpg' alt={t('alt')} width={380} height={520} />
          </div>

          <div className={styles.info}>

            <div className={styles.items}>

              <div className={styles.item}>
                <FontAwesomeIcon className={styles.icon} icon={faCircleCheck} />
                <p>{t('content1')}</p>
              </div>

              <div className={styles.item}>
                <FontAwesomeIcon className={styles.icon} icon={faCircleCheck} />
                <p>{t('content2')}</p>
              </div>

              <div className={styles.item}>
                <FontAwesomeIcon className={styles.icon} icon={faCircleCheck} />
                <p>{t('content3')}</p>
              </div>

              <div className={styles.item}>
                <FontAwesomeIcon className={styles.icon} icon={faCircleCheck} />
                <p>{t('content4')}</p>
              </div>

              <div className={styles.item}>
                <FontAwesomeIcon className={styles.icon} icon={faCircleCheck} />
                <p>{t('content5')}</p>
              </div>

              <div className={styles.item}>
                <FontAwesomeIcon className={styles.icon} icon={faCircleCheck} />
                <p>{t('content6')}</p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default What