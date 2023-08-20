import Form from "@/app/[locale]/components/form/Form";
import Info from "./section/info/Info";
import { Metadata } from "next";
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
      <Header/>
      <Info />
      <Form />
    </>
  );
};


export default ContactsPage;
