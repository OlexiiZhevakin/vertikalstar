import Title from '@/app/[locale]/components/title/Title'
import styles from './real.module.scss'
import Image from 'next/image'
import { useTranslations } from 'next-intl';

const Real = () => {
  const t = useTranslations('hidroizolyatsiya');
  return (
    <section className={styles.container}>
      <Title className={styles.title} title={'h2'}>{t('real.title')}</Title>

      <div className={styles.items}>

        <div className={styles.item}>
          <Image src="/img/technologies/page/hidro/hssmi/block_real/1.jpg" alt={t('real.alt')} width="490"
            height="400" title={t('real.alt')} />
        </div>

        <div className={styles.item}>
          <Image src="/img/technologies/page/hidro/hssmi/block_real/2.jpg" alt={t('real.alt')}
            width="490" height="400" title={t('real.alt')} />
        </div>

        <div className={styles.item}>
          <Image src="/img/technologies/page/hidro/hssmi/block_real/3.jpg" alt={t('real.alt')}
            width="490" height="400" title={t('real.alt')} />
        </div>

        <div className={styles.item}>
          <Image src="/img/technologies/page/hidro/hssmi/block_real/4.jpg" alt={t('real.alt')}
            width="490" height="400" title={t('real.alt')} />
        </div>

        <div className={styles.item}>
          <Image src="/img/technologies/page/hidro/hssmi/block_real/5.jpg" alt={t('real.alt')}
            width="490" height="400" title={t('real.alt')} />
        </div>

      </div>

    </section>

  )
}

export default Real