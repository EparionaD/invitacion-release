import { Calendar, Address } from '@/components/Icons';
import { ReactNode } from 'react';

export interface IconButtonData {
  title: string;
  icon: ReactNode;
  url: string;
}

export interface IconButtons {
  calendarData: IconButtonData;
  addressData: IconButtonData;
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
};
