import Form from '@/components/form/Form'
import styles from './page.module.scss'

const Review = () => {
  return(
    <>
      <section>
        <div className="container">
          <h1>ПАТ «Завод Південкабель»</h1>
          <div className={styles.inner}>
            <picture>
              <source type="image/webp" srcSet="/img/review/page/zavod-pivdenkabel.webp" title='ПАТ «Завод Південкабель»' />
              <img width={357} height={357} src="/img/review/page/zavod-pivdenkabel.jpg" alt="ПАТ «Завод Південкабель»" title="ПАТ «Завод Південкабель»" />
            </picture>
            <div className={styles.descr}>
              <p>
                ПП фірма "ВЕРТИКАЛЬ" протягом п'яти років є
                підрядником ЗАТ «Завод «ЮЖКАБЕЛЬ» по виконанню наступних
                робіт:
              </p>
              <ol className={styles.list}>
                <li>
                  Гідроізоляція резервуарів.
                </li>
                <li>
                  Влаштування промислових підлог.
                </li>
                <li>
                  Ремонт залізобетонних конструкцій.
                </li>
              </ol>
              <p>
                Усі роботи виконуються кваліфіковано, із застосуванням сучасних
                високотехнологічних матеріалів та в повному обсязі. Замовник претензій до якості роботи не має.
              </p>
            </div>
          </div>
          <picture>
            <source type="image/webp" srcSet="/img/review/page/blagodarnist-zavod-pivdenkabel.webp" title='ПАТ «Завод Південкабель»' />
            <img className={styles.img} width={607} height={712} src="/img/review/page/blagodarnist-zavod-pivdenkabel.jpg" alt="ПАТ «Завод Південкабель»" title="Бетонний завод «Астор»" />
            </picture>
        </div>
      </section>
      <Form/>
    </>
  )
}

export default Review