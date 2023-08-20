import Form from '@/app/[locale]/components/form/Form';
import styles from './page.module.scss';
import Image from 'next/image';

const AkademiyaVertykal = () => {
  return(
    <>
    <section>
        <div className="container">
          <Image src='/img/services/academy/1.jpg' alt='' width={1200} height={700} />
          <Image src='/img/services/academy/2.jpg' alt='' width={1200} height={656} />
        </div>
    </section>
    <Form/>
    </>
  )
}

export default AkademiyaVertykal;