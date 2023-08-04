import Title from '@/components/title/Title';
import styles from './Head.module.scss';
import Image from 'next/image';



const Header = () => {
  return(
    <section className={styles.head}>
      <div className={styles.background}>
        <Image
          src="/img/contacts/contact-bg.jpg"
          fill
          // style={{
          //   objectFit: 'cover',
          // }}
          quality={75}
          alt='Фонова картинка'
          priority
        />
      </div>
      <div className="container">
        <Title className={styles.title} title={'title'}>Контакти</Title>
        <p className={styles.descr}>
          Зв'яжіться з нами, щоб отримати більш детальну інформацію про наші послуги та проекти
        </p>
      </div>
    </section>
  )
}

export default Header;
// 'use client'
// import { useState, useEffect } from 'react';
// import Title from '@/components/title/Title';
// import styles from './Head.module.scss';

// const Header = () => {
//   const [imageLoaded, setImageLoaded] = useState(false);

//   useEffect(() => {
//     const image = new Image();
//     image.src = '/img/contacts/contact-bg.webp';
//     image.onload = () => {
//       setImageLoaded(true);
//     };
//   }, []);

//   return (
//     <section className={styles.head}>
//       <img
//         src="/img/contacts/contact-bg.webp"
//         alt="Background"
//         className={`${styles.backgroundImage} ${imageLoaded ? styles.imageLoaded : ''}`}
//       />
//       <div className={`${styles.container} container`}>
//         <Title className={styles.title} title={'title'}>
//           Контакти
//         </Title>
//         <p className={styles.descr}>
//           Зв'яжіться з нами, щоб отримати більш детальну інформацію про наші послуги та проекти
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Header;


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




