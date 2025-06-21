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
    url: 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=¡Nos%20casamos!%20Tatiana%20y%20Salvador&dates=20250802T103000/20250802T223000&details=Matrimonio%20de%20Tatiana%20y%20Salvador&location=Sumacc%20Huayta%20-%20Jr.%20Loreto%201655%2C%20Huancayo',
  },
  addressData: {
    title: 'Ver ubicación',
    icon: <Address />,
    url: 'https://www.google.com/maps?q=-12.076517,-75.220859',
  },
  assistanceData: {
    title: 'Confirma aquí',
    icon: <Mail />,
    url: 'https://forms.gle/AHWJvKRjnAYwnst59',
  },
  whatsappData: {
    title: 'Clic aquí',
    icon: <Whatsapp />,
    url: 'https://wa.me/51962338129',
  },
};
