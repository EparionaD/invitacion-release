import Image from 'next/image';
import styles from './page.module.scss';
import { Button, CardIcon, Time } from '@/components';
import { iconButton } from '@/data/button';
import {
  Wedding,
  Cheers,
  Suit,
  Dress,
  Gif,
  CalendarTwo,
  Whatsapp,
} from '@/components/Icons';
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
        <div className={styles.intro__container}>
          <Image
            src='https://res.cloudinary.com/eparionad/image/upload/v1750450244/salvador/invitacion/Preboda_Tatiana_y_Salvador-191_pypa4j.jpg'
            alt='Salvador y Tatiana'
            width={4953}
            height={7429}
            className={styles.intro__img}
          />
          <Image
            src='https://res.cloudinary.com/eparionad/image/upload/v1750450244/salvador/invitacion/Preboda_Tatiana_y_Salvador-47_isjapk.jpg'
            alt='Salvador y Tatiana'
            width={5139}
            height={7709}
            className={styles.intro__img}
          />
          <Image
            src='https://res.cloudinary.com/eparionad/image/upload/v1750450680/salvador/invitacion/Preboda_Tatiana_y_Salvador-21_m0dmw4.jpg'
            alt='Salvador y Tatiana'
            width={4433}
            height={5069}
            className={styles.intro__img}
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
      <section className={styles.gif}>
        <div className={styles.gif__container}>
          <Gif className={styles.gif__icon} />
          <h3 className={styles.gif__title}>mesa de regalos</h3>
        </div>
        <p className={styles.gif__subtitle}>
          Si deseas hacernos un regalo, te agradeceríamos enormemente que lo
          envíes a la siguiente dirección debido a que vivimos en Lima:
        </p>
        <p className={styles.gif__subtitle__address}>
          Residencial Villa Los Molles Torre 2 dpto. 806 - Calle 2 Nro. 131 -
          Comas
        </p>
        <p className={styles.gif__subtitle}>
          O si prefieres, también puedes hacer un aporte económico:{' '}
        </p>
        <div className={styles.gif__tables}>
          <div className={styles.table}>
            <Image
              className={styles.table__img}
              src='/img/bcp.png'
              width={46}
              height={46}
              alt='bcp'
            />
            <div className={styles.table__text}>962 338 129</div>
          </div>
          <div className={styles.table}>
            <Image
              className={styles.table__img}
              src='/img/interbank.png'
              width={46}
              height={46}
              alt='interbank'
            />
            <div className={styles.table__text__v2}>
              <p>Cuenta soles: 898-3400249310</p>
              <p>CCI: 003-898-013400249310-41</p>
            </div>
          </div>
          <div className={styles.table}>
            <Image
              className={styles.table__img}
              src='/img/bbva.png'
              width={46}
              height={46}
              alt='bbva'
            />
            <div className={styles.table__text__v2}>
              <p>Cuenta dólares: 0011-0814-0256014721</p>
              <p>CCI: 011-814-000256014721-13</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.assistance}>
        <FlorRoja className={styles.assistance__roja} />
        <FlorRoja className={styles.assistance__rojamirror} />
        <FlorYellow className={styles.assistance__yellow} />
        <FlorYellow className={styles.assistance__yellowmirror} />
        <div className={styles.assistance__container}>
          <CardIcon
            icon={CalendarTwo}
            title='confirma tus asistencia'
            subtitle='Tu presencia es importante para nosotros. Confirma tu asistencia antes del 25 de junio.'
          />
          <Button data={iconButton.assistanceData} />
        </div>
        <div className={styles.assistance__container}>
          <CardIcon
            icon={Whatsapp}
            title='contacto'
            subtitle='Para cualquier consulta nos puedes escribir directamente.'
          />
          <Button data={iconButton.whatsappData} />
        </div>
      </section>
      <section className={styles.conclusion}>
        <Image
          src='https://res.cloudinary.com/eparionad/image/upload/v1750450245/salvador/invitacion/Preboda_Tatiana_y_Salvador-192_yuwnnd.jpg'
          width={7626}
          height={5084}
          alt='Salvador y Tatiana'
        />
        <div className={styles.conclusion__container}>
          <h3 className={styles.conclusion__text}>¡Te esperamos!</h3>
          <h2 className={styles.conclusion__title}>Tatiana & Salvador</h2>
        </div>
        <FlorAmarilla className={styles.conclusion__amarilla} />
      </section>
    </main>
  );
}
