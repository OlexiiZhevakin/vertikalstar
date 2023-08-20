import Link from 'next-intl/link'
import styles from './Btn.module.scss'

type Props = {
  children: React.ReactNode
  href: string
  className?: string
}

const Btn = ({children, href, className}: Props) => {
  return (
    <Link href={href} className={`${styles.btn} ${className || ''}`}>{children}</Link>
  )
}

export default Btn