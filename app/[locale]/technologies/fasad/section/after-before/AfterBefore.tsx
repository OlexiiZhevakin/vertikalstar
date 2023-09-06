import Image from 'next/image'
import styles from './afterbefore.module.scss'
import Title from '@/app/[locale]/components/title/Title'
import { useTranslations } from 'next-intl';

const AfterBefore = () => {
  const t = useTranslations('fasad.after-before');
  return (
    <section className={styles.container}>
      <div className="container">
        <Title title={'line'}>{t('title')}</Title>
        <div className={styles.inner}>
          <div className={styles.img}>
            <Image src='/img/technologies/page/fasad/after-before/fasad-5.jpg' alt={t('alt')} width={570} height={420} />
            <Image src='/img/technologies/page/fasad/after-before/fasad-6.jpg' alt={t('alt')} width={570} height={420} />
          </div>
          <div className={styles.img}>
            <Image src='/img/technologies/page/fasad/after-before/fasad-7.jpg' alt={t('alt')} width={570} height={420} />
            <Image src='/img/technologies/page/fasad/after-before/fasad-8.jpg' alt={t('alt')} width={570} height={420} />
          </div>
          <div className={styles.img}>
            <Image src='/img/technologies/page/fasad/after-before/fasad-11.jpg' alt={t('alt')} width={570} height={420} />
            <Image src='/img/technologies/page/fasad/after-before/fasad-12.jpg' alt={t('alt')} width={570} height={420} />
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default AfterBefore