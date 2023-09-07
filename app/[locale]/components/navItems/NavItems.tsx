import { useTranslations } from "next-intl";
import Navigation from "../navigation/Navigation";



const NavItems = () => {
  const t = useTranslations('components');

  const navItems = [
    {
      label: t('header.home'),
      href: '/'
    },
    {
      label: t('header.about'),
      href: '/about',
      subMenu: [
        {
          label: 'Про нас',
          href: '/about'
        },
        {
          label: 'Вакансії',
          href: '/vakansiyi'
        },
        {
          label: 'Робота в реальному часі',
          href: '/robota-v-realnomu-chasi',
        },
        {
          label: 'Портфоліо',
          href: '/portfolio'
        },
        {
          label: 'Відгуки',
          href: '/reviews'
        },
      ]
    },
    {
      label: t('header.services'),
      href: '/services',
      subMenu: [
        {
          label: 'Обстеження, проектування, розробка технології',
          href: '/services/proektuvannya-tekhnolohiy'
        },
        {
          label: 'Бюро реконструкції та реставрації',
          href: '/services/byuro-rekonstruktsiyi'
        },
        {
          label: 'Бюро будівельної хімії',
          href: '/services/byuro-budivelnoyi-khimiyi'
        },
        {
          label: 'Академія "Вертикаль"',
          href: '/services/akademiya-vertykal'
        },
        {
          label: "єВідновлення",
          href: "/services/partner-derzhavnoyi-prohramy-yevidnovlennya"
        }
      ]
    },
    {
      label: t('header.technologies'),
      href: '/technologies',
      subMenu: [
        {
          label: 'Гідроізоляція',
          href: '/technologies/hidroizolyatsiya'
        },
        {
          label: 'Добавки в бетони та розчини',
          href: '#'
        },
        {
          label: 'Утеплення та термомодернізація',
          href: '#'
        },
        {
          label: 'Очистка, реставрація та захист фасадів',
          href: '/technologies/fasad'
        },
        {
          label: 'Промислові та декоративні підлоги',
          href: '/technologies/promyslovi-ta-dekoratyvni-pidlohy'
        },
        {
          label: 'Реконструкція',
          href: '/technologies/rekonstruktsiya'
        },
        {
          label: 'Мікроцемент та декоративне оздоблення',
          href: '/technologies/mikrotsement-ta-dekoratyvne-ozdoblennya'
        },
      ]
    },
    {
      label: t('header.shop'),
      href: 'https://vertikalstar.in.ua/ua/'
    },
    {
      label: t('header.blog'),
      href: '/blog'
    },
    {
      label: t('header.contact'),
      href: '/contacts'
    },
  ]

  return  <Navigation navlinks={navItems} />;
}

export default NavItems