import ServicesCard from '@/card/ServicesCard/ServicesCard';
import styles from './Services.module.scss';
import ServiceData from '@/data/servicesData';
import Form from '@/components/form/Form';

const Services = () => {
  return(
    <>
      <section className={styles.services}>
      <div className="container">
        <h1 className='headTitle'>Наші послуги</h1>
        <p className='subtitle'></p>
        <ul className={styles.list}>
          {ServiceData.map((card, index) => {
            return(
              <li key={index}>
                <ServicesCard
                image={card.image}
                title={card.title}
                description={card.description}
                link={card.link}
                video={card.video || ''}
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

export default Services;