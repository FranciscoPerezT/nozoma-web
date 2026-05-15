'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/cursos', label: 'Cursos' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <header className="bg-white border-b border-[#D0DDE3] sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-serif text-[#028090] text-xl tracking-wide">
          Nozoma
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors ${
                pathname === href
                  ? 'text-[#028090] font-medium'
                  : 'text-[#3D5A6B] hover:text-[#028090]'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <Link
          href="/contacto"
          className="bg-[#028090] text-white text-xs font-medium px-4 py-2 rounded-md hover:bg-[#01697a] transition-colors"
        >
          Conversemos →
        </Link>
      </nav>
    </header>
  )
}
