import Image from 'next/image'
import styles from './picture.module.scss'
import Title from '@/components/title/Title'

const Picture = () => {
  return(
    <div className={styles.container}>
      <div className="container">
        <Title title={'h2'}>Знайома картина?</Title>

        <div className={styles.inner}>
            <Image src='/img/technologies/page/hidro/hssmi/picture/plisnyava-​na-stini.jpg' alt='Фотографія плісняви на стіні' title='Фотографія плісняви на стіні' width={580} height={400}/>
            <Image src='/img/technologies/page/hidro/hssmi/picture/shpalery-yaki-vidstayut-vid-volohy.jpg' alt='Фотографія плісняви на стіні' title='Фотографія плісняви на стіні' width={580} height={400} />
        </div>
      </div>
    </div>
  )
}

export default Picture