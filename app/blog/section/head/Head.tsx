import Aside from '../aside/Aside';
import List from '../blogCardList/List';
import styles from './Head.module.scss';

const Head = () => {
  return(
    <section className={styles.head}>
      <div className="container">
        <h1 className={styles.headTitle}>Ласкаво просимо до нашого блогу
        </h1>
        <div className={styles.inner}>
          <List/>
          <Aside/>
        </div>
      </div>
    </section>
  )
}

export default Head;