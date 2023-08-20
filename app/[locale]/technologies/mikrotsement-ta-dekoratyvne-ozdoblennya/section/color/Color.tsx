import Image from 'next/image'
import styles from './color.module.scss'
import Title from '@/app/[locale]/components/title/Title'



const Color = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <Title title={'line'}>54 відтінків кольорів</Title>
        <Image className={styles.img} src='/img/technologies/page/microcement/color/96-vidtinkiv-koloriv.jpg' alt='96 відтінків кольорів' title='96 відтінків кольорів' width={900} height={540}/>
      </div>
    </section>
  )
}

export default Color