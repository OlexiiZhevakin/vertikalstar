import styles from './Form.module.scss';
import Modal from './modal/Modal';

const Form = () => {
  return(
    <section className={styles.formBlock}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.info}>
            <div>Наші <span>технології</span> для ваших проектів</div>
          <ul>
            <li>Ми проведемо обстеження вашого об`єкта</li>
            <li>Розробимо <span>технологію</span> вирішення вашого завдання
            </li>
            <li>Підберемо та поставимо необхідні матеріали</li>
            <li>Організуємо навчання чи шеф-монтаж на об'єкті</li>
            <li>Організуємо виконання робіт</li>
          </ul>
          </div>
          <Modal/>
        </div>
      </div>
    </section>
  )
}

export default Form;