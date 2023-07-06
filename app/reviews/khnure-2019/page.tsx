import Form from '@/components/form/Form'
import styles from './page.module.scss'

const Review = () => {
  return(
    <>
      <section>
        <div className="container">
          <h1>ХНУРЕ, 2019</h1>
          <div className={styles.inner}>
            <picture>
              <source type="image/webp" srcSet="/img/review/page/khnure-2019.webp" title='ХНУРЕ, 2019' />
              <img width={388} height={388} src="/img/review/page/khnure-2019.jpg" alt="ХНУРЕ, 2019" title="ХНУРЕ, 2019" />
            </picture>
            <div className={styles.descr}>
              <p>
                Між Харківським національним університетом радіоелектроніки та Приватним підприємством фірма “Вертикаль” було укладено договір підряду № 218 від 02.05.2019 року щодо закупівлі капітальний ремонт фасаду навчального корпусу “Д” (внутрішній двір ХНУРЕ) за адресою: проспект Науки в м. Харкові згідно з ДБН А .2.2-3:2014 Код 021-2015: 45450000-6 “Інші завершальні роботи”.
              </p>
              <p>
                 Зазначений договір належним чином виконаний ПП фірма “Вертикаль” у повному обсязі на вказану суму, протягом строку обумовленого у договорі та з відмінною якістю робіт та їх результату.
              </p>
            </div>
          </div>
          <picture>
            <source type="image/webp" srcSet="/img/review/page/blagodarnist-khnure-2019.webp" title='ХНУРЕ, 2019' />
            <img className={styles.img} width={513} height={712} src="/img/review/page/blagodarnist-khnure-2019.jpg" alt="ХНУРЕ, 2019" title="ХНУРЕ, 2019" />
            </picture>
        </div>
      </section>
      <Form/>
    </>
  )
}

export default Review