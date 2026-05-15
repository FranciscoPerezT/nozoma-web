import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Servicios — Nozoma',
  description: 'Automatización de procesos, reportería a medida y formación aplicada para organizaciones y profesionales.',
}

const servicios = [
  {
    num: '01',
    title: 'Automatización de procesos',
    desc: 'Convertimos flujos manuales en sistemas que corren solos. Desde reportes periódicos hasta procesos críticos de tesorería o logística, diseñamos soluciones adaptadas a tu stack actual — sin necesidad de cambiar tu ERP.',
    beneficios: [
      'Elimina errores humanos en tareas repetitivas',
      'Libera horas de trabajo de alto valor',
      'Documentación completa del proceso automatizado',
      'Adaptable a cualquier sistema existente',
    ],
    para: 'Equipos financieros, operativos y de control de gestión',
  },
  {
    num: '02',
    title: 'Reportería a medida',
    desc: 'Diseñamos dashboards y reportes conectados a tus datos reales. No plantillas genéricas — soluciones construidas sobre tus fuentes, con la lógica de negocio que tu equipo ya conoce.',
    beneficios: [
      'Datos actualizados sin intervención manual',
      'Visualizaciones adaptadas a tu audiencia',
      'Entrega única con documentación técnica',
      'Capacitación incluida para tu equipo',
    ],
    para: 'Gerencias, áreas de control y equipos que toman decisiones',
  },
  {
    num: '03',
    title: 'Formación y transferencia',
    desc: 'Relatorías, talleres y cursos aplicados directamente al contexto de tu organización. Sin teoría vacía — cada contenido parte de casos reales y termina en habilidades que el equipo puede usar el día siguiente.',
    beneficios: [
      'Contenido adaptado a tu industria y herramientas',
      'Formato presencial u online según necesidad',
      'Material de apoyo y seguimiento post-capacitación',
      'Acceso a plataforma xlcurso para cursos continuos',
    ],
    para: 'Organizaciones, equipos y profesionales independientes',
  },
]

export default function Servicios() {
  return (
    <div className="px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Encabezado */}
        <div className="mb-14">
          <p className="text-[#028090] text-xs font-medium uppercase tracking-widest mb-3">
            Servicios
          </p>
          <h1 className="font-serif text-[#1A1A2E] text-4xl font-normal mb-4">
            Lo que hacemos
          </h1>
          <p className="text-[#3D5A6B] text-base max-w-xl leading-relaxed">
            Tres líneas de trabajo con un propósito común: que profesionales y
            organizaciones dejen de perder tiempo en tareas que pueden automatizarse
            o delegarse a sistemas bien diseñados.
          </p>
        </div>

        {/* Servicios */}
        <div className="flex flex-col gap-10">
          {servicios.map(({ num, title, desc, beneficios, para }) => (
            <div
              key={num}
              className="bg-white border border-[#D0DDE3] rounded-xl overflow-hidden"
            >
              <div className="h-1 bg-[#02C39A]" />
              <div className="p-8 grid md:grid-cols-[1fr_1.2fr] gap-8">
                <div>
                  <p className="font-serif text-[#02C39A] text-4xl mb-3">{num}</p>
                  <h2 className="font-serif text-[#1A1A2E] text-2xl font-normal mb-4">
                    {title}
                  </h2>
                  <p className="text-[#3D5A6B] text-sm leading-relaxed mb-4">{desc}</p>
                  <p className="text-[#028090] text-xs italic">Para: {para}</p>
                </div>
                <div>
                  <p className="text-[#3D5A6B] text-xs font-medium uppercase tracking-widest mb-4">
                    Qué incluye
                  </p>
                  <ul className="flex flex-col gap-3">
                    {beneficios.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-[#3D5A6B]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#02C39A] mt-1.5 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 bg-[#F0F3F4] border border-[#D0DDE3] rounded-xl p-8 text-center">
          <h3 className="font-serif text-[#1A1A2E] text-2xl font-normal mb-3">
            ¿No sabes cuál se ajusta a tu problema?
          </h3>
          <p className="text-[#3D5A6B] text-sm mb-6">
            Cuéntanos qué necesitas y te orientamos sin compromiso.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-[#028090] text-white text-sm font-medium px-8 py-3 rounded-lg hover:bg-[#01697a] transition-colors"
          >
            Conversemos →
          </Link>
        </div>
      </div>
    </div>
  )
}
