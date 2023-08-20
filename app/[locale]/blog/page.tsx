
import Form from '@/app/[locale]/components/form/Form';
import Head from './section/head/Head';
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vertikalstar.com/blog'),
  title: 'Блог',
  description: 'Блог компанії Вертикаль Будівельних Технологій',
  openGraph: {
    images: ['/img/head-bg.webp']
  }
}

const Blog = () => {
  return(
    <>
      <Head/>
      <Form/>
    </>
  )
} 

export default Blog;  
