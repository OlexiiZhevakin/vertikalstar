import Form from "@/components/form/Form";
import Head from "./section/head/Head";
import Info from "./section/info/Info";
import { Metadata } from "next";

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
      <Head />
      <Info />
      <Form />
    </>
  );
};


export default ContactsPage;
