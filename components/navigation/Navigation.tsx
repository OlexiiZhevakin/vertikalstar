
// 'use client';
// import styles from "./navigation.module.scss"

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// type Navlink = {
//   label: string,
//   href: string,
//   subMenu?: Navlink[],
// }

// type Props = {
//   navlinks: Navlink[];
//   closeMenu?: () => void;
// }

// const Navigation = ({ navlinks, closeMenu }: Props) => {
//   const pathname = usePathname();
  
//   return(
//     <>
//     {navlinks.map(link => {
//       const isActive = pathname === link.href;
//       const linkProps = link.label === 'Магазин' ? { target: '_blank' } : {};

//       const handleClick = () => {
//         if (closeMenu) {
//           closeMenu(); // Вызываем closeMenu при клике на ссылку
//         }
//       };
      
//       return(
//           <li className={styles.item} key={link.label}>
//           <Link href={link.href} className={isActive ? 'active' : ''} onClick={handleClick} {...linkProps}>
//             {link.label}
//           </Link>
//         {link.subMenu && (
//           <ul className={styles.subList}>
//             {link.subMenu.map(sublink => (
//               <li key={sublink.label}>
//                 <Link href={sublink.href} onClick={handleClick}>
//                   {sublink.label}
//                 </Link>
//           </li>
//         ))}
//       </ul>
//     )}
//   </li>
//     ) 
//     })}
//     </>
//   ) 
// }

// export default Navigation;


'use client';
import styles from "./navigation.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from 'react';

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
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index: any) => {
    setActiveLink(index === activeLink ? null : index);
    if (closeMenu) {
      closeMenu();
    }
  };

  return (
    <>
      {navlinks.map((link, index) => {
        const isActive = pathname === link.href;
        const linkProps = link.label === 'Магазин' ? { target: '_blank' } : {};

        return (
          <li className={styles.item} key={link.label}>
            <a onClick={() => handleLinkClick(index)} className={isActive ? 'active' : ''} {...linkProps}>
              {link.label}
            </a>
            {link.subMenu && activeLink === index && (
              <ul className={styles.subList}>
                {link.subMenu.map(sublink => (
                  <li key={sublink.label}>
                    <Link href={sublink.href} onClick={handleLinkClick}>
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



