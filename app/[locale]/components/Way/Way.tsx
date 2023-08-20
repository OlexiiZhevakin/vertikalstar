
import styles from "./Way.module.scss";
import Title from "@/app/[locale]/components/title/Title";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const Way = () => {
  const t = useTranslations('components');
  return (
    <section className={styles.way}>
      <div className="container">
        <Title title={'h2'}>{t('way.title')}</Title>
        <ul className={styles.list}>

          <li>
            <article className={styles.card}>
              <Image src="/img/way/kontakt-z-tekhnolohom.jpg" alt={t('way.subtitle1')} width={280} height={200} />
              <div className={styles.content}>
                <h3 className={styles.subtitle}>
                  {t('way.subtitle1')}
                  <span>01</span>
                </h3>
                <p className={styles.text}>
                  {t('way.description1')}
                </p>
              </div>
            </article>
          </li>
          <li>
            <article className={styles.card}>
              <Image src="/img/way/rozrobka-tekhnolohiyi.jpg" alt={t('way.subtitle2')} width={280} height={200} />
              <div className={styles.content}>
                <h3 className={styles.subtitle}>
                  {t('way.subtitle2')}
                  <span>02</span>
                </h3>
                <p className={styles.text}>
                  {t('way.description2')}
                </p>
              </div>
            </article>
          </li>
          <li>
            <article className={styles.card}>
              <Image src="/img/way/postachannya-materialiv.jpg" alt={t('way.subtitle2')} width={280} height={200} />
              <div className={styles.content}>
                <h3 className={styles.subtitle}>
                  {t('way.subtitle2')}
                  <span>03</span>
                </h3>
                <p className={styles.text}>
                  {t('way.description3')}
                </p>
              </div>
            </article>
          </li>
          <li>
            <article className={styles.card}>
              <Image src="/img/way/vykonannya-robit.jpg" alt={t('way.subtitle4')} width={280} height={200} />
              <div className={styles.content}>
                <h3 className={styles.subtitle}>
                  {t('way.subtitle4')}
                  <span>04</span>
                </h3>
                <p className={styles.text}>
                  {t('way.description4')}
                </p>
              </div>
            </article>
          </li>

        </ul>
      </div>
    </section>
  )
}

export default Way;