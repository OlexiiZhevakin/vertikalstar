import Title from '@/app/[locale]/components/title/Title'
import styles from './BeforeAfter.module.scss'
import Image from 'next/image'

const BeforeAftrer = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <Title title={'h2'}>До - Після</Title>
        <div className={styles.wrapper}>
          <Image src="/img/blog/page/yak-zakhystyty-pidlohy-z-marmurovoyi-krykhty/before-after/do-zakhystu-pidlohy-1.jpg" alt='Фотографія підлоги до захисту' width={550} height={450}/>
          <Image src="/img/blog/page/yak-zakhystyty-pidlohy-z-marmurovoyi-krykhty/before-after/pislya-zakhystu-pidlohy-1.jpg" alt='Фотографія підлоги після захисту' width={550} height={450}/>
          <Image src="/img/blog/page/yak-zakhystyty-pidlohy-z-marmurovoyi-krykhty/before-after/do-zakhystu-pidlohy-2.jpg" alt='Фотографія підлоги до захисту' width={550} height={450}/>
          <Image src="/img/blog/page/yak-zakhystyty-pidlohy-z-marmurovoyi-krykhty/before-after/pislya-zakhystu-pidlohy-2.jpg" alt='Фотографія підлоги після захисту' width={550} height={450}/>
          <Image src="/img/blog/page/yak-zakhystyty-pidlohy-z-marmurovoyi-krykhty/before-after/do-zakhystu-pidlohy-3.jpg" alt='Фотографія підлоги до захисту' width={550} height={450}/>
          <Image src="/img/blog/page/yak-zakhystyty-pidlohy-z-marmurovoyi-krykhty/before-after/pislya-zakhystu-pidlohy-3.jpg" alt='Фотографія підлоги після захисту' width={550} height={450}/>
        </div>
      </div>
    </section>
  )
}

export default BeforeAftrer