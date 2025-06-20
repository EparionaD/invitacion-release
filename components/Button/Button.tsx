import Link from 'next/link';
import { IconButtonData } from '@/data/button';

import styles from './button.module.scss';

interface ButtonProps {
  data: IconButtonData;
}

const Button = ({ data }: ButtonProps) => {
  return (
    <Link href={data.url} className={styles.button} target='_blank'>
      <div className={styles.button__icon}>{data.icon}</div>
      <span className={styles.button__title}>{data.title}</span>
    </Link>
  );
};

export default Button;
