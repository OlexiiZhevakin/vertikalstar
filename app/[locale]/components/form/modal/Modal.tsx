'use client'
import { useState } from 'react';
import styles from './Modal.module.scss';

type Props = {
  content1: string
  content2: string
  tel: string
  name: string
  btn: string
}

const Modal = ({content1, content2, tel, name, btn}: Props) => {
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
      <div>{content1}</div>
      <span>{content2}</span>
      <form
        action="https://de.vertikalstar.com/send-mail.php"
        method="POST"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">{name}</label>
        <input type="text" name="name" id="name" required />

        <label htmlFor="tel">{tel}</label>
        <input type="tel" name="tel" id="tel" required />

        <button type="submit">{btn}</button>
      </form>
      <div>{status}</div>
    </div>
  );
};

export default Modal;
