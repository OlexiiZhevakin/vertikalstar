'use client'
import styles from './page.module.scss'
import { ObjectPage } from "../data"
import Image from 'next/image';

type Props = {
  params: {
    id: string
    title: string
    body: string
    descr: string
  };
};

const ObjectId = ({params: {id}}: Props) => {

  const objects =  ObjectPage
  const object = objects.find(obj => obj.id === id)


  return (
    <div>
      {object ? (
        <section className={styles.container}>
          <div className="container">
            <h1 className={styles.title}>{object.title}</h1>
            <p className={styles.subtext}>
              Історія проекту
            </p>
            <h2 className={styles.subtitle}>
              {object.body}
            </h2>
            <p className={styles.description}>
              {object.descr}
            </p>
            <div className={styles.img}>
              {object.img.map((img: any, index: number) => (
                <Image src={img} alt={object.title} title={object.title} width={570} height={458} key={index} />
              ))}
            </div>
            {/* <div className={styles.block}>
              <h2 className={styles.title}>
                Використовувані технології
              </h2>
            </div> */}
          </div>
        </section>
      ) : (
        <div>Об'єкт не знайден</div>
      )}
    </div>
  )
}

export default ObjectId