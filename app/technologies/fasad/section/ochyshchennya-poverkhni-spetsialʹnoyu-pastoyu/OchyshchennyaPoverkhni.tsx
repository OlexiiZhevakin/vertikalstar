import Image from 'next/image'
import styles from './ochyshchennya-poverkhni.module.scss'

const OchyshchennyaPoverkhni = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <h2 className={styles.title}>
          Очищення поверхні спеціальною пастою
        </h2>
        <div className={styles.inner}>
          <Image src='/img/technologies/page/fasad/ochyshchennya-poverkhni/ochyshchennya-poverkhni-1.jpg' alt='Очищення поверхні спеціальною пастою' title='Очищення поверхні спеціальною пастою' width={570} height={560}/>
          <Image src='/img/technologies/page/fasad/ochyshchennya-poverkhni/ochyshchennya-poverkhni-2.jpg' alt='Очищення поверхні спеціальною пастою' title='Очищення поверхні спеціальною пастою' width={570} height={560}/>
          <Image src='/img/technologies/page/fasad/ochyshchennya-poverkhni/ochyshchennya-poverkhni-3.jpg' alt='Очищення поверхні спеціальною пастою' title='Очищення поверхні спеціальною пастою' width={770} height={550}/>
        </div>
      </div>
    </section>
  )
}

export default OchyshchennyaPoverkhni