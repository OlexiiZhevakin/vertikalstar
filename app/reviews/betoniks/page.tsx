import Form from '@/components/form/Form'
import styles from './page.module.scss'

const Review = () => {
  return(
    <>
      <section>
        <div className="container">
          <h1>ВКП Бетонікс ТОВ</h1>
          <div className={styles.inner}>
            <picture>
              <source type="image/webp" srcSet="/img/review/page/betoniks.webp" title='Бетонний завод «Астор»' />
              <img width={387} height={388} src="/img/review/page/betoniks.jpg" alt="Бетонний завод «Астор»»" title="Бетонний завод «Астор»" />
            </picture>
            <div className={styles.descr}>
              <p>
                Шановний колектив Магазину «БЮРО БУДІВЕЛЬНОЇ ХІМІЇ «ВЕРТИКАЛЬ». ВКП «Бетонікс» ТОВ дякує Вам за своєчасне постачання продукції, а саме пластифікатора для розчинів кладок і штукатурних «DOMOLIT TR». «БЮРО БУДІВЕЛЬНОЇ ХІМІЇ «ВЕРТИКАЛЬ» зарекомендувало себе як надійного постачальника, що здійснює відвантаження у повному обсязі і точно у строк.
              </p>
              <p>
                 Продукція, що поставляється Вами, незмінно високої якості, що пройшла всі необхідні випробування, успішно застосовується в промисловому виробництві готових розчинних сумішей всіх існуючих марок, починаючи з 2009 року і по сьогодні. Дякую за співпрацю, швидку реакцію на заявлені обсяги. Ми готові й надалі працювати у спільних проектах.
              </p>
            </div>
          </div>
          <picture>
            <source type="image/webp" srcSet="/img/review/page/blagodarnist-betoniks.webp" title='Бетонний завод «Астор»' />
            <img className={styles.img} width={512} height={712} src="/img/review/page/blagodarnist-betoniks.jpg" alt="Бетонний завод «Астор»»" title="Бетонний завод «Астор»" />
            </picture>
        </div>
      </section>
      <Form/>
    </>
  )
}

export default Review