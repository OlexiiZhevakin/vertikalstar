'use client'
import React from 'react'
import styles from './MenuLinks.module.scss'
import Link from 'next-intl/link';
import Image from 'next/image';
import SwichLang from '../swich-lang/SwichLang';
import { useState, useEffect } from 'react';
import { usePathname } from "next/navigation";


type Props = {
  home: string,
  about: string,
  services: string,
  technologies: string,
  shop: string,
  blog: string,
  contact: string
  logo: string
}

const MenuLinks = ({ home, about, services, technologies, shop, blog, contact, logo }: Props) => {

  const pathname = usePathname();

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

    <header className={styles.container}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link className={styles.logo} href="/">
            <Image src={`/img/${logo}`} alt="Логотип сайту" width={187} height={64} priority={true} />
          </Link>
          <div className={`${styles.btn} ${isBtnActive ? styles.btnActive : ''}`}
            onClick={toggleMenu}>
            <span></span>
          </div>
          <nav className={`${styles.menu} ${isMenuActive ? styles.menuActive : ''}`}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link href="/" onClick={closeMenu}>{home}</Link>
              </li>
              <li className={styles.item}>
                <Link href="/about">{about}</Link>
                <ul className={styles.sublist}>
                  <li className={styles.subitem}>
                    <Link href="/about" onClick={closeMenu}>{about}</Link>
                  </li>
                  <li className={styles.subitem}>
                    <Link href="/vakansiyi" onClick={closeMenu}>Вакансії</Link>
                  </li>
                  <li className={styles.subitem}>
                    <Link href="/portfolio" onClick={closeMenu}>Портфоліо</Link>
                  </li>
                  <li className={styles.subitem}>
                    <Link href="/reviews" onClick={closeMenu}>Відгуки</Link>
                  </li>
                </ul>
              </li>
              <li className={styles.item}>
                <Link href="/services">{services}</Link>
                <ul className={styles.sublist}>
                  <li className={styles.subitem}>
                    <Link href="/services/proektuvannya-tekhnolohiy" onClick={closeMenu}>
                      Обстеження, проектування, розробка технології
                    </Link>
                  </li>
                  <li className={styles.subitem}>
                    <Link href="/services/byuro-rekonstruktsiyi" onClick={closeMenu}>
                      Бюро реконструкції та реставрації
                    </Link>
                  </li>
                  <li className={styles.subitem}>
                    <Link href="/services/byuro-budivelnoyi-khimiyi" onClick={closeMenu}>
                      Бюро будівельної хімії
                    </Link>
                  </li>
                  <li className={styles.subitem}>
                    <Link href="/services/akademiya-vertykal" onClick={closeMenu}>
                      Академія "Вертикаль"
                    </Link>
                  </li>
                  <li className={styles.subitem}>
                    <Link href="/services/partner-derzhavnoyi-prohramy-yevidnovlennya" onClick={closeMenu} >
                      Програма єВідновлення
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={styles.item}>
                <Link href="/technologies">{technologies}</Link>
                <ul className={styles.sublist}>
                  <li className={styles.subitem}>
                    <Link href="/technologies/hidroizolyatsiya" onClick={closeMenu}>Гідроізоляція</Link>
                  </li>
                  <li className={styles.subitem}>
                    <Link href="#" onClick={closeMenu}>Добавки в бетони та розчини</Link>
                  </li>
                  <li className={styles.subitem}>
                    <Link href="#" onClick={closeMenu}>Утеплення та термомодернізація</Link>
                  </li>
                  <li className={styles.subitem}>
                    <Link href="/technologies/fasad" onClick={closeMenu}>
                      Очистка, реставрація та захист фасадів
                    </Link>
                  </li>
                  <li className={styles.subitem}>
                    <Link href="/technologies/promyslovi-ta-dekoratyvni-pidlohy" onClick={closeMenu}>
                      Промислові та декоративні підлоги
                    </Link>
                  </li>
                  <li className={styles.subitem}>
                    <Link href="/technologies/rekonstruktsiya" onClick={closeMenu}>
                      Реконструкція
                    </Link>
                  </li>
                  <li className={styles.subitem}>
                    <Link href="/technologies/mikrotsement-ta-dekoratyvne-ozdoblennya" onClick={closeMenu}>
                      Мікроцемент та декоративне оздоблення
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={styles.item}>
                <Link href="https://vertikalstar.in.ua/ua/" target='_blanc' onClick={closeMenu}>{shop}</Link>
              </li>
              <li className={styles.item}>
                <Link href="/blog" onClick={closeMenu}>{blog}</Link>
              </li>
              <li className={styles.item}>
                <Link href="/contacts" onClick={closeMenu}>{contact}</Link>
              </li>
            </ul>
            <SwichLang />
          </nav>

        </div>
      </div>
    </header>




  )
}

export default MenuLinks