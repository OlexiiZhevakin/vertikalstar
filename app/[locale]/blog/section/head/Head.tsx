import Title from '@/app/[locale]/components/title/Title';
import Aside from '../aside/Aside';
import List from '../blogCardList/List';
import styles from './Head.module.scss';
import { useTranslations } from 'next-intl';

const Head = () => {
  const t = useTranslations('blog');
  return (
    <>
      <section className={styles.container}>
        <div className="container">
          <Title title={'h1'}>{t('title')}</Title>
          <div className={styles.inner}>
            <List />
            <Aside />
          </div>
        </div>
      </section>
    </>
  )
}

export default Head;