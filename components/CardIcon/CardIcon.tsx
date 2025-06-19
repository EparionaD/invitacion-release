import React from 'react';

interface CardIconProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  icon1?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  subtitle: string;
  subtitle1?: string;
  special?: boolean;
}

import styles from './cardicon.module.scss';

const CardIcon: React.FC<CardIconProps> = ({
  icon: Icon,
  icon1: Icon1,
  title,
  subtitle,
  subtitle1,
  special,
}: CardIconProps) => {
  return (
    <div className={styles.cardicon}>
      <div className={styles.cardicon__container}>
        <Icon className={styles.cardicon__icon} />
        {special && Icon1 && <Icon1 className={styles.cardicon__icon} />}
      </div>
      <h3 className={styles.cardicon__title}>{title}</h3>
      <div className={styles.cardicon__content}>
        <p className={styles.cardicon__subtitle}>{subtitle}</p>
        {special && <p className={styles.cardicon__subtitle}>{subtitle1}</p>}
      </div>
    </div>
  );
};

export default CardIcon;
