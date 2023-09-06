import Image from 'next/image'
import styles from './picture.module.scss'
import Title from '@/app/[locale]/components/title/Title'
import { useTranslations } from 'next-intl';

const Picture = () => {
  const t = useTranslations('fasad.picture');
  return (
    <section>
      <div className="container">
        <Title title={'h2'}>{t('title')}</Title>
        <p className={styles.descr}>{t('content')}</p>
        <div className={styles.inner}>
          <Image src='/img/technologies/page/fasad/darvina.jpg' alt={t('alt1')} width={580} height={400}/>
          <Image src='/img/technologies/page/fasad/harkivska-horalnaya-sinagoga.jpg' alt={t('alt2')} width={580} height={400}/>
        </div>
      </div>
    </section>
  )
}

export default Picture