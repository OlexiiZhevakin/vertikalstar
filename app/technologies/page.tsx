import TechnologiesCard from '@/card/TechnologiesCard/TechnologiesCard';
import styles from './Technologies.module.scss';
import TechnologiesData from '@/data/technologiesData';
import Form from '@/components/form/Form';

const Technologies = () => {
  return (
    <>
      <section className={styles.technologies}>
        <div className="container">
          <h1>Технології</h1>
          <p>
            Відкрийте для себе різноманітність методів, що використовуються нашою компанією
          </p>
          <ul className={styles.list}>
            {TechnologiesData.map((card, index) => {
              return (
                <li key={index}>
                  <TechnologiesCard
                    image={card.image}
                    title={card.title}
                    link={card.link}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </section>
      <Form />
    </>
  )
}

export default Technologies;