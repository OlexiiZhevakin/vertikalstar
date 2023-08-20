import Image from 'next/image'
import styles from './page.module.scss'

const Clever = () => {
  return (
    <section className={styles.container}>
      <div className="container">
          <Image className={styles.logo} src='/img/brands/clever-polymers/clever-polymers.jpg' alt='Clever Polymers' title='Clever Polymers' width={595} height={372} priority />
        <p className={styles.history}>
          Історія бренду
        </p>
        <Image className={styles.img} src='/img/brands/clever-polymers/zavod-clever-polymers.jpg' alt='Завод Clever-Polymers' title='Завод Clever-Polymers' width={1200} height={336}/>
        <p className={styles.text}>
          Компанія Clever Polymers та Construction Chemicals є лідером з виробництва та розробки Поліуретанових Гідроізоляційних Матеріалів, підлогових покриттів, захисних фарб, Поліуретанових смол та багато іншого. Фабрика виробник знаходиться в районі Гебзе, Туреччина.
        </p>
        <p className={styles.text}>
          Завдяки інфраструктурі, що ґрунтується на інноваційних, високотехнологічних дослідженнях та розробках, компанія спрямована на надання високоякісних, сертифікованих на міжнародному рівні широкого спектру товарів та послуг.
        </p>
        <p className={styles.text}>
          Проектування та виробництво постійних високотехнологічних гідроізоляційних матеріалів та покриттів для захисту підлоги стає все більше і більше популярним на міжнародному ринку. Інновації, креативність та здатність вирішувати всі завдання привели компанію до успіху на внутрішньому та міжнародному ринках.
        </p>
        <p className={styles.text}>
          Компанія Clever Polymers та Construction Chemicals виробляє Поліуретанові наливні підлоги, Індустріальні покриття, Епоксидні Наповнювачі, ін'єкційні ППУ, Грунтовки та багато іншого.
        </p>
        <p className={styles.text}>
          Компанія Clever Polymers і Construction Chemicals прагне якнайшвидше стати найбільш успішною компанією в секторі Ізоляції на Світовому ринку.
        </p>
      </div>
    </section>
  )
}

export default Clever