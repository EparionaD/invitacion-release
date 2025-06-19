import { Style_Script, Libre_Caslon_Display, Afacad } from 'next/font/google';

export const styleScript = Style_Script({
  weight: ['400'],
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-styleScript',
  display: 'auto',
});

export const libreCaslon = Libre_Caslon_Display({
  weight: ['400'],
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-libreCaslon',
  display: 'auto',
});

export const afacad = Afacad({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-afacad',
  display: 'auto',
});
