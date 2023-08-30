
import styles from './services.module.scss'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next-intl/link'

const ServicesCards = () => {
  const t = useTranslations('components');
  return (
        <ul className={styles.list}>

          <li className={styles.item}>
            <article className={styles.card}>
              <Image src='/img/services/proektuvannya-tekhnolohiy.jpg'
                alt={t('services.proektuvannya-tekhnolohiy.title')}
                width={290}
                height={290}
                priority />
              <div className={styles.content}>
                <h3 className={styles.subtitle}>
                  {t('services.proektuvannya-tekhnolohiy.title')}
                </h3>
                <p className={styles.descr}>
                  {t('services.proektuvannya-tekhnolohiy.description')}
                </p>
                <Link className='btn' href='/services/proektuvannya-tekhnolohiy'>
                  {t('services.proektuvannya-tekhnolohiy.btn')}
                </Link>
              </div>
            </article>
          </li>

          <li className={styles.item}>
            <article className={styles.card}>
              <Image src='/img/services/vertikal.jpg'
                alt={t('services.akademiya-vertykal.title')}
                width={290}
                height={290}
                priority />
              <div className={styles.content}>
                <h3 className={styles.subtitle}>
                  {t('services.akademiya-vertykal.title')}
                </h3>
                <p className={styles.descr}>
                  {t('services.akademiya-vertykal.description')}
                </p>
                <Link className='btn' href='/services/akademiya-vertykal'>
                  {t('services.akademiya-vertykal.btn')}
                </Link>
              </div>
            </article>
          </li>

          <li className={styles.item}>
            <article className={styles.card}>
              <Image src='/img/services/byuro-rekonstruktsiyi-ta-restavratsiyi.jpg'
                alt={t('services.byuro-rekonstruktsiyi.title')}
                width={290}
                height={290}
                priority />
              <div className={styles.content}>
                <h3 className={styles.subtitle}>
                  {t('services.byuro-rekonstruktsiyi.title')}
                </h3>
                <p className={styles.descr}>
                  {t('services.byuro-rekonstruktsiyi.description')}
                </p>
                <Link className='btn' href='/services/byuro-rekonstruktsiyi'>
                  {t('services.byuro-rekonstruktsiyi.btn')}
                </Link>
              </div>
            </article>
          </li>

          <li className={styles.item}>
            <article className={styles.card}>
              <Image src='/img/services/byuro-budivelnoyi-khimiyi.jpg'
                alt={t('services.byuro-budivelnoyi-khimiyi.title')}
                width={290}
                height={290}
                priority />
              <div className={styles.content}>
                <h3 className={styles.subtitle}>
                  {t('services.byuro-budivelnoyi-khimiyi.title')}
                </h3>
                <p className={styles.descr}>
                  {t('services.byuro-budivelnoyi-khimiyi.description')}
                </p>
                <Link className='btn' href='/services/byuro-budivelnoyi-khimiyi'>
                  {t('services.byuro-budivelnoyi-khimiyi.btn')}
                </Link>
              </div>
            </article>
          </li>

        </ul>
  )
}

export default ServicesCards