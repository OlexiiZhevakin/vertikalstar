import Image from 'next/image'
import styles from './about.module.scss'
import Title from '@/app/[locale]/components/title/Title'
import { useTranslations } from 'next-intl';

const About = () => {
  const t = useTranslations('hidroizolyatsiya');
  return (
    <section className={styles.container}>
      <div className="container">
        <Title title={'left'}>
          {t("about.title")}
        </Title>
        <div className={styles.inner}>
          <div className={styles.item}>
            <div className={styles.img}>
              <Image src='/img/technologies/page/hidro/hssmi/block_about/shlyakh-pidyomu-volohy.jpg' alt={t("about.alt")} title={t("about.alt")} width={600} height={500} />
            </div>
            <div className={styles.info}>
              <h3 className={styles.subtitle}>
                {t("about.subtitle1")}
              </h3>
              <div className={styles.text}>
                <p>
                  {t("about.content1")}
                </p>
                <p>
                  {t("about.content2")}
                </p>
              </div>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.info}>
              <h3 className={styles.subtitle}>
                {t("about.subtitle2")}
              </h3>
              <div className={styles.text}>
                <p>
                  {t("about.content3")}
                </p>
                <p>
                  {t("about.content4")}
                </p>
                <p>
                  {t("about.content5")}
                </p>
                <p>
                  {t("about.content6")}
                </p>
              </div>
            </div>
            <div className={styles.img}>
              <Image src="/img/technologies/page/hidro/hssmi/block_about/shlyakh-zakhystu-vid-pidyomu-volohy.jpg"
                alt={t("about.alt")} 
                width="600" 
                height="500"
                title={t("about.alt")} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About