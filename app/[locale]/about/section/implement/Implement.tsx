import Link from 'next-intl/link'
import styles from './implement.module.scss'
import Image from 'next/image'
import Btn from '@/app/[locale]/components/Btn/Btn'
import { useTranslations } from 'next-intl';

const Implement = () => {
  const t = useTranslations('about');
  return(
    <section>
      <div className="container">
        <div className={styles.inner}>
          <Image src='/img/about/slider-8.jpg' alt='' title='' width={540} height={420} />
          <div className={styles.info}>
            <h3>{t('implement.subtitle')}</h3>
            <p></p>
            <ul className={styles.list}>
              <li>
                <Link href="/technologies/hidroizolyatsiya">{t('implement.link1')}</Link>
              </li>
              <li>
                <Link href="/technologies/remont-betonu-ta-zalizobetonu">{t('implement.link2')}</Link>
              </li>
              <li>
                <Link href="#">{t('implement.link3')}</Link>
              </li>
              <li>
                <Link href="/technologies/rekonstruktsiya">{t('implement.link4')}</Link>
              </li>
              <li>
                <Link href="/technologies/promyslovi-ta-dekoratyvni-pidlohy">{t('implement.link5')}</Link>
              </li>
              <li>
                <Link href="/technologies/fasad">{t('implement.link6')}</Link>
              </li>
              <li>
                <Link href="#">{t('implement.link7')}</Link>
              </li>
            </ul>
            <Btn href='/technologies'>{t('implement.btn')}</Btn>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Implement