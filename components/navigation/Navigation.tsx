
'use client';
import styles from "./navigation.module.scss"

import Link from "next/link";
import { usePathname } from "next/navigation";

type Navlink = {
  label: string,
  href: string,
  subMenu?: Navlink[],
}

type Props = {
  navlinks: Navlink[];
  closeMenu?: () => void;
}

const Navigation = ({ navlinks, closeMenu }: Props) => {
  const pathname = usePathname();
  
  return(
    <>
    {navlinks.map(link => {
      const isActive = pathname === link.href;
      const linkProps = link.label === 'Магазин' ? { target: '_blank' } : {};

      const handleClick = () => {
        if (closeMenu) {
          closeMenu(); // Вызываем closeMenu при клике на ссылку
        }
      };
      
      return(
          <li className={styles.item} key={link.label}>
          <Link href={link.href} className={isActive ? 'active' : ''} onClick={handleClick} {...linkProps}>
            {link.label}
          </Link>
        {link.subMenu && (
          <ul className={styles.subList}>
            {link.subMenu.map(sublink => (
              <li key={sublink.label}>
                <Link href={sublink.href} onClick={handleClick}>
                  {sublink.label}
                </Link>
          </li>
        ))}
      </ul>
    )}
  </li>
    ) 
    })}
    </>
  ) 
}

export default Navigation;

