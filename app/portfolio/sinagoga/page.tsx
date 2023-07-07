import Link from 'next/link'
import styles from './page.module.scss'
import Form from '@/components/form/Form'

const Sinagoga = () => {
  return (
    <>
      <section className={styles.head}>
        <div className="container">
          <h1>Харківська хоральна синагога</h1>
          <p>центральна синагога й архітектурна пам'ятка в Харкові</p>
        </div>
      </section>

      <section className={styles.history}>
        <div className="container">
          <h2>Історія проекту</h2>
          <div>
            <p>
              Ми брали участь у реставрації пам'ятки архітектури такого значущого для нашого міста як Харківська Хоральна
              синагога.
            </p>
            <p>
              Найбільша на території України та друга за величиною в Європі після будапештської. Висота башні 42 м, зали
              30 м, даху 25 м, довжина бокового фасаду 50 м, загальна площа 2067 м². Сховище сувоїв синагоги має висоту 9
              м. У залі площею 450 м можуть розміститися 800—1000 осіб.</p>
          </div>
          <div className={styles.content}>
            <div className={styles.img}>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga.webp"
                  title="Харківська хоральна синагога" />
                <img src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga.jpg" alt="Харківська хоральна синагога"
                  width="370" height="560" loading="lazy" title="Харківська хоральна синагога" />
              </picture>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-2.webp"
                  title="Харківська хоральна синагога" />
                <img src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-2.jpg" alt="Харківська хоральна синагога"
                  width="370" height="560" loading="lazy" title="Харківська хоральна синагога" />
              </picture>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-3.webp"
                  title="Харківська хоральна синагога" />
                <img src="/img/portfolio/sinagoga/img/harkivska-horalnaya-sinagoga-3.jpg" alt="Харківська хоральна синагога"
                  width="770" height="535" loading="lazy" title="Харківська хоральна синагога" />
              </picture>
            </div>

            <h3>
              Мала бути серйозна робота з відновлення залізобетонних конструкцій. Для цього було
              застосовано <Link className={styles.link} href="#">технологію торкретування</Link>
            </h3>
            <div className={styles.img}>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-4.webp" title="Харківська хоральна синагога" />
                <img src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-4.jpg" alt="Харківська хоральна синагога" width="770" height="535" loading="lazy" title="Харківська хоральна синагога" />
              </picture>
            </div>
            <h3>Після посилення конструкцій ми перейшли до оздоблювальних робіт</h3>

            <div className={styles.img}>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-5.webp"
                  title="Харківська хоральна синагога" />
                <img src="/img/portfolio/sinagoga/img/harkivska-horalnaya-sinagoga-5.jpg" alt="Харківська хоральна синагога" width="770" height="535" loading="lazy" title="Харківська хоральна синагога" />
              </picture>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-6.webp"
                  title="Харківська хоральна синагога" />
                <img src="/img/portfolio/sinagoga/img/harkivska-horalnaya-sinagoga-6.jpg" alt="Харківська хоральна синагога"
                  width="370" height="535" loading="lazy" title="Харківська хоральна синагога" />
              </picture>
            </div>

            <h3>Було чимало цікавих, унікальних та ліпних робіт</h3>
            <div className={styles.img}>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-7.webp"
                  title="Харківська хоральна синагога" />
                <img src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-7.jpg" alt="Харківська хоральна синагога"
                  width="770" height="535" loading="lazy" title="Харківська хоральна синагога" />
              </picture>
            </div>

            <h3>І ось таку красуню ми здали Замовнику</h3>
            <div className={styles.img}>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-8.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-8.jpg" alt="Харківська хоральна синагога"
                  width="770" height="535" loading="lazy" title="Харківська хоральна синагога" />
              </picture>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-9.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-9.jpg" alt="Харківська хоральна синагога"
                  width="370" height="535" loading="lazy" title="Харківська хоральна синагога" />
              </picture>
              <picture>
                <source media="(min-width: 1200px)" type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-10.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-10.jpg"
                  alt="Харківська хоральна синагога" width="770" height="535" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
            </div>

            <h3>Було-стало</h3>
            <div className={styles.img}>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-11.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-11.jpg"
                  alt="Харківська хоральна синагога" width="570" height="560" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-12.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-12.jpg"
                  alt="Харківська хоральна синагога" width="570" height="560" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-13.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-13.jpg"
                  alt="Харківська хоральна синагога" width="570" height="370" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-14.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-14.jpg"
                  alt="Харківська хоральна синагога" width="570" height="370" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-15.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-15.jpg"
                  alt="Харківська хоральна синагога" width="370" height="560" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-16.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-16.jpg"
                  alt="Харківська хоральна синагога" width="770" height="560" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
            </div>

            <h3>Після цього ми перейшли до реставрації фасаду. На той момент він виглядав так</h3>
            <div className={styles.img}>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-17.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-17.jpg"
                  alt="Харківська хоральна синагога" width="770" height="550" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
            </div>

            <h3>Для цього було застосовано Технологію німецького концерну <Link className={styles.brand} href="#"
              aria-label="Ссилка на сторінку бренду Remmers"></Link> <Link className={styles.link} href="#">з очистки,
                реставрації та захисту фасадів</Link>
            </h3>
            <h3>Очищення поверхні спеціальною пастою</h3>
            <div className={styles.img}>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-18.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-18.jpg"
                  alt="Харківська хоральна синагога" width="570" height="560" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-19.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-19.jpg"
                  alt="Харківська хоральна синагога" width="570" height="560" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
            </div>
            <div className={styles.img}>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-20.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-20.jpg"
                  alt="Харківська хоральна синагога" width="770" height="550" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
            </div>

            <h3>Реставрація цегли</h3>
            <div className={styles.img}>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-21.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-21.jpg"
                  alt="Харківська хоральна синагога" width="570" height="420" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-22.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-22.jpg"
                  alt="Харківська хоральна синагога" width="570" height="420" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-23.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-23.jpg"
                  alt="Харківська хоральна синагога" width="770" height="550" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
              <picture>
                <source media="(min-width: 1200px)" type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-24.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-24.jpg"
                  alt="Харківська хоральна синагога" width="570" height="760" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-25.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-25.jpg"
                  alt="Харківська хоральна синагога" width="570" height="760" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-26.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-26.jpg"
                  alt="Харківська хоральна синагога" width="1200" height="600" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-27.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-27.jpg"
                  alt="Харківська хоральна синагога" width="570" height="420" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-28.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-28.jpg"
                  alt="Харківська хоральна синагога" width="570" height="420" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-29.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-29.jpg"
                  alt="Харківська хоральна синагога" width="770" height="550" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-30.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-30.jpg"
                  alt="Харківська хоральна синагога" width="770" height="550" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-33.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-33.jpg"
                  alt="Харківська хоральна синагога" width="570" height="420" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-34.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-34.jpg"
                  alt="Харківська хоральна синагога" width="570" height="420" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
            </div>

            <div className={styles.attention}>
              <div className={styles.info}>
                <h3>Звертаємо вашу увагу на цей вузол:</h3>
                <div>
                  <p>На фото видно, в якому стані були примикання покрівлі до стіни (досить звичний вигляд більшості
                    старих об'єктів). І подивіться, як ми виконали гідроізоляцію цих вузлів спеціальними мастиками. Навіть
                    неозброєним поглядом видно, що вода тут не пройде!</p>
                </div>
              </div>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-35.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-35.jpg"
                  alt="Харківська хоральна синагога" width="550" height="773" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
            </div>

            <div className={styles.img}>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-36.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-36.jpg"
                  alt="Харківська хоральна синагога" width="770" height="550" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
            </div>

            <h3>Ну, і ось що отримали</h3>
            <div className={styles.img}>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-37.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-37.jpg"
                  alt="Харківська хоральна синагога" width="600" height="800" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-38.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-38.jpg"
                  alt="Харківська хоральна синагога" width="600" height="800" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-39.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-39.jpg"
                  alt="Харківська хоральна синагога" width="600" height="800" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-40.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-40.jpg"
                  alt="Харківська хоральна синагога" width="770" height="550" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-41.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-41.jpg"
                  alt="Харківська хоральна синагога" width="370" height="550" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
            </div>

            <div className={styles.img}>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-42.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-42.jpg"
                  alt="Харківська хоральна синагога" width="770" height="550" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
            </div>

            <h3>Було-стало</h3>
            <div className={styles.img}>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-43.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-43.jpg"
                  alt="Харківська хоральна синагога" width="570" height="450" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
              <picture>
                <source type="image/webp"
                  srcSet="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-44.webp"
                  title="Харківська хоральна синагога" />
                <img
                  src="/img/portfolio/sinagoga/harkivska-horalnaya-sinagoga-44.jpg"
                  alt="Харківська хоральна синагога" width="570" height="450" loading="lazy"
                  title="Харківська хоральна синагога" />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <Form/>
    </>
  )
}

export default Sinagoga