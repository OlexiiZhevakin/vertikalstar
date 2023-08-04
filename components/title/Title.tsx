
import styles from './title.module.scss';

type Props = {
  children: React.ReactNode;
  title: "h1" | "h2" | "title" | "line" | "left";
  className?: string;
};

const Title = ({ title, children, className }: Props) => {
  switch (title) {
    case "h1":
      return <h1 className={`${styles.h1} ${className}`}>{children}</h1>;
    case "h2":
      return <h2 className={`${styles.h2} ${className}`}>{children}</h2>;
    case "title":
      return <h1 className={`${styles.title} ${className}`}>{children}</h1>;
    case "left":
      return <h2 className={`${styles.left} ${className}`}>{children}</h2>;
    case "line":
      return (
        <div className={styles.wrapper}>
          <h2 className={`${styles.left} ${className || ''}`}>{children}</h2>
          <span className={styles.line}></span>
        </div>
      );
    default:
      return <></>;
  }
};

export default Title;
