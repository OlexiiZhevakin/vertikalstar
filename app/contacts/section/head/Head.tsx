import Title from '@/components/title/Title';
import styles from './Head.module.scss';

const Head = () => {
  return(
    <section className={styles.head}>
      <div className="container">
        <Title className={styles.title} title={'title'}>Контакти</Title>
        <p className={styles.descr}>
          Зв'яжіться з нами, щоб отримати більш детальну інформацію про наші послуги та проекти
        </p>
      </div>
    </section>
  )
}

export default Head;

// 'use client'

// import { useState, useEffect } from "react";
// import styles from "./Head.module.scss";

// const Head = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         // Замените URL на URL вашего сервера Strapi
//         const res = await fetch("http://localhost:1337/api/kontaktis");
//         const data = await res.json();

//         if (data.data.length > 0) {
//           const contact = data.data[0].attributes;
//           setTitle(contact.title || "");
//           setDescription(contact.description || "");
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchData();
//   }, []);

//   return (
//     <section className={styles.head}>
//       <div className="container">
//         <h1>{title}</h1>
//         <p>{description}</p>
//       </div>
//     </section>
//   );
// };

// export default Head;




