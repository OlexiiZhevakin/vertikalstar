import Link from 'next/link';
import styles from './isomat.module.scss';
import Form from '@/components/form/Form';

const Isomat = () => {
  return(
    <>
      <div className={styles.head}>
      <div className="container">
        <Link href='#'>
        <img src="/img/brands/isomat/isomat-logo.png" alt="Логотип бренду Isomat" width="361" height="142"></img>
      </Link>
      </div>
    </div>

    <section className={styles.history}>
      <div className="container">
        <h2>Історія бренду</h2>
        <picture>
          <source type="image/webp" srcSet="/img/brands/isomat/zavod-isomat.webp" title="Завод компанії Isomat"/>
          <img src="/img/brands/isomat/zavod-isomat.jpg" alt="На фото зображений завод компанії Isomat" width="1200" height="314" title="Завод компанії Isomat"/>
        </picture>
        <div className={styles.description}>

          <p>
            Заснована в 1980 році компанія ISOMAT є одним із найвідоміших виробників матеріалів будівельної хімії та сухих будівельних сумішей на території Південно-Східної Європи, що має присутність на міжнародному ринку.
          </p>
          
          <p>
            Компанія виробляє та постачає понад 350 матеріалів, що виготовляються за передовими німецькими технологіями та оптимальними цінами. І саме, продукція поділяється на 6 наступних категорій:
          </p>

          <ol className={styles.list}>
            <li>
              <Link href="#">Гідроізоляційні матеріали</Link>
            </li>
            <li>
              <Link href="#">Фарби та Штукатурки</Link>
            </li>
            <li>
              <Link href="#">Клеї для плитки та затірки</Link>
            </li>
            <li>
              <Link href="#">Ремонтні матеріали</Link>
            </li>
            <li>
              <Link href="#">Добавки в Бетон та Розчини</Link>
            </li>
            <li>
              <Link href="#">Підлоги</Link>
            </li>
          </ol>

          <p>
            У 2012 році компанія здійснила багатомільйонні інвестиції у будівництво заводу з виробництва матеріалів на основі поліуретану.
          </p>
          <p>
            Всі матеріали розробляються в лабораторіях відділу Досліджень та Розробок компанії, щоб поєднувати високу якість із оптимальною ціною. Щорічно відділ Досліджень та Розробок працює над спектром нових матеріалів, що базуються на вимогах кожного цільового ринку, а також на галузевих технологічних розробках.
          </p>
          <p>
            ISOMAT експортує свою продукцію більш ніж у 60 країн світу.
          </p>
          <p>
            На сьогоднішній день кадровий склад ISOMAT у Греції та закордоном включає понад 350 співробітників.
          </p>
        </div>
      </div>
    </section>
    <Form/>
    </>
    
  )
}

export default Isomat;  