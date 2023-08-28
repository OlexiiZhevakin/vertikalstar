
import Image from 'next/image';
import styles from './About.module.scss'
import Btn from '@/app/[locale]/components/Btn/Btn';
import { useTranslations } from 'next-intl';

const About = () => {
  const t = useTranslations('home');
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.img}>
            <Image src='/img/about/my-photo.jpg' width={360} height={460} alt={t('about.alt')} />
          </div>
          <div className={styles.content}>
            <h3>
              {t('about.title')}
            </h3>
            <div className={styles.items}>
              <div>
                <i className="fa-regular fa-circle-check"></i>
                <p>
                  {t('about.content1')}
                </p>
              </div>
              <div>
                <i className="fa-regular fa-circle-check"></i>
                <p>
                  {t('about.content2')}
                </p>
              </div>
              <div>
                <i className="fa-regular fa-circle-check"></i>
                <p>
                  {t('about.content3')}
                </p>
              </div>

            </div>
            <Btn className={styles.btn} href='/about'>{t('about.btn')}</Btn>
            <p className={styles.signature}>
              {t('about.content4')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;