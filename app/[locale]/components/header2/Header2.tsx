
import { useTranslations } from 'next-intl';
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
      logo={t('header.logo')}
    />
  )
}

export default Header2