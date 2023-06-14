'use client'
import Link from 'next/link';
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
    href: '/about'
  },
  {
    label: 'Послуги',
    href: '/services'
  },
  {
    label: 'Технології',
    href: '/technologies'
  },
  {
    label: 'Магазин',
    href: '#'
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

  return(
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <Link href="#"><Image src="/img/logo-ua.svg" alt="Логотип сайту" width={187} height={64} priority={true}/></Link>
          <nav>
            <ul className={styles.list}>
              <Navigation navlinks={navItems}/>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;