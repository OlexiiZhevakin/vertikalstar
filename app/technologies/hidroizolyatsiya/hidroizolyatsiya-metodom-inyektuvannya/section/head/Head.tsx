'use client'
import styles from './head.module.scss';
import Link from 'next/link';


const Head = () => {


  return (
    <>
    <section className={styles.head}>
      <div className="container">
        <div className={styles.inner}>
            <h1 className={styles.title}>
              Гідроізоляція сирих стін методом ін'єктування
            </h1>
            <p className={styles.subtitle}>Відсікання капілярного підйому вологи</p>
          <Link className="btn" href="#">
            Залишити заявку
          </Link>
        </div>
      </div>
    </section>
    </>
  );
};

export default Head;
