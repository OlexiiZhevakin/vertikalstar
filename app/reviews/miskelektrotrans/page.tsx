import Form from '@/components/form/Form'
import styles from './page.module.scss'

const Review = () => {
  return(
    <>
      <section>
        <div className="container">
          <h1>ХКП Міськелектротранс</h1>
          <div className={styles.inner}>
            <picture>
              <source type="image/webp" srcSet="/img/review/page/miskelektrotrans.webp" title='Бетонний завод «Астор»' />
              <img width={426} height={427} src="/img/review/page/miskelektrotrans.jpg" alt="Бетонний завод «Астор»»" title="Бетонний завод «Астор»" />
            </picture>
            <div className={styles.descr}>
              <p>
                ПП фірма «ВЕРТИКАЛЬ» є Підрядником ХКП «Міськелектротранс» по виконанню наступних робіт: Поточний ремонт ребристих плит покриття ремонтними складами. Усі роботи виконуються якісно, ​​кваліфіковано, із застосуванням сучасних високотехнологічних матеріалів та в повному обсязі.
              </p>
              <p>
                 Замовник якості роботи Підрядника претензій не має.
              </p>
            </div>
          </div>
          <picture>
            <source type="image/webp" srcSet="/img/review/page/blagodarnist-miskelektrotrans.webp" title='Бетонний завод «Астор»' />
            <img className={styles.img} width={642} height={712} src="/img/review/page/blagodarnist-miskelektrotrans.jpg" alt="Бетонний завод «Астор»»" title="Бетонний завод «Астор»" />
            </picture>
        </div>
      </section>
      <Form/>
    </>
  )
}

export default Review