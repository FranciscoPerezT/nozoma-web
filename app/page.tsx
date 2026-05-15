import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white px-6 py-14 md:py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda */}
          <div>
            <span className="inline-block bg-[#E1F5EE] text-[#085041] text-xs font-medium px-3 py-1 rounded-full tracking-wide mb-5">
              Nuevo · Plataforma de cursos online
            </span>
            <h1 className="font-serif text-[#1A1A2E] text-4xl md:text-5xl font-normal leading-tight mb-4">
              Aprende a tu ritmo con{' '}
              <span className="text-[#028090]">formación aplicada</span>{' '}
              a tu trabajo real
            </h1>
            <p className="text-[#3D5A6B] text-base leading-relaxed mb-8">
              Accede a cursos diseñados por profesionales con experiencia real.
              Sin relleno, sin teoría vacía — solo lo que necesitas para hacer
              mejor tu trabajo.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://cursos.nozoma.cl"
                className="bg-[#028090] text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-[#01697a] transition-colors"
              >
                Entrar a los cursos →
              </Link>
              <Link
                href="/servicios"
                className="border border-[#028090] text-[#028090] text-sm px-6 py-3 rounded-lg hover:bg-[#E1F5EE] transition-colors"
              >
                Saber más
              </Link>
            </div>
          </div>

          {/* Columna derecha — card xlcurso */}
          <div className="rounded-xl overflow-hidden border border-[#D0DDE3]">
            <div className="bg-[#1A1A2E] px-6 py-6 relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-[#028090] opacity-20" />
              <p className="text-[#9FE1CB] text-xs tracking-widest mb-2 relative">
                DISPONIBLE AHORA
              </p>
              <p className="font-serif text-[#02C39A] text-2xl relative">xlcurso</p>
            </div>
            <div className="bg-[#F0F3F4] divide-y divide-[#D0DDE3]">
              {[
                'Módulos y lecciones organizados',
                'Evaluaciones con corrección automática',
                'Seguimiento de progreso en tiempo real',
                'Acceso con RUT — sin email corporativo',
              ].map((feat) => (
                <div key={feat} className="flex items-center gap-3 px-5 py-3 text-sm text-[#3D5A6B]">
                  <span className="w-2 h-2 rounded-full bg-[#02C39A] flex-shrink-0" />
                  {feat}
                </div>
              ))}
            </div>
            <div className="bg-[#F0F3F4] px-4 pb-4 pt-1">
              <Link
                href="https://cursos.nozoma.cl"
                className="block bg-[#028090] text-white text-sm font-medium text-center py-3 rounded-lg hover:bg-[#01697a] transition-colors"
              >
                Ingresar a la plataforma →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-[#E1F5EE] border-y border-[#9FE1CB] px-6 py-6">
        <div className="max-w-5xl mx-auto grid grid-cols-3 divide-x divide-[#9FE1CB]">
          {[
            { num: '99%', label: 'reducción de tiempo en procesos' },
            { num: 'USD 19K', label: 'ahorrados al año en caso real' },
            { num: '2 min', label: 'proceso que tomaba 245 min' },
          ].map(({ num, label }) => (
            <div key={num} className="text-center px-4">
              <p className="font-serif text-[#028090] text-3xl">{num}</p>
              <p className="text-[#085041] text-xs mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="bg-[#F0F3F4] px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#028090] text-xs font-medium uppercase tracking-widest mb-2">
            Servicios
          </p>
          <h2 className="font-serif text-[#1A1A2E] text-3xl font-normal mb-2">
            Tres servicios. Un solo objetivo.
          </h2>
          <p className="text-[#3D5A6B] text-sm mb-10">
            Liberar tu tiempo para lo que realmente importa.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                num: '01',
                title: 'Automatización de procesos',
                desc: 'Flujos manuales convertidos en sistemas que corren solos. Adaptable a cualquier ERP.',
                para: 'Equipos financieros y operativos',
              },
              {
                num: '02',
                title: 'Reportería a medida',
                desc: 'Dashboards y reportes conectados a tus datos reales. Entrega única con documentación.',
                para: 'Gerencias y áreas decisionales',
              },
              {
                num: '03',
                title: 'Formación y transferencia',
                desc: 'Relatorías, charlas y cursos aplicados a tu contexto. Presencial u online.',
                para: 'Organizaciones y profesionales',
              },
            ].map(({ num, title, desc, para }) => (
              <div key={num} className="bg-white border border-[#D0DDE3] rounded-xl overflow-hidden">
                <div className="h-1 bg-[#02C39A]" />
                <div className="p-5">
                  <p className="font-serif text-[#02C39A] text-3xl mb-3">{num}</p>
                  <p className="text-[#1A1A2E] text-sm font-medium mb-2">{title}</p>
                  <p className="text-[#3D5A6B] text-xs leading-relaxed mb-3">{desc}</p>
                  <p className="text-[#028090] text-xs italic">{para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASO REAL */}
      <section className="bg-[#1A1A2E] px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#9FE1CB] text-xs font-medium uppercase tracking-widest mb-2">
            Caso real
          </p>
          <h2 className="font-serif text-white text-3xl font-normal mb-8">
            De 4 horas a 2 minutos
          </h2>

          <div className="grid grid-cols-3 gap-5 mb-8">
            {[
              { num: '99%', label: 'menos tiempo por ejecución' },
              { num: 'USD 19K', label: 'ahorrados al año' },
              { num: '0', label: 'dependencia de una persona' },
            ].map(({ num, label }) => (
              <div
                key={num}
                className="bg-[#02C39A]/10 border border-[#02C39A]/30 rounded-xl p-5 text-center"
              >
                <p className="font-serif text-[#02C39A] text-4xl">{num}</p>
                <p className="text-[#9FE1CB] text-xs mt-2 leading-snug">{label}</p>
              </div>
            ))}
          </div>

          <p className="text-[#9FE1CB] text-sm leading-relaxed text-center italic max-w-xl mx-auto">
            Un proceso crítico de tesorería: 18 pasos manuales, 9 fuentes de datos.
            <br />
            Este caso no es hipotético. Es el punto de partida de Nozoma.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#028090] px-6 py-16 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-serif text-white text-3xl font-normal mb-3">
            ¿Tienes un proceso que debería hacerse solo?
          </h2>
          <p className="text-[#E1F5EE] text-sm leading-relaxed mb-8">
            Conversemos 30 minutos. Sin compromiso.
            <br />
            Sin vender nada antes de entender tu problema.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-white text-[#028090] text-sm font-medium px-8 py-3 rounded-lg hover:bg-[#E1F5EE] transition-colors"
          >
            Agendar conversación →
          </Link>
        </div>
      </section>
    </>
  )
}
