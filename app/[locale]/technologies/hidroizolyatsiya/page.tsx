import HdrCard from '@/card/HdrCard/HdrCard';
import styles from './page.module.scss';
import hidroizolyatsiyaData from '@/data/hidroizolyatsiyaData';
import Form from '@/app/[locale]/components/form/Form';
import Title from '@/app/[locale]/components/title/Title';

const Hidroizolyatsiya = () => {
  return (
    <>
      <section className={styles.head}>
        <div className="container">
          <Title title={'h1'}>Гідроізоляція</Title>
          <Title title={'h2'}>Гідроізоляція - важливий крок у будівництві чи ремонті</Title>
          <ul className={styles.list}>
            {hidroizolyatsiyaData.map((card, index) => {
              return (
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
          <Title title={'h2'}>Основні ідеї</Title>
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
      <Form />
    </>
  )
}

export default Hidroizolyatsiya;