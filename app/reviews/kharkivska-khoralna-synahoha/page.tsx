import Form from '@/components/form/Form'
import styles from './page.module.scss'

const Review = () => {
  return(
    <>
      <section>
        <div className="container">
          <h1>Харьківська Хоральна синагога</h1>
          <div className={styles.inner}>
            <picture>
              <source type="image/webp" srcSet="/img/review/page/kharkivska-khoralna-synahoha.webp" title='Харьківська Хоральна синагога' />
              <img width={387} height={388} src="/img/review/page/kharkivska-khoralna-synahoha.jpg" alt="Харьківська Хоральна синагога" title="Харьківська Хоральна синагога" />
            </picture>
            <div className={styles.descr}>
              <p>
                Вдячність вручається Стародубову Сергію Миколайовичу, директору  ПП фірмі «ВЕРТИКАЛЬ» за великий внесок у реконструкцію пам'ятника архітектури – Харківської Хоральної синагоги
              </p>
            </div>
          </div>
          <picture>
            <source type="image/webp" srcSet="/img/review/page/blagodarnist-kharkivska-khoralna-synahoha.webp" title='Харьківська Хоральна синагога' />
            <img className={styles.img} width={541} height={712} src="/img/review/page/blagodarnist-kharkivska-khoralna-synahohablagodarnist-betoniks.jpg" alt="Харьківська Хоральна синагога" title="Харьківська Хоральна синагога" />
            </picture>
        </div>
      </section>
      <Form/>
    </>
  )
}

export default Review