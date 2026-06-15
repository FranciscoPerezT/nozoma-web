import NozomaScripts from '@/components/NozomaScripts'

const MESH_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice"><g><line x1="211.0" y1="942.9" x2="267.0" y2="936.7" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="267.0" y1="936.7" x2="536.2" y2="973.1" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="171.1" y1="729.1" x2="220.4" y2="589.3" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="220.4" y1="589.3" x2="378.5" y2="552.0" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="378.5" y1="552.0" x2="171.1" y2="729.1" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="171.1" y1="729.1" x2="267.0" y2="936.7" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="211.0" y1="942.9" x2="171.1" y2="729.1" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="914.5" y1="458.9" x2="957.2" y2="336.6" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="957.2" y1="336.6" x2="997.5" y2="509.5" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="997.5" y1="509.5" x2="914.5" y2="458.9" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="378.5" y1="552.0" x2="556.9" y2="684.6" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="90.9" y1="47.1" x2="92.7" y2="96.7" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="92.7" y1="96.7" x2="26.5" y2="198.8" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="26.5" y1="198.8" x2="90.9" y2="47.1" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="536.2" y1="973.1" x2="584.6" y2="897.8" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="584.6" y1="897.8" x2="556.9" y2="684.6" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="556.9" y1="684.6" x2="736.5" y2="676.7" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="736.5" y1="676.7" x2="584.6" y2="897.8" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="842.9" y1="776.0" x2="805.8" y2="698.1" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="805.8" y1="698.1" x2="989.5" y2="640.0" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="989.5" y1="640.0" x2="842.9" y2="776.0" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="805.8" y1="698.1" x2="847.5" y2="603.7" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="847.5" y1="603.7" x2="989.5" y2="640.0" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="229.0" y1="32.1" x2="421.9" y2="29.8" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="421.9" y1="29.8" x2="340.3" y2="155.5" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="340.3" y1="155.5" x2="229.0" y2="32.1" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="229.0" y1="32.1" x2="92.7" y2="96.7" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="90.9" y1="47.1" x2="229.0" y2="32.1" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="220.4" y1="589.3" x2="218.6" y2="505.4" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="218.6" y1="505.4" x2="378.5" y2="552.0" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="876.4" y1="314.7" x2="957.2" y2="336.6" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="914.5" y1="458.9" x2="876.4" y2="314.7" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="876.4" y1="314.7" x2="892.2" y2="86.9" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="892.2" y1="86.9" x2="957.2" y2="336.6" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="315.5" y1="267.7" x2="561.4" y2="262.7" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="218.6" y1="505.4" x2="315.5" y2="267.7" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="218.6" y1="505.4" x2="227.9" y2="289.4" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="227.9" y1="289.4" x2="315.5" y2="267.7" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="892.2" y1="86.9" x2="704.6" y2="45.8" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="704.6" y1="45.8" x2="809.4" y2="6.5" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="809.4" y1="6.5" x2="892.2" y2="86.9" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="649.9" y1="544.9" x2="556.9" y2="684.6" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="378.5" y1="552.0" x2="649.9" y2="544.9" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="805.8" y1="698.1" x2="807.1" y2="729.7" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="807.1" y1="729.7" x2="736.5" y2="676.7" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="736.5" y1="676.7" x2="805.8" y2="698.1" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="842.9" y1="776.0" x2="807.1" y2="729.7" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="807.1" y1="729.7" x2="584.6" y2="897.8" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="218.6" y1="505.4" x2="163.4" y2="379.5" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="163.4" y1="379.5" x2="227.9" y2="289.4" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="163.4" y1="379.5" x2="220.4" y2="589.3" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="275.0" y1="223.2" x2="229.0" y2="32.1" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="340.3" y1="155.5" x2="275.0" y2="223.2" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="275.0" y1="223.2" x2="92.7" y2="96.7" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="315.5" y1="267.7" x2="399.4" y2="219.3" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="399.4" y1="219.3" x2="561.4" y2="262.7" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="421.9" y1="29.8" x2="399.4" y2="219.3" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="399.4" y1="219.3" x2="340.3" y2="155.5" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="421.9" y1="29.8" x2="561.4" y2="262.7" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="639.4" y1="25.0" x2="421.9" y2="29.8" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="809.4" y1="6.5" x2="639.4" y2="25.0" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="704.6" y1="45.8" x2="639.4" y2="25.0" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="639.4" y1="25.0" x2="561.4" y2="262.7" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="704.6" y1="45.8" x2="561.4" y2="262.7" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="556.9" y1="684.6" x2="648.0" y2="609.1" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="648.0" y1="609.1" x2="736.5" y2="676.7" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="649.9" y1="544.9" x2="648.0" y2="609.1" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="829.4" y1="618.5" x2="805.8" y2="698.1" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="736.5" y1="676.7" x2="829.4" y2="618.5" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="829.4" y1="618.5" x2="847.5" y2="603.7" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="648.0" y1="609.1" x2="829.4" y2="618.5" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="649.9" y1="544.9" x2="829.4" y2="618.5" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="861.7" y1="577.4" x2="914.5" y2="458.9" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="997.5" y1="509.5" x2="861.7" y2="577.4" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="829.4" y1="618.5" x2="861.7" y2="577.4" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="861.7" y1="577.4" x2="847.5" y2="603.7" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="649.9" y1="544.9" x2="861.7" y2="577.4" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="989.5" y1="640.0" x2="861.7" y2="577.4" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="997.5" y1="509.5" x2="989.5" y2="640.0" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="655.4" y1="395.6" x2="876.4" y2="314.7" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="914.5" y1="458.9" x2="655.4" y2="395.6" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="861.7" y1="577.4" x2="655.4" y2="395.6" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="649.9" y1="544.9" x2="655.4" y2="395.6" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="163.4" y1="379.5" x2="101.0" y2="278.0" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="101.0" y1="278.0" x2="227.9" y2="289.4" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="26.5" y1="198.8" x2="101.0" y2="278.0" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="264.9" y1="246.6" x2="315.5" y2="267.7" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="227.9" y1="289.4" x2="264.9" y2="246.6" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="264.9" y1="246.6" x2="275.0" y2="223.2" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="275.0" y1="223.2" x2="315.5" y2="267.7" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="399.4" y1="219.3" x2="370.2" y2="209.5" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="370.2" y1="209.5" x2="340.3" y2="155.5" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="315.5" y1="267.7" x2="370.2" y2="209.5" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="370.2" y1="209.5" x2="275.0" y2="223.2" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="655.4" y1="395.6" x2="635.7" y2="364.8" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="635.7" y1="364.8" x2="876.4" y2="314.7" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="635.7" y1="364.8" x2="561.4" y2="262.7" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="635.7" y1="364.8" x2="649.9" y2="544.9" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="264.9" y1="246.6" x2="79.8" y2="232.8" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="79.8" y1="232.8" x2="275.0" y2="223.2" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="79.8" y1="232.8" x2="92.7" y2="96.7" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="101.0" y1="278.0" x2="79.8" y2="232.8" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="79.8" y1="232.8" x2="227.9" y2="289.4" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/><line x1="79.8" y1="232.8" x2="26.5" y2="198.8" stroke="#ffffff" stroke-opacity="0.35" stroke-width="1.5"/></g><g><circle cx="639.4" cy="25.0" r="5" fill="#ffffff" fill-opacity="0.9"/><circle cx="275.0" cy="223.2" r="6" fill="#ffffff" fill-opacity="0.9"/><circle cx="736.5" cy="676.7" r="6" fill="#ffffff" fill-opacity="0.9"/><circle cx="892.2" cy="86.9" r="10" fill="#ffffff" fill-opacity="0.9"/><circle cx="421.9" cy="29.8" r="5" fill="#ffffff" fill-opacity="0.9"/><circle cx="218.6" cy="505.4" r="10" fill="#ffffff" fill-opacity="0.9"/><circle cx="26.5" cy="198.8" r="10" fill="#ffffff" fill-opacity="0.9"/><circle cx="649.9" cy="544.9" r="11" fill="#ffffff" fill-opacity="0.9"/><circle cx="220.4" cy="589.3" r="8" fill="#ffffff" fill-opacity="0.9"/><circle cx="809.4" cy="6.5" r="5" fill="#ffffff" fill-opacity="0.9"/><circle cx="805.8" cy="698.1" r="5" fill="#ffffff" fill-opacity="0.9"/><circle cx="340.3" cy="155.5" r="8" fill="#ffffff" fill-opacity="0.9"/><circle cx="957.2" cy="336.6" r="9" fill="#ffffff" fill-opacity="0.9"/><circle cx="92.7" cy="96.7" r="5" fill="#ffffff" fill-opacity="0.9"/><circle cx="847.5" cy="603.7" r="8" fill="#ffffff" fill-opacity="0.9"/><circle cx="807.1" cy="729.7" r="10" fill="#ffffff" fill-opacity="0.9"/><circle cx="536.2" cy="973.1" r="6" fill="#ffffff" fill-opacity="0.9"/><circle cx="378.5" cy="552.0" r="11" fill="#ffffff" fill-opacity="0.9"/><circle cx="829.4" cy="618.5" r="5" fill="#ffffff" fill-opacity="0.9"/><circle cx="861.7" cy="577.4" r="8" fill="#ffffff" fill-opacity="0.9"/><circle cx="704.6" cy="45.8" r="6" fill="#ffffff" fill-opacity="0.9"/><circle cx="227.9" cy="289.4" r="5" fill="#ffffff" fill-opacity="0.9"/><circle cx="79.8" cy="232.8" r="8" fill="#ffffff" fill-opacity="0.9"/><circle cx="101.0" cy="278.0" r="7" fill="#ffffff" fill-opacity="0.9"/><circle cx="635.7" cy="364.8" r="6" fill="#ffffff" fill-opacity="0.9"/><circle cx="370.2" cy="209.5" r="9" fill="#ffffff" fill-opacity="0.9"/><circle cx="267.0" cy="936.7" r="6" fill="#ffffff" fill-opacity="0.9"/><circle cx="648.0" cy="609.1" r="5" fill="#ffffff" fill-opacity="0.9"/><circle cx="171.1" cy="729.1" r="9" fill="#ffffff" fill-opacity="0.9"/><circle cx="163.4" cy="379.5" r="11" fill="#ffffff" fill-opacity="0.9"/><circle cx="989.5" cy="640.0" r="5" fill="#ffffff" fill-opacity="0.9"/><circle cx="556.9" cy="684.6" r="5" fill="#ffffff" fill-opacity="0.9"/><circle cx="842.9" cy="776.0" r="9" fill="#ffffff" fill-opacity="0.9"/><circle cx="229.0" cy="32.1" r="8" fill="#ffffff" fill-opacity="0.9"/><circle cx="315.5" cy="267.7" r="7" fill="#ffffff" fill-opacity="0.9"/><circle cx="211.0" cy="942.9" r="5" fill="#ffffff" fill-opacity="0.9"/><circle cx="876.4" cy="314.7" r="7" fill="#ffffff" fill-opacity="0.9"/><circle cx="655.4" cy="395.6" r="5" fill="#ffffff" fill-opacity="0.9"/><circle cx="914.5" cy="458.9" r="5" fill="#ffffff" fill-opacity="0.9"/><circle cx="264.9" cy="246.6" r="11" fill="#ffffff" fill-opacity="0.9"/><circle cx="561.4" cy="262.7" r="5" fill="#ffffff" fill-opacity="0.9"/><circle cx="584.6" cy="897.8" r="6" fill="#ffffff" fill-opacity="0.9"/><circle cx="399.4" cy="219.3" r="6" fill="#ffffff" fill-opacity="0.9"/><circle cx="997.5" cy="509.5" r="11" fill="#ffffff" fill-opacity="0.9"/><circle cx="90.9" cy="47.1" r="6" fill="#ffffff" fill-opacity="0.9"/></g><g><polygon points="273.3,906.2 231.6,862.7 290.2,848.4" fill="none" stroke="#ffffff" stroke-opacity="0.28" stroke-width="1.5"/><polygon points="529.1,755.0 522.7,708.6 566.1,726.3" fill="none" stroke="#ffffff" stroke-opacity="0.28" stroke-width="1.5"/><polygon points="960.0,646.0 1016.1,621.4 1009.3,682.2" fill="none" stroke="#ffffff" stroke-opacity="0.28" stroke-width="1.5"/><polygon points="93.9,207.9 149.1,209.7 120.0,256.5" fill="none" stroke="#ffffff" stroke-opacity="0.28" stroke-width="1.5"/><polygon points="214.8,203.7 252.0,215.2 223.5,241.7" fill="none" stroke="#ffffff" stroke-opacity="0.28" stroke-width="1.5"/><polygon points="274.1,927.0 187.7,933.8 225.0,855.5" fill="none" stroke="#ffffff" stroke-opacity="0.28" stroke-width="1.5"/><polygon points="256.5,689.3 211.1,674.9 246.3,642.8" fill="none" stroke="#ffffff" stroke-opacity="0.28" stroke-width="1.5"/><polygon points="943.4,535.4 962.5,595.7 900.7,582.1" fill="none" stroke="#ffffff" stroke-opacity="0.28" stroke-width="1.5"/></g><g><circle cx="807.5" cy="190.4" r="2" fill="#B496DC" fill-opacity="0.55"/><circle cx="659.0" cy="354.3" r="3" fill="#B496DC" fill-opacity="0.55"/><circle cx="467.0" cy="729.1" r="4" fill="#B496DC" fill-opacity="0.55"/><circle cx="653.5" cy="646.2" r="2" fill="#B496DC" fill-opacity="0.55"/><circle cx="402.6" cy="339.3" r="2" fill="#B496DC" fill-opacity="0.55"/><circle cx="248.7" cy="190.2" r="3" fill="#B496DC" fill-opacity="0.55"/><circle cx="140.2" cy="183.5" r="3" fill="#B496DC" fill-opacity="0.55"/><circle cx="249.8" cy="923.3" r="3" fill="#B496DC" fill-opacity="0.55"/><circle cx="808.0" cy="856.0" r="2" fill="#B496DC" fill-opacity="0.55"/><circle cx="50.6" cy="999.3" r="2" fill="#B496DC" fill-opacity="0.55"/><circle cx="969.0" cy="926.4" r="2" fill="#B496DC" fill-opacity="0.55"/><circle cx="166.3" cy="485.6" r="2" fill="#B496DC" fill-opacity="0.55"/><circle cx="864.7" cy="902.4" r="2" fill="#B496DC" fill-opacity="0.55"/><circle cx="379.0" cy="985.3" r="3" fill="#B496DC" fill-opacity="0.55"/><circle cx="926.5" cy="785.1" r="3" fill="#B496DC" fill-opacity="0.55"/></g></svg>`

