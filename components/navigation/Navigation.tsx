
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
  
  const handleSubMenuClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.stopPropagation();
    if (closeMenu) {
      closeMenu();
    }
  };
  
  return(
    <>
    {navlinks.map(link => {
      const isActive = pathname === link.href;
      const linkProps = link.label === 'Магазин' ? { target: '_blank' } : {};

      return(
          <li className={styles.item} key={link.label}>
          <Link href={link.href} className={isActive ? 'active' : ''} onClick={handleSubMenuClick} {...linkProps}>
            {link.label}
          </Link>
        {link.subMenu && (
          <ul className={styles.subList}>
            {link.subMenu.map(sublink => (
              <li key={sublink.label}>
                <Link href={sublink.href} onClick={handleSubMenuClick}>
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

