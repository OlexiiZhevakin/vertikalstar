import styles from "./navigation.module.scss";
import Link from 'next-intl/link';
import { usePathname } from "next/navigation";
import { useState } from "react";



type Navlink = {
  label: string;
  href: string;
  subMenu?: Navlink[];
};

type Props = {
  navlinks: Navlink[];
  closeMenu?: () => void;
};

const Navigation = ({ navlinks, closeMenu }: Props) => {
  const pathname = usePathname();
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const handleMouseEnter = (label: string) => {
    setActiveSubMenu(label);
  };

  const handleMouseLeave = () => {
    setActiveSubMenu(null);
  };

  const handleClick = () => {
    setActiveSubMenu(null);
    if (closeMenu) {
      closeMenu();
    }
  };

  return (
    <>
      {navlinks.map((link) => {
        const isActive = pathname === link.href;
        const linkProps = link.label === "Магазин" ? { target: "_blank" } : {};

        return (
          <li
            className={styles.item}
            key={link.label}
            onMouseEnter={() => handleMouseEnter(link.label)}
            onMouseLeave={handleMouseLeave}
          >
            
            <Link href={link.href} className={isActive ? "active" : ""} onClick={handleClick} {...linkProps}>
              {link.label}
            </Link>
            {link.subMenu && activeSubMenu === link.label && (
              <ul className={styles.subList}>
                {link.subMenu.map((sublink) => (
                  <li key={sublink.label}>
                    <Link href={sublink.href} onClick={handleClick}>
                      {sublink.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </>
  );
};

export default Navigation;
