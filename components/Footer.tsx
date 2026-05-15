import Link from 'next/link'

const links = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/cursos', label: 'Cursos' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#D0DDE3] px-6 py-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        <div>
          <p className="font-serif text-[#028090] text-lg">Nozoma</p>
          <p className="text-[#7A9BAD] text-xs mt-1">
            Tecnología al servicio de las decisiones que importan
          </p>
        </div>

        <div className="flex items-center gap-6">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="text-[#3D5A6B] text-sm hover:text-[#028090] transition-colors">
              {label}
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-6 pt-4 border-t border-[#D0DDE3]">
        <p className="text-[#7A9BAD] text-xs">
          contacto@nozoma.cl · nozoma.cl · Santiago, Chile
        </p>
      </div>
    </footer>
  )
}
