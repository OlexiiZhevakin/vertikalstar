
import Image from 'next/image';
import styles from './Header2.module.scss'
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';
import SwichLang from '../swich-lang/SwichLang';
import MenuBtn from '../MenuBtn/MenuBtn';
import MenuLinks from '../menuLinks/MenuLinks';

const Header2 = () => {
  const t = useTranslations('components');
  return (
    <MenuLinks
      home={t('header.home')}
      about={t('header.about')}
      services={t('header.services')}
      technologies={t('header.technologies')}
      shop={t('header.shop')}
      blog={t('header.blog')}
      contact={t('header.contact')}
    />
  )
}

export default Header2