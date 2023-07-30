import Title from '@/components/title/Title';
import Aside from '../aside/Aside';
import List from '../blogCardList/List';
import styles from './Head.module.scss';

const Head = () => {
  return (
    <>
      <section className={styles.container}>
        <div className="container">
          <Title title={'h1'}>Ласкаво просимо до нашого блогу</Title>
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