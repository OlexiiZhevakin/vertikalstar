'use client'
import { useState } from 'react';
import styles from './Modal.module.scss';

const Modal = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
    });
    if (response.ok) {
      setStatus('Дякую за вашу заявку!');
      form.reset();
    } else {
      setStatus('На жаль, сталася помилка під час відправлення форми.');
    }
  };

  return (
    <div className={styles.wrapper}>
      <div>Вкажіть ваші контакти</div>
      <span>і наш Технолог зв'яжеться з вами в найближчий час</span>
      <form
        action="https://de.vertikalstar.com/send-mail.php"
        method="POST"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Ваше ім'я</label>
        <input type="text" name="name" id="name" required />

        <label htmlFor="tel">Телефон</label>
        <input type="tel" name="tel" id="tel" required />

        <button type="submit">Залишити заявку</button>
      </form>
      <div>{status}</div>
    </div>
  );
};

export default Modal;
