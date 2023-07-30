import Title from '@/components/title/Title'
import styles from './advantage.module.scss'


const Advantage = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <Title className={styles.title} title={'h2'}>Переваги мікроцементу</Title>
        <h2 className={styles.title}></h2>
        <ul className={styles.list}>
          <li>
            Поверхню легко мити
          </li>
          <li>
            Стійкість до зносу
          </li>
          <li>
            Однорідний монолітний зовнішній вигляд
          </li>
          <li>
            Висока договічність (стійкість до старіння)
          </li>
          <li>
            Мала товщина оздоблювального шару
          </li>
          <li>
            Прекрасна зручноукладальність
          </li>
          
          <li>
            Придатність для підлоги з підігрівом
          </li>
          <li>
            Придатність для різних основань
          </li>
          <li>
            Швидке нанесення (досвідченими фахівцями)
          </li>
          <li>
            Ідеальне рішення для відновлювальних та ремонтних робіт завдяки малій товщині та чудовій адгезії до різних основань
          </li>
          <li>
            Безліч різних застосувань (підлоги, стіни, меблі, ванні кімнати, кухні, всередині та зовні приміщень)
          </li>
          <li>
            Широкий та гнучкий діапазон колірних рішень та текстури поверхні
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Advantage