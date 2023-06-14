import TechnologiesCard from '@/card/TechnologiesCard/TechnologiesCard';
import styles from './Technologies.module.scss';
import TechnologiesData from '@/data/technologiesData';
import Form from '@/components/form/Form';
const Technologies = () => {
  return(
    <>
      <section>
      <div className="container">
        <div className="container"></div>
      <h1 className='headTitle'>Технології</h1>
      <p className="subtitle">
        Відкрийте для себе різноманітність методів, що використовуються нашою компанією
      </p>
      <ul className={styles.list}>
        {TechnologiesData.map((card, index) => {
          return(
            <li key={index}>
              <TechnologiesCard
                image={card.image}
                imageWebp={card.imageWebp}
                title={card.title}
                link={card.link}
              />
            </li>
          )
        })}
      </ul>
      </div>
    </section>
    <Form/>
    </>
  )
}

export default Technologies;