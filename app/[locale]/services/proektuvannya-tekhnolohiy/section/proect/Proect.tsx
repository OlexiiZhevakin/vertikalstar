import Image from 'next/image'
import styles from './proect.module.scss'
import Title from '@/app/[locale]/components/title/Title'
import { useTranslations } from 'next-intl';

const Proect = () => {
  const t = useTranslations('proektuvannya-tekhnolohiy');
  return(
    <section>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.content}>
            <Title title={'left'}>{t('project.title')}</Title>
            <p>{t('project.content')}</p>
          </div>
          <Image src='/img/services/page/info.jpg' alt={t('project.alt')} width={470} height={430}/>
        </div>
      </div>
    </section>  
  )
}

export default Proect