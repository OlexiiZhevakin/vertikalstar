// 'use client'
// import { useEffect, useState } from "react";
// import { Metadata } from "next";
// import styles from './post.module.scss'

// type Props = {
//   params: {
//     id: string
//     title: string
//   };
// };

// type ContentItem = {
//   type: string;
//   text?: string;
//   urlWebp?: string;
//   url?: string;
//   caption?: string;
// };

// export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
//   return {
//     title: id,
//   };
// }

// async function getData(id: string) {
//   const response = await fetch(`https://www.vertikalstar.com/blogData.json?id=${id}`, {
//     next: {
//       // revalidate: 60,
//     },
//   });
//   const data = await response.json();
//   const post = data.find((item: any) => item.id === id);
//   return post;
// }

// export default function Post({ params: { id } }: Props) {
//   const [post, setPost] = useState<any>(null);

//   useEffect(() => {
//     const fetchPost = async () => {
//       const post = await getData(id);
//       setPost(post);
//       console.log(post);
      
//     };

//     fetchPost();
//   }, [id]);

//   if (!post) {
//     return <div>Статья не найдена</div>;
//   }

//   useEffect(() => {
//     window.onpopstate = function() {
//       window.location.href = document.referrer;
//     };
//   }, []);

//   return (
//     <>
//       <section>
//         <div className="container">
//           <h1 className={styles.title}>{post.title}</h1>
//           <p>Дата публікації: {post.date}</p>
//           <p>Автор: Сергій Стародубов</p>
//         </div>
//       </section>
//       <section className={styles.blog}>
//         <div className="container">
//           {post.content.map((item: ContentItem, index: string) => {
//             if (item.type === "h2") {
//               return <h2 key={index}>{item.text}</h2>;
//             } else if (item.type === "paragraph") {
//               return <p key={index}>{item.text}</p>;
//             } else if (item.type === "image") {
//               return (
//                 <figure key={index}>
//                   <picture>
//                   <source type="image/webp" srcSet={item.urlWebp}/>
//                   <img src={item.url} alt={item.caption} title={item.caption} />
//                 </picture>
//                 <figcaption>{item.caption}</figcaption>
//                 </figure>
//               );
//             }
//             return null;
//           })}
//         </div>
//       </section>
//     </>
//   );
// }
'use client'

import { useEffect, useState } from "react";
import { Metadata } from "next";
import styles from "./post.module.scss";

type Props = {
  params: {
    id: string;
    title: string;
  };
};

type ContentItem = {
  type: string;
  text?: string;
  urlWebp?: string;
  url?: string;
  caption?: string;
};

// export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
//   return {
//     title: id,
//   };
// }

async function getData(id: string) {
  const response = await fetch(`https://www.vertikalstar.vercel.app/blogData.json?id=${id}`, {
    next: {
      // revalidate: 60,
    },
  });
  const data = await response.json();
  const post = data.find((item: any) => item.id === id);
  return post;
}

export default function Post({ params: { id } }: Props) {
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getData(id);
      setPost(post);
    };

    fetchPost();

    window.onpopstate = function () {
      window.location.href = document.referrer;
    };
  }, [id]);

  if (!post) {
    return <div>Статья не найдена</div>;
  }

  return (
    <>
      <section>
        <div className="container">
          <h1 className={styles.title}>{post.title}</h1>
          <p>Дата публікації: {post.date}</p>
          <p>Автор: Сергій Стародубов</p>
        </div>
      </section>
      <section className={styles.blog}>
        <div className="container">
          {post.content.map((item: ContentItem, index: string) => {
            if (item.type === "h2") {
              return <h2 key={index}>{item.text}</h2>;
            } else if (item.type === "paragraph") {
              return <p key={index}>{item.text}</p>;
            } else if (item.type === "image") {
              return (
                <figure key={index}>
                  <picture>
                    <source type="image/webp" srcSet={item.urlWebp} />
                    <img src={item.url} alt={item.caption} title={item.caption} />
                  </picture>
                  <figcaption>{item.caption}</figcaption>
                </figure>
              );
            }
            return null;
          })}
        </div>
      </section>
    </>
  );
}
