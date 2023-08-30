'use client'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './smooth-scroll.module.scss'
import Image from 'next/image';

export default function SmoothScroll() {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, destination: string) => {
    e.preventDefault();
    router.push(destination);
    const element = document.querySelector(destination);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.wrapper}>
      <Link href="#top" onClick={(e) => handleClick(e, '#top')}>
        <Image src='/img/up.svg' alt='icon up arrow' width={30} height={30}/>
      </Link>
      <Link href="#bottom" onClick={(e) => handleClick(e, '#bottom')}>
        <Image src='/img/down.svg' alt='icon down arrow' width={30} height={30} />
      </Link>
    </div>
  );
}
