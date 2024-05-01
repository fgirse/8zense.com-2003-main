import type { Metadata } from 'next';
import { Saira, Saira_Condensed } from 'next/font/google';          
import 'normalize-css/normalize.css';
import './globals.css';
import styles from './home.module.css';
import { ClerkProvider } from '@clerk/nextjs';
import { neobrutalism } from '@clerk/themes';
import link from 'next/link';
import { AntdRegistry } from '@ant-design/nextjs-registry';


const sairaCond = Saira_Condensed({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '700', '900',],
  variable: '--font-saira_c',
    });

    export const metadata: Metadata = {
      title: '8zenSe.com',
      description: 'LandingPage for startup, Interiore Design, Innenarchitektur, Desing Beton-Möbel ',
      icons: {icon : "/assets/images/LogoEZ990.svg"}
    }



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider  appearance={{
      baseTheme:neobrutalism
    }} >
   
   <html lang="en" className="bg-transparent">


      <body className={styles.container}><AntdRegistry>{children}</AntdRegistry></body>
    </html>
    </ClerkProvider>
  )
}
