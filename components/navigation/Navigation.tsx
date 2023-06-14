'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

type Navlink = {
  label: string,
  href: string,
}

type Props = {
  navlinks: Navlink[];
}

const Navigation = ({ navlinks }: Props) => {
  const pathname = usePathname();
  return(
    <>
    {navlinks.map(link => {
      const isActive = pathname === link.href;

      return(
        <li key={link.label}>
          <Link 
              href={link.href}
              className={isActive ? 'active' : ''}>
        {link.label}
        </Link>
        </li>
      )
    })}
    </>
  )
}

export default Navigation;