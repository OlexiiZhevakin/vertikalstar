'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Header.module.scss'
import Navigation from '../navigation/Navigation';
import Image from 'next/image';



const navItems = [
  {
    label: 'Головна',
    href: '/'
  },  
  {
    label: 'Про нас',
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
    label: 'Послуги',
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
    ]
  },
  {
    label: 'Технології',
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
        href: '#'
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
    label: 'Магазин',
    href: 'https://vertikalstar.in.ua/ua/'
  },
  {
    label: 'Блог',
    href: '/blog'
  },
  {
    label: 'Контакти',
    href: '/contacts'
  },
]


const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isBtnActive, setIsBtnActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
    setIsBtnActive(!isBtnActive);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
    setIsBtnActive(false);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      if (isMenuActive) {
        body.classList.add('lock');
      } else {
        body.classList.remove('lock');
      }
    }
  }, [isMenuActive]);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <Link className={styles.logo} href="#">
            <Image src="/img/logo-ua.svg" alt="Логотип сайту" width={187} height={64} priority={true} />
          </Link>
          <div className={`${styles.btn} ${isBtnActive ? styles.btnActive : ''}`}
            onClick={toggleMenu}>
            <span></span>
          </div>
          <nav className={`${styles.menu} ${isMenuActive ? styles.menuActive : ''}`}>
            <ul className={styles.list}>
              <Navigation navlinks={navItems} closeMenu={closeMenu} />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;