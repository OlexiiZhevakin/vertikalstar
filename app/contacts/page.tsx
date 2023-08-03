import Form from "@/components/form/Form";
// import Head from "./section/head/Head";
import Info from "./section/info/Info";
import { Metadata } from "next";
import Head from 'next/head'
import Header from "./section/head/Header";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vertikalstar.com/contacts'),
  title: 'Контакти',
  description: 'Контакти компанії Вертикаль Будівельних Технологій',
  openGraph: {
    images: ['/img/contacts/contact-bg.webp']
  }
}

const ContactsPage = () => {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/img/contacts/contact-bg.webp" />
      </Head>
      <Header/>
      {/* <Head /> */}
      <Info />
      <Form />
    </>
  );
};


export default ContactsPage;
