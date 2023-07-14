
import styles from "./Modal.module.scss";

const Modal = () => {

  return(
    <div className={styles.wrapper}>
      <div>Вкажіть ваші контакти</div>
        <span>і наш Технолог зв'яжеться з вами в найближчий час</span>
      <form action="https://www.vertikalstar.com/send-mail.php" method="POST">

              <label htmlFor="name">Ваше ім'я</label>
              <input type="text" name="name" id="name" required/>

              <label htmlFor="tel">Телефон</label>
              <input type="tel" name="tel" id="tel" required/>

              <button type="submit">
                Залишити заявку
              </button>
            </form>
    </div>
  )
}

export default Modal