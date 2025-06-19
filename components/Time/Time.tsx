'use client';

import { useEffect, useState } from 'react';

import styles from './time.module.scss';

const Time = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    // Fecha objetivo: 2 de agosto de 2025
    const targetDate = new Date('August 2, 2025 00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        // Si la fecha ya pasó
        clearInterval(interval);
        return;
      }

      // Cálculos del tiempo restante
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Actualizar el estado con ceros a la izquierda si es necesario
      setTimeLeft({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0'),
      });
    };

    // Actualizar inmediatamente y luego cada segundo
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.time}>
      <div className={styles.time__item}>
        <span className={styles.time__number}>{timeLeft.days}</span>
        <span className={styles.time__name}>días</span>
      </div>
      <div className={styles.time__item}>
        <span className={styles.time__number}>{timeLeft.minutes}</span>
        <span className={styles.time__name}>minutos</span>
      </div>
      <div className={styles.time__item}>
        <span className={styles.time__number}>{timeLeft.seconds}</span>
        <span className={styles.time__name}>segundos</span>
      </div>
    </div>
  );
};

export default Time;
