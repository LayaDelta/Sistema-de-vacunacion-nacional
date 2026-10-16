import HeroSection from '../organisms/HeroSection'
import StatsSection from '../organisms/StatsSection'
import './HomeTemplate.css'

/**
 * TEMPLATE — HomeTemplate
 * Define la estructura y distribución de la página de inicio.
 * No contiene datos propios; recibe todo por props.
 * Compone: HeroSection (organismo), StatsSection (organismo)
 */
export default function HomeTemplate({ heroProps, statsProps }) {
  return (
    <div className="home-template">
      {/* ── Navbar ── */}
      <header className="home-template__nav" role="banner">
        <div className="nav__brand">
          <svg className="nav__logo" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect width="32" height="32" rx="8" fill="url(#logoGrad)" />
            <path d="M16 7v8M12 11h8M9 20l3-4h8l3 4" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0ea5e9"/><stop offset="1" stopColor="#6366f1"/>
              </linearGradient>
            </defs>
          </svg>
          <span className="nav__name">VacunaRD</span>
        </div>

        <nav className="nav__links" aria-label="Navegación principal">
          <a href="#inicio" className="nav__link">Inicio</a>
          <a href="#centros" className="nav__link">Centros</a>
          <a href="#cartilla" className="nav__link">Mi Cartilla</a>
          <a href="#estadisticas" className="nav__link">Estadísticas</a>
        </nav>

        <div className="nav__actions">
          <a href="#login" className="nav__login">Iniciar sesión</a>
        </div>
      </header>

      {/* ── Hero ── */}
      <main id="inicio">
        <HeroSection {...heroProps} />

        {/* Separador visual */}
        <div className="home-template__divider" aria-hidden="true">
          <div className="home-template__divider-line" />
          <span className="home-template__divider-text">Cobertura nacional</span>
          <div className="home-template__divider-line" />
        </div>

        {/* ── Stats ── */}
        <div id="estadisticas">
          <StatsSection {...statsProps} />
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="home-template__footer" role="contentinfo">
        <p>© 2026 Sistema Nacional de Vacunación · Ministerio de Salud Pública</p>
      </footer>
    </div>
  )
}
