
import Title from '@/app/[locale]/components/title/Title';
import styles from './Head.module.scss';
import Image from 'next/image';
import { useTranslations } from 'next-intl';




const Header = () => {
  const t = useTranslations('contacts');
  return(
    <section className={styles.head}>
      <div className={styles.background}>
        <Image
          src="/img/contacts/contact-bg.jpg"
          fill
          quality={75}
          alt='Фонова картинка'
          priority={true}
        />
      </div>
      <div className="container">
        <Title className={styles.title} title={'title'}>{t("title")}</Title>
        <p className={styles.descr}>
          {t("description")}
        </p>
      </div>
    </section>
  )
}

export default Header;



