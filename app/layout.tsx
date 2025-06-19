import type { Metadata } from 'next';
import '@/styles/global.css';

import { libreCaslon, styleScript, afacad } from '@/models/googlefonts.model';
import { siteMetaData } from '@/data/metadata';

export const metadata: Metadata = siteMetaData.default;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es-PE'>
      <body
        className={`${libreCaslon.variable} ${styleScript.variable} ${afacad.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
