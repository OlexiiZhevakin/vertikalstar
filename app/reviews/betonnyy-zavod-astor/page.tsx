import Form from '@/components/form/Form'
import styles from './page.module.scss'

const Review = () => {
  return(
    <>
      <section>
        <div className="container">
          <h1>Бетонний завод «Астор»</h1>
          <div className={styles.inner}>
            <picture>
              <source type="image/webp" srcSet="/img/review/page/betonnyj-zavod-astor.webp" title='Бетонний завод «Астор»' />
              <img width={446} height={446} src="/img/review/page/betonnyj-zavod-astor.jpg" alt="Бетонний завод «Астор»»" title="Бетонний завод «Астор»" />
            </picture>
            <div className={styles.descr}>
              <p>
              Компанія «ВЕРТИКАЛЬ БУДІВЕЛЬНИХ ТЕХНОЛОГІЙ» («Бюро будівельної хімії «Вертикаль») є постачальником поліпропіленової фібри та хімічної добавки «Домоліт ТР» для нашого підприємства. Цим листом Харківський завод будівельних матеріалів «Астор», найбільший виробник товарного бетону в Харкові та Харківській області, підтверджує високу якість продукції, що поставляється.
            </p>
            <p>
              У процесі нашої співпраці компанія «ВЕРТИКАЛЬ БУДІВЕЛЬНИХ ТЕХНОЛОГІЙ» («Бюро будівельної хімії «Вертикаль») виявила себе як надійного партнера. Ми висловлюємо подяку за надані послуги. А також плануємо продовжити співпрацю із перспективою подальшого розвитку наших комерційних відносин.
            </p>
            </div>
          </div>
          <picture>
            <source type="image/webp" srcSet="/img/review/page/blagodarnist-betonnyj-zavod-astor.webp" title='Бетонний завод «Астор»' />
            <img className={styles.img} width={512} height={712} src="/img/review/page/blagodarnist-betonnyj-zavod-astor.jpg" alt="Бетонний завод «Астор»»" title="Бетонний завод «Астор»" />
            </picture>
        </div>
      </section>
      <Form/>
    </>
  )
}

export default Review