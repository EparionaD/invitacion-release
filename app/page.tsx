import Image from 'next/image';
import styles from './page.module.scss';
import { Button, CardIcon, Time } from '@/components';
import { iconButton } from '@/data/button';
import { Wedding, Cheers, Suit, Dress } from '@/components/Icons';
import {
  FlorAmarilla,
  FlorAzul,
  FlorRoja,
  FlorYellow,
} from '@/components/Flores';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <FlorAmarilla className={styles.intro__amarilla} />
        <FlorRoja className={styles.intro__roja} />
        <FlorAmarilla className={styles.intro__azul} />
        <h3 className={styles.intro__subtitle}>¡Nos casamos!</h3>
        <div className={styles.intro__title}>
          <h1>Tatiana</h1>
          <h1 className={styles.intro__title__line}>&</h1>
          <h1>Salvador</h1>
        </div>
        <div className={styles.intro__img}>
          <Image
            src='https://cdn.pixabay.com/photo/2022/04/12/04/57/couple-7127168_960_720.jpg'
            alt='Tatiana'
            width={400}
            height={600}
          />
          <Image
            src='https://cdn.pixabay.com/photo/2022/04/12/04/57/couple-7127168_960_720.jpg'
            alt='Tatiana'
            width={400}
            height={600}
          />
          <Image
            src='https://cdn.pixabay.com/photo/2022/04/12/04/57/couple-7127168_960_720.jpg'
            alt='Tatiana'
            width={400}
            height={600}
          />
        </div>
        <p className={styles.intro__paragraph}>
          Estamos súper emocionados de que puedas ser parte de la celebración de
          nuestro matrimonio, por eso te invitamos a celebrar con nosotros este
          día tan especial.
        </p>
      </section>
      <section className={styles.date}>
        <h3 className={styles.date__title}>SÁBADO</h3>
        <div className={styles.container}>
          <div className={styles.container__line}>AGOSTO</div>
          <div className={styles.container__center}>02</div>
          <div className={styles.container__line}>2025</div>
        </div>
        <Button data={iconButton.calendarData} />
        <h3 className={styles.date__subtitle}>Faltan</h3>
        <Time />
      </section>
      <section className={styles.address}>
        <FlorAzul className={styles.address__azul} />
        <FlorAzul className={styles.address__azulmirror} />
        <FlorRoja className={styles.address__roja} />
        <FlorRoja className={styles.address__rojamirror} />
        <FlorYellow className={styles.address__yellow} />
        <FlorYellow className={styles.address__yellowmirror} />
        <h2 className={styles.address__title}>Sumacc Huayta</h2>
        <p className={styles.address__subtitle}>Jr. Loreto 1655, Huancayo</p>
        <Button data={iconButton.addressData} />
        <div className={styles.address__card}>
          <CardIcon
            icon={Wedding}
            title='ceremonia civil'
            subtitle='10:30 am'
          />
          <CardIcon icon={Cheers} title='recepción' subtitle='01:00 pm' />
          <CardIcon
            icon={Suit}
            icon1={Dress}
            title='código de vestimenta'
            subtitle='Elegante'
            subtitle1='No usar vestidos blancos'
            special={true}
          />
        </div>
      </section>
    </main>
  );
}
