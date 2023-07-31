import Image from 'next/image'
import styles from './page.module.scss'


const Remmers = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <Image className={styles.logo} src='/img/brands/remmers/remmers-logo.svg' alt='Logo Remmers' title='Logo Remmers' width={500} height={300}/>
        <p className={styles.history}>
          Історія бренду
        </p>
        <Image className={styles.img} src='/img/brands/remmers/remmers.jpg' alt='Remmers' title='Remmers' width={1200} height={510} />
        <p className={styles.text}>
          Remmers Группе була заснована в 1949 році Бернхардом Реммерсом і на сьогодні є незалежним сімейним підприємством. Підприємство спеціалізується на виготовленні продукції будівельної хімії, лаків та фарб для деревини та промислового призначення своїм півторитисячним високваліфікованим колективом успішно працює над 400 системами продуктів, які вирішують проблеми, а також проводять десятиліттями експертизи у важливих напрямках сфери компетенції.
        </p>
        <p className={styles.text}>
          Вони пропонують дійсні добавлені цінності у співробітництві із національними та міжнародними партнерами. Якщо йде мова про безпечні системи, компетентні фахові знання і специфічний для кожного клієнта сервіс, Remmers тут провідний бренд.
        </p>
        <p className={styles.text}>
          Remmers Группе активна на дуже різноманітних ринкаж. Асортимент нашої продукції сягає від захисту будівель, деревини і підлог до промислових лакових систем. Їх клієнти є між іншим ремісничі промисли, проектанти, торгівельні організації також забудовники. Наш портфоліо охвачує також окреме застосування продукції як і комплексну концепцію та реалізацію будівельного проекту чи промислової лакувальної лінії.
        </p>
        <p className={styles.text}>
          Вони повністю задоволняють ці багаторівневі вимоги, створюючи компетентні колективи: обмін і передача знаннями із Академією Бернхарда Реммерса. Цілісні ділові справи по певних об′єктах із Реммерс Фахпланунг. Аналіз та сертифікація із Інститутом Аналітики Бернхарда Реммерса. І звичайно системами продуктів і системними рішеннями під брендом Remmers.
        </p>
      </div>
    </section>
  )
}

export default Remmers