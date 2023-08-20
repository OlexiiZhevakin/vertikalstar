import Image from 'next/image'
import styles from './picture.module.scss'
import Title from '@/app/[locale]/components/title/Title'
import { useTranslations } from 'next-intl';

const Picture = () => {
  const t = useTranslations('hidroizolyatsiya');
  return(
    <div className={styles.container}>
      <div className="container">
        <Title title={'h2'}>{t('picture.title')}</Title>

        <div className={styles.inner}>
          <Image src='/img/technologies/page/hidro/hssmi/picture/plisnyava-​na-stini.jpg' alt={t('picture.alt')} title={t('picture.alt')} width={580} height={400}/>
          <Image src='/img/technologies/page/hidro/hssmi/picture/shpalery-yaki-vidstayut-vid-volohy.jpg' alt={t('picture.alt')} title={t('picture.alt')} width={580} height={400} />
        </div>
      </div>
    </div>
  )
}

export default Picture