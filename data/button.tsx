import { Calendar, Address, Mail, Whatsapp } from '@/components/Icons';
import { ReactNode } from 'react';

export interface IconButtonData {
  title: string;
  icon: ReactNode;
  url: string;
}

export interface IconButtons {
  calendarData: IconButtonData;
  addressData: IconButtonData;
  assistanceData: IconButtonData;
  whatsappData: IconButtonData;
}

export const iconButton: IconButtons = {
  calendarData: {
    title: 'Agregar a Google Calendar',
    icon: <Calendar />,
    url: 'https://react-icons.github.io/react-icons/icons/lu/',
  },
  addressData: {
    title: 'Ver ubicación',
    icon: <Address />,
    url: 'https://react-icons.github.io/react-icons/icons/lu/',
  },
  assistanceData: {
    title: 'Confirma aquí',
    icon: <Mail />,
    url: 'https://forms.gle/AHWJvKRjnAYwnst59',
  },
  whatsappData: {
    title: 'Clic aquí',
    icon: <Whatsapp />,
    url: 'https://react-icons.github.io/react-icons/icons/lu/',
  },
};
