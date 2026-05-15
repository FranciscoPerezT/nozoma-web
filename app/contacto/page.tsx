import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto — Nozoma',
  description: 'Conversemos. Cuéntanos tu problema y te orientamos sin compromiso.',
}

export default function Contacto() {
  return (
    <div className="px-6 py-16">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Columna izquierda */}
        <div>
          <p className="text-[#028090] text-xs font-medium uppercase tracking-widest mb-3">
            Contacto
          </p>
          <h1 className="font-serif text-[#1A1A2E] text-4xl font-normal mb-4">
            Conversemos
          </h1>
          <p className="text-[#3D5A6B] text-base leading-relaxed mb-8">
            Cuéntanos qué necesitas. Sin formularios complejos, sin compromiso
            previo. Una conversación de 30 minutos suele ser suficiente para
            saber si podemos ayudarte.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#E1F5EE] flex items-center justify-center text-[#028090] text-sm">
                @
              </div>
              <span className="text-[#3D5A6B] text-sm">contacto@nozoma.cl</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#E1F5EE] flex items-center justify-center text-[#028090] text-sm">
                ⌖
              </div>
              <span className="text-[#3D5A6B] text-sm">Santiago, Chile</span>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <form
          action={`mailto:contacto@nozoma.cl`}
          method="get"
          className="bg-white border border-[#D0DDE3] rounded-xl p-7 flex flex-col gap-5"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="nombre" className="text-[#3D5A6B] text-xs font-medium">
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Tu nombre"
              required
              className="border border-[#D0DDE3] rounded-lg px-4 py-2.5 text-sm text-[#1A1A2E] placeholder-[#7A9BAD] focus:outline-none focus:border-[#028090] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="empresa" className="text-[#3D5A6B] text-xs font-medium">
              Empresa u organización
            </label>
            <input
              id="empresa"
              name="empresa"
              type="text"
              placeholder="Donde trabajas (opcional)"
              className="border border-[#D0DDE3] rounded-lg px-4 py-2.5 text-sm text-[#1A1A2E] placeholder-[#7A9BAD] focus:outline-none focus:border-[#028090] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="mensaje" className="text-[#3D5A6B] text-xs font-medium">
              ¿En qué podemos ayudarte?
            </label>
            <textarea
              id="mensaje"
              name="body"
              rows={5}
              placeholder="Cuéntanos tu situación o el proceso que quieres mejorar..."
              required
              className="border border-[#D0DDE3] rounded-lg px-4 py-2.5 text-sm text-[#1A1A2E] placeholder-[#7A9BAD] focus:outline-none focus:border-[#028090] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-[#028090] text-white text-sm font-medium py-3 rounded-lg hover:bg-[#01697a] transition-colors"
          >
            Enviar mensaje →
          </button>

          <p className="text-[#7A9BAD] text-xs text-center">
            También puedes escribirnos directamente a contacto@nozoma.cl
          </p>
        </form>
      </div>
    </div>
  )
}
