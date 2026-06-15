import type { Metadata } from 'next'
import { DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})

const dmMono = DM_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Nozoma — Automatización de procesos y reportería a medida en Chile',
  description: 'Consultora tecnológica en Santiago. Automatización de procesos, dashboards a medida y formación aplicada para equipos financieros y operativos.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${dmSans.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
