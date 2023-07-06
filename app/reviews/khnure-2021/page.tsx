import Form from '@/components/form/Form'
import styles from './page.module.scss'

const Review = () => {
  return(
    <>
      <section>
        <div className="container">
          <h1>ХНУРЕ, 2021</h1>
          <div className={styles.inner}>
            <picture>
              <source type="image/webp" srcSet="/img/review/page/khnure-2021.webp" title='ХНУРЕ, 2021' />
              <img width={550} height={550} src="/img/review/page/khnure-2021.jpg" alt="ХНУРЕ, 2021" title="ХНУРЕ, 2021" />
            </picture>
            <div className={styles.descr}>
              <p>
                Компанія ЧП фірма “Вертикаль” з 2009 року є підрядником будівельних робіт у Харківському національному університеті радіоелектроніки. Вона чудово зарекомендувала себе у таких роботах як:
              </p>
              <ul className={styles.list}>
                <li>
                  реставрація фасадів
                </li>
                <li>
                  гідроізоляція покрівель
                </li>
                <li>
                  утеплення фасадів  
                </li>
                <li>
                  ін'єкційна гідроізоляція
                </li>
                <li>
                  пристрій промислових підлог та багато іншого
                </li>
              </ul>
            </div>
          </div>
          <p className={styles.text}>
            Під час ремонту будівель та споруд нашого університету, у тому числі будівель – пам'яток архітектури. Усі роботи виконуються належним чином відповідно до умов Договору, у встановлений термін якісно, ​​без зауважень та претензій з боку Замовника. Високий: професійні якості інженерно-технічного персоналу, відповідні кваліфікації та склад працівників, якість та технологія виконання робіт, на нашу думку, відповідає сучасним вимогам до будівельних компаній. Використані матеріали були належної якості, що підтверджувалося відповідними сертифікатами та висновками.
          </p>
          <p className={styles.text}>
            Інженерний склад Компанії має великий досвід і має високі професійні навички, вміє вирішувати складні нестандартні завдання з гарантованою високою якістю робіт.
          </p>
          <p className={styles.text}>
            Компанія ПП фірма "Вертикаль" зарекомендувала себе як надійний відповідальний підрядник.
          </p>
          <picture>
            <source type="image/webp" srcSet="/img/review/page/podyaka-khnure-2021.webp" title='ХНУРЕ, 2021' />
            <img className={styles.img} width={550} height={712} src="/img/review/page/podyaka-khnure-2021.jpg" alt="ХНУРЕ, 2021" title="ХНУРЕ, 2021" />
            </picture>
        </div>
      </section>
      <Form/>
    </>
  )
}

export default Review