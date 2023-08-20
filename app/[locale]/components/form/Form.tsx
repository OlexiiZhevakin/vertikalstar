import styles from './Form.module.scss';
import Modal from './modal/Modal';
import { useTranslations } from 'next-intl';

const Form = () => {
  const t = useTranslations('components');
  return (
    <section className={styles.formBlock}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.info}>
            <div>{t('form.title')}</div>
            <ul>
              <li>{t('form.content1')}</li>
              <li>{t('form.content2')}</li>
              <li>{t('form.content3')}</li>
              <li>{t('form.content4')}</li>
              <li>{t('form.content5')}</li>
            </ul>
          </div>
          <Modal
            content1={t('form.modal.content1')}
            content2={t('form.modal.content2')}
            tel={t('form.modal.tel')}
            name={t('form.modal.name')}
            btn={t('form.modal.btn')} />
        </div>
      </div>
    </section>
  )
}

export default Form;