import Title from '@/components/title/Title'
import styles from './page.module.scss'
import { reviewdata } from '../data'
import Image from 'next/image'
import Form from '@/components/form/Form'

type Props = {
    params: {
      id: string
    }
}

const ReviewId = ({params: {id}}: Props) => {

  const page = reviewdata.find(page => page.id === id)
  return (
    <>
      {page ? (
        <section className={styles.container} >
          <div className="container">
            <Title title={"h1"}>{page.title}</Title>
            <div className={styles.wrapper}>
              <Image src={page.author} alt={page.title} title={page.title} width={387} height={388} />
              <div className={styles.descr}>
                {page.body && page.body.map((p, index) => (
                  <p className={styles.text} key={index}>{p}</p>
                ))}
              </div>
            </div>
            {page.text && page.text.map((p, index) => (
              <p className={styles.text} key={index}>
                {p}
              </p>
            ))}
            <Image className={styles.img} src={page.podyaka} alt={page.title} title={page.title} width={512} height={712}/>
          </div>
        </section>
      ) : (
        <div>Об'єкт не знайден</div>
      )}
      <Form/>
    </>
  )
}

export default ReviewId