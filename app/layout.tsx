import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

const dmSans = DM_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Nozoma — Tecnología al servicio de las decisiones que importan',
  description:
    'Automatización de procesos, reportería a medida y formación aplicada. Soluciones tecnológicas para que profesionales y organizaciones se enfoquen en lo que importa.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#3D5A6B]">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
