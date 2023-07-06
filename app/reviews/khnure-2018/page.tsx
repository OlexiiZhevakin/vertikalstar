import Form from '@/components/form/Form'
import styles from './page.module.scss'

const Review = () => {
  return(
    <>
      <section>
        <div className="container">
          <h1>ХНУРЕ, 2018</h1>
          <div className={styles.inner}>
            <picture>
              <source type="image/webp" srcSet="/img/review/page/khnure-2018.webp" title='ХНУРЕ, 2018' />
              <img width={387} height={388} src="/img/review/page/khnure-2018.jpg" alt="ХНУРЕ, 2018" title="ХНУРЕ, 2018" />
            </picture>
            <div className={styles.descr}>
              <p>
                Між Харківським національним університетом радіоелектроніки та Приватним підприємством фірма “Вертикаль” було укладено договір підряду № 85 від 30.10.2018 щодо закупівлі капітальний ремонт фасаду навчального корпусу “В” ХНУРЕ за адресою: пр-т Науки, 14 у м. Харкові, згідно з ДБН А.2.2-3:2014 Код 021-2015: 45450000-6 “Інші заключні роботи”.
              </p>
              <p>
                 Зазначений договір належним чином виконано ПП фірма “Вертикаль” у повному обсязі на зазначену суму, протягом строку, обумовленого у договорі та з відмінною якістю робіт та їх результату.
              </p>
            </div>
          </div>
          <picture>
            <source type="image/webp" srcSet="/img/review/page/blagodarnist-khnure-2018.webp" title='ХНУРЕ, 2018' />
            <img className={styles.img} width={654} height={712} src="/img/review/page/blagodarnist-khnure-2018.jpg" alt="ХНУРЕ, 2018" title="ХНУРЕ, 2018" />
            </picture>
        </div>
      </section>
      <Form/>
    </>
  )
}

export default Review