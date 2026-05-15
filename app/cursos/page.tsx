import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cursos — Nozoma',
  description: 'Plataforma de cursos online xlcurso: módulos, evaluaciones y seguimiento de progreso. Acceso con RUT.',
}

const features = [
  { label: 'Módulos y lecciones organizados' },
  { label: 'Evaluaciones con corrección automática' },
  { label: 'Seguimiento de progreso en tiempo real' },
  { label: 'Acceso con RUT — sin email corporativo' },
  { label: 'Corrección manual para preguntas abiertas' },
  { label: 'Exportación de calificaciones a Excel' },
]

export default function Cursos() {
  return (
    <div className="px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Encabezado */}
        <div className="mb-14">
          <p className="text-[#028090] text-xs font-medium uppercase tracking-widest mb-3">
            Cursos
          </p>
          <h1 className="font-serif text-[#1A1A2E] text-4xl font-normal mb-4">
            Plataforma xlcurso
          </h1>
          <p className="text-[#3D5A6B] text-base max-w-xl leading-relaxed">
            Formación online diseñada para contextos reales. Sin fricciones de
            registro — los alumnos ingresan con su RUT y empiezan de inmediato.
          </p>
        </div>

        {/* Card principal */}
        <div className="rounded-xl overflow-hidden border border-[#D0DDE3] max-w-lg mx-auto">
          <div className="bg-[#1A1A2E] px-8 py-8 relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full bg-[#028090] opacity-20" />
            <p className="text-[#9FE1CB] text-xs tracking-widest mb-3 relative">
              DISPONIBLE AHORA
            </p>
            <p className="font-serif text-[#02C39A] text-3xl relative mb-2">xlcurso</p>
            <p className="text-[#9FE1CB] text-sm relative">
              Plataforma educativa para cursos online
            </p>
          </div>

          <div className="bg-[#F0F3F4] divide-y divide-[#D0DDE3]">
            {features.map(({ label }) => (
              <div key={label} className="flex items-center gap-3 px-6 py-3.5 text-sm text-[#3D5A6B]">
                <span className="w-2 h-2 rounded-full bg-[#02C39A] flex-shrink-0" />
                {label}
              </div>
            ))}
          </div>

          <div className="bg-[#F0F3F4] px-5 pb-5 pt-2">
            <Link
              href="https://cursos.nozoma.cl"
              className="block bg-[#028090] text-white text-sm font-medium text-center py-4 rounded-lg hover:bg-[#01697a] transition-colors"
            >
              Ingresar a la plataforma →
            </Link>
          </div>
        </div>

        {/* Nota */}
        <p className="text-center text-[#7A9BAD] text-xs mt-6">
          El acceso es gestionado por tu institución o docente.
          Si no tienes credenciales, consulta a tu profesor.
        </p>
      </div>
    </div>
  )
}