export default function Home() {
  return (
    <>
      {/* ═══ NAV ══════════════════════════════════════════════ */}
      <nav id="nav">
        <a href="#inicio" className="nav-logo" aria-label="Nozoma — inicio">
          <img src="/logo.png" alt="Nozoma" />
        </a>
        <ul className="nav-links" role="list">
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#equipo">Equipo</a></li>
          <li><a href="#cursos">Cursos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <a href="https://cursos.nozoma.cl" className="btn-nav-cta">Ingresar a cursos →</a>
        <button className="nav-hamburger" id="hamburger" aria-label="Abrir menú" aria-expanded="false">
          <span /><span /><span />
        </button>
      </nav>
      <div className="nav-drawer" id="drawer" role="dialog" aria-label="Menú de navegación">
        <a href="#servicios">Servicios</a>
        <a href="#equipo">Equipo</a>
        <a href="#cursos">Cursos</a>
        <a href="#contacto">Contacto</a>
        <a href="https://cursos.nozoma.cl" className="drawer-cta">Ingresar a cursos →</a>
      </div>

      {/* ═══ HERO ══════════════════════════════════════════════ */}
      <section className="hero" id="inicio" aria-label="Inicio">
        <canvas id="hero-canvas" aria-hidden="true" />
        <div className="hero-mesh-overlay" aria-hidden="true" dangerouslySetInnerHTML={{ __html: MESH_SVG }} />
        <div className="hero-inner">
          <h1 className="hero-seo-h1">Automatización de procesos y reportería a medida — Santiago, Chile</h1>
          <div className="hero-tag">
            <span className="hero-tag-dot" />
            Nuevo · Plataforma de cursos online
          </div>
          <p className="hero-display">
            Procesos que<br />
            se hacen <span className="hl-proceso">solos.</span><br />
            Decisiones que<br />
            se toman <span className="hl-conexion">rápido.</span>
          </p>
          <p className="hero-sub">
            Convertimos flujos manuales en sistemas automáticos.<br />
            <span className="bright">— Sin cambiar tu ERP. Sin teoría vacía. —</span>
          </p>

          {/* pills desktop */}
          <div className="hero-pills-wrap">
            <div className="hero-pills-label">Trabajamos con</div>
            <div className="hero-pills">
              <span className="pill">Tesorería<span className="pill-tip">Gestión de flujos de caja, pagos y cobranzas. Automatizamos los procesos de conciliación y reportes que consumen horas diarias en equipos financieros.</span></span>
              <span className="pill">Finanzas<span className="pill-tip">Análisis financiero, presupuestos y proyecciones. Conectamos tus datos en dashboards que se actualizan solos, sin exportaciones manuales.</span></span>
              <span className="pill">Operaciones<span className="pill-tip">Procesos logísticos, inventario y coordinación de equipos. Convertimos flujos manuales repetitivos en sistemas automáticos.</span></span>
              <span className="pill">ERP<span className="pill-tip">Sistemas como SAP, Oracle o Dynamics. Nos integramos a tu plataforma actual sin necesidad de reemplazarla.</span></span>
              <span className="pill">Power BI<span className="pill-tip">Herramienta de visualización de Microsoft. Construimos reportes interactivos conectados directamente a tus fuentes de datos.</span></span>
            </div>
          </div>

          {/* slider servicios mobile */}
          <div className="hero-service-slider" id="serviceSlider" aria-label="Servicios de Nozoma">
            <div className="hero-service-slide active" role="group" aria-label="Servicio 1 de 5">
              <div className="slide-title">Tesorería</div>
              <p className="slide-desc">Gestión de flujos de caja, pagos y cobranzas. Automatizamos la conciliación y reportes que consumen horas diarias.</p>
            </div>
            <div className="hero-service-slide" role="group" aria-label="Servicio 2 de 5">
              <div className="slide-title">Finanzas</div>
              <p className="slide-desc">Análisis financiero, presupuestos y proyecciones. Dashboards que se actualizan solos, sin exportaciones manuales.</p>
            </div>
            <div className="hero-service-slide" role="group" aria-label="Servicio 3 de 5">
              <div className="slide-title">Operaciones</div>
              <p className="slide-desc">Procesos logísticos, inventario y coordinación. Flujos manuales repetitivos convertidos en sistemas automáticos.</p>
            </div>
            <div className="hero-service-slide" role="group" aria-label="Servicio 4 de 5">
              <div className="slide-title">ERP</div>
              <p className="slide-desc">SAP, Oracle o Dynamics. Nos integramos a tu plataforma actual sin reemplazarla ni cambiar tu forma de trabajar.</p>
            </div>
            <div className="hero-service-slide" role="group" aria-label="Servicio 5 de 5">
              <div className="slide-title">Power BI</div>
              <p className="slide-desc">Reportes interactivos y dashboards personalizados conectados directamente a tus fuentes de datos.</p>
            </div>
            <div className="slide-dots" role="tablist" aria-label="Navegar servicios">
              <button className="slide-dot active" aria-label="Tesorería" role="tab" />
              <button className="slide-dot" aria-label="Finanzas" role="tab" />
              <button className="slide-dot" aria-label="Operaciones" role="tab" />
              <button className="slide-dot" aria-label="ERP" role="tab" />
              <button className="slide-dot" aria-label="Power BI" role="tab" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICIOS ═════════════════════════════════════════ */}
      <section className="section" id="servicios">
        <div className="section-inner">
          <p className="section-label reveal">Servicios</p>
          <h2 className="section-title reveal" style={{ transitionDelay: '.05s' }}>Lo que <span className="hl">hacemos</span></h2>
          <p className="section-sub reveal" style={{ transitionDelay: '.1s' }}>Tres servicios construidos sobre un principio: liberar tu tiempo para lo que realmente importa.</p>
          <div className="services-grid">

            <a href="#contacto" className="service-card reveal" style={{ transitionDelay: '.1s' }}>
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="url(#g1)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#FF7C58" />
                      <stop offset="100%" stopColor="#E3687D" />
                    </linearGradient>
                  </defs>
                  <path d="M5 12h14" /><path d="M15 7l5 5-5 5" />
                  <path d="M3 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6z" />
                  <path d="M3 16a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2z" />
                </svg>
              </div>
              <div className="service-name">Automatización de procesos</div>
              <p className="service-desc">Flujos manuales convertidos en sistemas que corren solos. Adaptable a cualquier ERP, sin necesidad de cambiar tu stack.</p>
              <div className="service-for">Equipos financieros y operativos</div>
            </a>

            <a href="#contacto" className="service-card reveal" style={{ transitionDelay: '.18s' }}>
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="url(#g2)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <defs>
                    <linearGradient id="g2" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#FF7C58" />
                      <stop offset="100%" stopColor="#E3687D" />
                    </linearGradient>
                  </defs>
                  <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" /><path d="M14 17h7M17 14v7" />
                </svg>
              </div>
              <div className="service-name">Reportería a medida</div>
              <p className="service-desc">Dashboards conectados a tus datos reales. No plantillas genéricas — soluciones construidas sobre tu lógica de negocio.</p>
              <div className="service-for">Gerencias y áreas decisionales</div>
            </a>

            <a href="#contacto" className="service-card reveal" style={{ transitionDelay: '.26s' }}>
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="url(#g3)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <defs>
                    <linearGradient id="g3" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#FF7C58" />
                      <stop offset="100%" stopColor="#E3687D" />
                    </linearGradient>
                  </defs>
                  <path d="M12 3L2 8l10 5 10-5-10-5z" /><path d="M2 13l10 5 10-5" /><path d="M2 18l10 5 10-5" />
                </svg>
              </div>
              <div className="service-name">Formación y transferencia</div>
              <p className="service-desc">Relatorías, talleres y cursos aplicados a tu contexto. Cada contenido parte de casos reales.</p>
              <div className="service-for">Organizaciones y profesionales</div>
            </a>

          </div>
        </div>
      </section>

      {/* ═══ CASO REAL ═════════════════════════════════════════ */}
      <section className="section section-alt" id="caso">
        <div className="section-inner">
          <div className="caso-grid">
            <div>
              <p className="section-label reveal">Caso real</p>
              <h2 className="section-title reveal" style={{ transitionDelay: '.05s' }}>
                De 4 horas a<br className="br-desktop" /> solo <span className="hl">2 minutos</span>
              </h2>
              <div className="caso-text reveal" style={{ transitionDelay: '.1s' }}>
                <p>Un proceso crítico de tesorería: 18 pasos manuales, 9 fuentes de datos, una persona que no podía salir de vacaciones.</p>
                <p>Este caso no es hipotético. Es el punto de partida de Nozoma.</p>
              </div>
            </div>
            <div className="caso-metrics reveal" style={{ transitionDelay: '.15s' }}>
              <div className="caso-metric caso-metric-highlight">
                <div className="caso-metric-num" data-target="2" data-suffix=" min">0 min</div>
                <div className="caso-metric-label">El mismo proceso que antes consumía 245 minutos.</div>
              </div>
              <div className="caso-metric">
                <div className="caso-metric-num" data-target="99" data-suffix="%">0%</div>
                <div className="caso-metric-label">Menos tiempo por ejecución</div>
              </div>
              <div className="caso-metric" style={{ gridColumn: '1 / -1' }}>
                <div className="caso-metric-num" data-prefix="USD " data-target="19" data-suffix="K">USD 0K</div>
                <div className="caso-metric-label">Ahorrados al año en caso real</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ EQUIPO ════════════════════════════════════════════ */}
      <section className="section" id="equipo">
        <div className="section-inner">
          <p className="section-label reveal">Equipo</p>
          <h2 className="section-title reveal" style={{ transitionDelay: '.05s' }}>Las personas detrás de <span className="hl-cool">Nozoma</span></h2>
          <p className="section-sub reveal" style={{ transitionDelay: '.1s' }}>Cercanía y experiencia técnica en el mismo lugar.</p>
          <div className="team-grid">

            <div className="team-card reveal" style={{ transitionDelay: '.1s' }}>
              <div className="team-header">
                <div className="team-avatar" style={{ background: 'linear-gradient(135deg, var(--profundidad), var(--sistema))' }}>F</div>
                <div className="team-meta">
                  <div className="team-name">Francisco Pérez</div>
                  <div className="team-role">Cofundador · Desarrollo</div>
                </div>
              </div>
              <p className="team-work">Programador a cargo del desarrollo técnico. Construye e implementa los sistemas que hacen que los procesos de Nozoma corran solos, de forma estable.</p>
              <a className="team-email" href="mailto:fperez@nozoma.cl">fperez@nozoma.cl</a>
            </div>

            <div className="team-card reveal" style={{ transitionDelay: '.18s' }}>
              <div className="team-header">
                <div className="team-avatar" style={{ background: 'linear-gradient(135deg, var(--sistema), #9B7FD0)' }}>S</div>
                <div className="team-meta">
                  <div className="team-name">Sergio Pérez</div>
                  <div className="team-role">Cofundador · Automatización</div>
                </div>
              </div>
              <p className="team-work">Especialista en automatización de procesos financieros y operativos. Convierte flujos manuales complejos en sistemas eficientes, escalables y confiables.</p>
              <a className="team-email" href="mailto:sperez@nozoma.cl">sperez@nozoma.cl</a>
            </div>

            <div className="team-card reveal" style={{ transitionDelay: '.26s' }}>
              <div className="team-header">
                <div className="team-avatar" style={{ background: 'linear-gradient(135deg, #9B7FD0, var(--conexion))' }}>N</div>
                <div className="team-meta">
                  <div className="team-name">Nicole Briones</div>
                  <div className="team-role">Colaboradora · Estrategia</div>
                </div>
              </div>
              <p className="team-work">Lidera la relación con clientes y la estrategia comercial. Traduce las necesidades reales de cada organización en soluciones concretas y aplicables.</p>
              <a className="team-email" href="mailto:nbriones@nozoma.cl">nbriones@nozoma.cl</a>
            </div>

            <div className="team-card reveal" style={{ transitionDelay: '.34s' }}>
              <div className="team-header">
                <div className="team-avatar" style={{ background: 'linear-gradient(135deg, var(--conexion), var(--proceso))' }}>F</div>
                <div className="team-meta">
                  <div className="team-name">Francisco Ponce</div>
                  <div className="team-role">Colaborador · Diseño</div>
                </div>
              </div>
              <p className="team-work">Diseñador a cargo de la identidad visual y la experiencia de usuario. Construye la comunicación gráfica que conecta a Nozoma con cada persona.</p>
              <a className="team-email" href="mailto:fponce@nozoma.cl">fponce@nozoma.cl</a>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ CURSOS ════════════════════════════════════════════ */}
      <section className="cursos-section" id="cursos">
        <canvas id="cursos-canvas" aria-hidden="true" />
        <div className="cursos-inner">
          <p className="section-label reveal">Plataforma educativa</p>
          <h2 className="section-title reveal" style={{ transitionDelay: '.05s' }}>Aprende a tu ritmo<br className="br-desktop" /> con <span className="hl">xlcurso</span></h2>
          <p className="section-sub reveal" style={{ transitionDelay: '.1s' }}>Formación aplicada a tu trabajo real. Sin fricciones — accedes con tu RUT y sigues desde donde lo dejaste.</p>
          <div className="reveal" style={{ transitionDelay: '.15s' }}>
            <div className="cursos-glass">
              <div>
                <div className="cursos-eyebrow">Disponible ahora · xlcurso</div>
                <div className="cursos-title">Tu próxima clase<br />ya está lista</div>
                <p className="cursos-sub">Sigue aprendiendo con contenido diseñado para contextos reales. Con seguimiento de progreso y soporte directo.</p>
              </div>
              <a href="https://cursos.nozoma.cl" className="btn-cursos">Acceder a la plataforma →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONTACTO ══════════════════════════════════════════ */}
      <section className="section" id="contacto">
        <div className="section-inner">
          <p className="section-label reveal">Contacto</p>
          <div className="contact-grid reveal" style={{ transitionDelay: '.1s' }}>
            <div className="contact-info">
              <h2 className="section-title">¿Tienes un proceso que<br className="br-desktop" /> debería <span className="hl">hacerse solo?</span></h2>
              <p>Conversemos 30 minutos. Sin compromiso. Sin vender nada antes de entender tu problema.</p>
              <p>Cuéntanos qué está ocupando tu tiempo hoy y encontramos juntos si hay una solución.</p>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <label className="form-label" htmlFor="nombre">Nombre</label>
                <input className="form-input" type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="correo">Correo electrónico</label>
                <input className="form-input" type="email" id="correo" name="correo" placeholder="tu@empresa.cl" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="mensaje">Mensaje</label>
                <textarea className="form-textarea" id="mensaje" name="mensaje" placeholder="Cuéntanos sobre el proceso que quieres mejorar..." required />
              </div>
              <button type="submit" className="btn-submit">Enviar mensaje →</button>
            </form>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ════════════════════════════════════════════ */}
      <footer>
        <div className="footer-mesh-bg" aria-hidden="true" dangerouslySetInnerHTML={{ __html: MESH_SVG }} />
        <div className="footer-inner">
          <div>
            <div className="footer-brand-name"><img src="/logo.png" alt="Nozoma" /></div>
            <p className="footer-tagline">Tecnología al servicio de las decisiones que importan. Santiago, Chile.</p>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Contacto</div>
            <a href="mailto:contacto@nozoma.cl">contacto@nozoma.cl</a>
            <a href="https://cursos.nozoma.cl">Plataforma xlcurso</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Legal</div>
            <a href="#">Política de privacidad</a>
            <a href="#">Términos de uso</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Nozoma · Santiago, Chile</p>
          <p>Hecho con precisión</p>
        </div>
      </footer>

      <NozomaScripts />
    </>
  )
}
