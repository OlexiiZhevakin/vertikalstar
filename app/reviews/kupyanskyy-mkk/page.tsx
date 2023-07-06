import Form from '@/components/form/Form'
import styles from './page.module.scss'

const Review = () => {
  return(
    <>
      <section>
        <div className="container">
          <h1>ПрАТ «Куп’янський МКК»</h1>
          <div className={styles.inner}>
            <picture>
              <source type="image/webp" srcSet="/img/review/page/betoniks.webp" title='Бетонний завод «Астор»' />
              <img width={350} height={352} src="/img/review/page/betoniks.jpg" alt="Бетонний завод «Астор»»" title="Бетонний завод «Астор»" />
            </picture>
            <div className={styles.descr}>
              <p>
                Ваша фірма виконувала та виконує зараз наступні роботи:
              </p>
              <ol className={styles.list}>
                <li>
                  Гідроізоляція та хімічний захист залізобетонної конструкцій каналізаційної насосної станції системою матеріалів фірми "REMMERS" (Німеччина).
                </li>
                <li>
                  Герметизацію з подальшою гідроізоляцією колодязів самопливного каналізаційного колектора
                </li>
                <li>
                  Хімічний захист колодязів-жировловлювачів.
                </li>
                <li>
                  Герметизацію наскрізних напірних теч у залізобетонних
                  конструкціях.
                </li>
              </ol>
              <p>
                І багато іншого.
              </p>
              <p>
                 Претензій до термінів та якості виконаних робіт не маємо. Хочемо відзначити відповідальне ставлення Ваших співробітників до якості виконуваних ними робіт. Дотримання правил охорони праці та техніки безпеки на об'єктах. Технічну підготовку та оснащеність. Дякуємо за проведення роботи. І сподіваємось на тісну та довгу співпрацю з Вашою Компанією.
              </p>
            </div>
          </div>
          <picture>
            <source type="image/webp" srcSet="/img/review/page/blagodarnist-kupyanskyy-mkk.webp" title='ПрАТ «Куп’янський МКК»' />
            <img className={styles.img} width={450} height={712} src="/img/review/page/blagodarnist-kupyanskyy-mkk.jpg" alt="ПрАТ «Куп’янський МКК»" title="ПрАТ «Куп’янський МКК»" />
            </picture>
        </div>
      </section>
      <Form/>
    </>
  )
}

export default Review