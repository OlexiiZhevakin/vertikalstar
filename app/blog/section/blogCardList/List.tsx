
// 'use client'

// import BlogCard from "@/card/BlogCard/BlogCard";
// import styles from './List.module.scss';
// import Link from "next/link";
// import { Metadata } from "next";


// async function getData() {
//   const response  = await fetch("https://www.vertikalstar.com/blogData.json",
//   {
//     next: {
//       revalidate: 60
//     }
//   })
  
//   return response.json()
// }

// export const metadata: Metadata = {
//   title: 'Блог'
// }

// export default async function List() {

//   const posts = await getData()

//   return (
//     <ul className={styles.list}>
//       {posts.map((post: any) => (
//         <li key={post.id}>
//           <Link href={`/blog/${post.id}`} as={`/blog/${post.id}`}>
//               <BlogCard
//                 image={post.image}
//                 title={post.title}
//               />  
//           </Link>
//         </li>
//       ))}
//     </ul>
//   )
// }


import BlogCard from "@/card/BlogCard/BlogCard";
import styles from './List.module.scss';
import Link from "next/link";
import { Metadata } from "next";
import blogData from "@/data/blog";


export const metadata: Metadata = {
  title: 'Блог'
}

export default function List() {

  return (
    <ul className={styles.list}>
      {blogData.map((post, index) => (
        <li key={index}>
          <Link href={post.link}>
            <BlogCard
              image={post.image}
              title={post.title}
            />
          </Link>
        </li>
      ))}
    </ul>
  )
}


