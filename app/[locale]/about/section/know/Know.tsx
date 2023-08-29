import Link from 'next-intl/link'
import styles from './know.module.scss'
import Image from 'next/image'
import Title from '@/app/[locale]/components/title/Title'
import { useTranslations } from 'next-intl';

const Know = () => {
  const t = useTranslations('about');
  return(
    <section className={styles.know}>
      <div className="container">
        <Title title={'h2'}>{t('know.title')}</Title>
        <div className={styles.inner}>
          <div className={styles.info}>
            <h3>{t('know.subtitle')}</h3>
            <p>{t('know.content1')}</p>
            <Link className='btn' href="/portfolio">{t('know.btn')}</Link>
            <p>{t('know.content2')}</p>
          </div>
          <Image src='/img/about/fasad-2.jpg' alt='' title='' width={540} height={420}/>
        </div>
      </div>
    </section>
  )
}

export default Know