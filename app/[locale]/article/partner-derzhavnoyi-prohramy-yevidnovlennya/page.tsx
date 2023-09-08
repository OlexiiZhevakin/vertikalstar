import Image from 'next/image'
import Title from '../../components/title/Title'
import styles from './page.module.scss'
import Form from '../../components/form/Form'

const EVidnovlennya = () => {
  return (
    <>
      <section className={styles.head}>
        <div className={styles.background}>
          <Image
            src="/img/services/partner-derzhavnoyi-prohramy-yevidnovlennya/partner-derzhavnoyi-prohramy-yevidnovlennya.jpg"
            fill
            quality={75}
            alt="partner-derzhavnoyi-prohramy-yevidnovlennya"
            priority
          />
        </div>
        <div className="container">
          <Title title={'title'} className={styles.title}>
            ВЕРТИКАЛЬ БУДІВЕЛЬНИХ ТЕХНОЛОГІЙ - партнер державної програми "єВідновлення"
          </Title>
          <p className={styles.subtext}>
            Раді повідомити, що компанія ВЕРТИКАЛЬ БУДІВЕЛЬНИХ ТЕХНОЛОГІЙ стала учасником державної програми "єВідновлення". Ця ініціатива розроблена для надання підтримки громадянам України, чиє житло зазнало пошкоджень внаслідок бойових дій.
          </p>
        </div>
      </section>
      <section className={styles.info}>
        <div className="container">
          <div className={styles.wrapper}>
            <Title title={'left'} className={styles.title}>
              Як отримати будівельну хімію через інтернет-магазин "ВЕРТИКАЛЬ БУДІВЕЛЬНИХ ТЕХНОЛОГІЙ" у рамках програми "єВідновлення"?
            </Title>
            <p className={styles.text}>
              Ми зробили процес замовлення будівельної хімії для вас максимально простим і зручним. Ось кроки, які вам потрібно виконати:
            </p>
            <ul className={styles.list}>
              <li className={styles.item}>
                <h3 className={styles.subtitle}>
                  Крок 1: Подайте заявку на послугу "єВідновлення" через "Дія".
                </h3>
                <p className={styles.text}>
                  Першим кроком є подача заявки на допомогу в рамках програми "єВідновлення" через застосунок "Дія". Це дозволить вам отримати доступ до компенсації для відновлення вашого житла.
                </p>

              </li>
              <li className={styles.item}>
                <h3 className={styles.subtitle}>
                  Крок 2: Замовте будівельну хімію в інтернет-магазині "ВЕРТИКАЛЬ БУДІВЕЛЬНИХ ТЕХНОЛОГІЙ".
                </h3>
                <p className={styles.text}>
                  Як учасник програми "єВідновлення", ви маєте можливість замовити будівельну хімію та матеріали у нашому інтернет-магазині. Ми пропонуємо широкий асортимент товарів від найкращих виробників, які допоможуть вам в якісному відновленні вашого житла.
                </p>

              </li>
            </ul>
            <h3 className={styles.subtitle}>
              Чому з нами зручно працювати?
            </h3>
            <ul className={styles.listWork}>
              <li className={styles.itemWork}>
                <p className={styles.text}>
                  <span>Якість та надійність: </span>
                  Ми пропонуємо лише високоякісну будівельну хімію та матеріали від перевірених виробників, які гарантують довговічність та надійність.
                </p>
              </li>
              <li className={styles.itemWork}>
                <p className={styles.text}>
                  <span>Широкий асортимент: </span>
                  У нашому інтернет-магазині ви знайдете все необхідне для будівництва та ремонту: клеї, герметики, фарби, ізоляційні матеріали та багато іншого.
                </p>
              </li>
              <li className={styles.itemWork}>
                <p className={styles.text}>
                  <span>Доставка та консультації: </span>
                  Ми пропонуємо швидку доставку замовлень та завжди готові надати професійні консультації щодо вибору матеріалів та їх використання.
                </p>
              </li>
            </ul>

            <h3 className={styles.subtitle}>
              Що саме ви можете придбати?
            </h3>
            <p className={styles.text}>
              Наш інтернет-магазин пропонує широкий асортимент будівельної хімії та матеріалів:
            </p>
            <ul className={styles.listBuy}>
              <li className={styles.item}>
                Клеї та герметики для різних поверхонь.
              </li>
              <li className={styles.item}>
                Фарби та лаки для оновлення вашого житла.
              </li>
              <li className={styles.item}>
                Ізоляційні матеріали для підвищення теплоізоляції та зменшення витрат на опалення.
              </li>
              <li className={styles.item}>
                Водонепроникні матеріали для захисту від вологи та вибіркових пошкоджень.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className={styles.application}>
        <div className="container">
          <p className={styles.text}>
            Ми допоможемо вам професійно обрати потрібні матеріали та надати всю необхідну інформацію.
          </p>
          <a className={`btn ${styles.btn}`} href="tel:+380675713308">
            Оформити замовлення легко
          </a>
        </div>
      </div>
      <section className={styles.description}>
        <div className="container">
          <Title title={'h2'}>
            Вертикаль Будівельних Технологій - ваш надійний партнер у відновленні житла. Разом ми відбудуємо Україну!
          </Title>
        </div>
      </section>
      <Form />
    </>
  )
}

export default EVidnovlennya