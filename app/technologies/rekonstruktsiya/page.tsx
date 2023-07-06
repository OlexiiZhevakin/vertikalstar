import Form from '@/components/form/Form'
import TechnologiesData from '@/data/technologiesData'
import TechnologiesCard from '@/card/TechnologiesCard/TechnologiesCard'
import styles from './rekonstruktsiya.module.scss'

const Rekonstruktsiya = () => {
  const latestTechnologies = TechnologiesData.slice(-4);
  return(
    <>
      <section>
        <div className="container">
          <h1>Реконструкція</h1>
          <ul className={styles.list}>
            {latestTechnologies.map((item, index) => {
              return(
                <li key={index}>
                  <TechnologiesCard
                    image={item.image}
                    imageWebp={item.image}
                    title={item.title}
                    link={item.link}
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

export default Rekonstruktsiya