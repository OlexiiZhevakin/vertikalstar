
import Title from '@/components/title/Title';
import styles from './head.module.scss';
import Image from 'next/image';



const Head = () => {

  return (
    <>
    <section className={styles.head}>
        <div className={styles.background}>
          <Image
            src="/img/technologies/page/hidro/hssmi/head-bg.webp"
            fill
            style={{
              objectFit: 'cover',
            }}
            quality={75}
            alt='Фонова картинка'
            priority
          />
        </div>
      <div className="container">
        <div className={styles.inner}>
            <Title title={'title'}>Гідроізоляція сирих стін методом ін'єктування</Title>
            <p className={styles.subtitle}>Відсікання капілярного підйому вологи</p>
        </div>
      </div>
    </section>
    </>
  );
};

export default Head;
