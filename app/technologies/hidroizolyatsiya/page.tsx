import HdrCard from '@/card/HdrCard/HdrCard';
import styles from './page.module.scss';
import hidroizolyatsiyaData from '@/data/hidroizolyatsiyaData';
import Form from '@/components/form/Form';

const Hidroizolyatsiya = () => {
  return(
    <>
      <section className={styles.head}>
      <div className="container">
        <h1 className={styles.title}>Гідроізоляція</h1>
        <h2 className={styles.subtitle}>Гідроізоляція - важливий крок у будівництві чи ремонті</h2>
        <ul className={styles.list}>
          {hidroizolyatsiyaData.map((card, index) => {
            return(
              <li key={index}>
                <HdrCard
                  title={card.title}
                  image={card.image}
                  link={card.link}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </section>

    <section className={styles.container}>
      <div className="container">
        <h2 className={styles.subtitle}>Основні ідеї</h2>
        <div className={styles.items}>

          <div>
            <i className="fa-regular fa-circle-check"></i>
            <p className={styles.text}>
              Гідроізоляція це не зариті гроші, це відсутність неприємних проблем у майбутньому.
            </p>
          </div>

          <div>
            <i className="fa-regular fa-circle-check"></i>
            <p className={styles.text}>
              50% успіху у виконання гідроізоляційних робіт полягає у якісній підготовці поверхні.
            </p>
          </div>

        </div>
      </div>
    </section>
    <Form/>
    </>
  )
}

export default Hidroizolyatsiya;