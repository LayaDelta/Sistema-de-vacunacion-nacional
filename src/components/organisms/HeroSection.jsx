import Badge from '../atoms/Badge'
import Button from '../atoms/Button'
import './HeroSection.css'

/**
 * ORGANISMO — HeroSection
 * Sección principal de bienvenida de la página de inicio.
 * Compone: Button (átomo), Badge (átomo)
 */
export default function HeroSection({ onRegister, onConsult }) {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      {/* Fondo decorativo */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__grid" />
      </div>

      <div className="hero__content">
        {/* Pill superior integrado */}
        <div className="hero__eyebrow">
          <Badge variant="info">Sistema Nacional de Vacunación</Badge>
          <span className="hero__eyebrow-sep" aria-hidden="true" />
          <span className="hero__live">
            <span className="hero__live-dot" aria-hidden="true" />
            En línea
          </span>
        </div>

        {/* Titular */}
        <h1 id="hero-heading" className="hero__title">
          Protege tu salud,
          <br />
          <span className="hero__title-gradient">protege tu nación</span>
        </h1>

        {/* Descripción */}
        <p className="hero__description">
          Accede al registro, seguimiento y gestión centralizada de vacunas
          para toda la población. Rápido, seguro y disponible las 24 horas.
        </p>

        {/* Acciones */}
        <div className="hero__actions">
          <Button variant="primary" size="lg" icon="💉" onClick={onRegister}>
            Registrar vacunación
          </Button>
          <Button variant="outline" size="lg" icon="🔍" onClick={onConsult}>
            Consultar cartilla
          </Button>
        </div>

        {/* Indicadores rápidos */}
        <div className="hero__indicators">
          <div className="hero__indicator">
            <span className="hero__indicator-value">+42M</span>
            <span className="hero__indicator-label">Dosis aplicadas</span>
          </div>
          <div className="hero__indicator-divider" aria-hidden="true" />
          <div className="hero__indicator">
            <span className="hero__indicator-value">98%</span>
            <span className="hero__indicator-label">Disponibilidad</span>
          </div>
          <div className="hero__indicator-divider" aria-hidden="true" />
          <div className="hero__indicator">
            <span className="hero__indicator-value">3,240</span>
            <span className="hero__indicator-label">Centros activos</span>
          </div>
        </div>
      </div>

      {/* Decoración visual derecha */}
      <div className="hero__visual" aria-hidden="true">
        <div className="hero__card-float hero__card-float--1">
          <span className="hero__card-icon">✅</span>
          <div>
            <p className="hero__card-title">María R. — Vacunada</p>
            <p className="hero__card-sub">COVID-19 · Dosis 3</p>
          </div>
        </div>
        <div className="hero__shield">
          <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 5L10 25v45c0 31.7 21.4 61.4 50 70.5C89.6 131.4 110 101.7 110 70V25L60 5z"
              fill="url(#shieldGrad)" stroke="rgba(14,165,233,.4)" strokeWidth="1.5" />
            <path d="M44 70l12 12 24-24" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="shieldGrad" x1="10" y1="5" x2="110" y2="140" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0ea5e9" stopOpacity=".3" />
                <stop offset="1" stopColor="#6366f1" stopOpacity=".15" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="hero__card-float hero__card-float--2">
          <span className="hero__card-icon">📅</span>
          <div>
            <p className="hero__card-title">Próximo turno</p>
            <p className="hero__card-sub">Influenza · Nov 20</p>
          </div>
        </div>
      </div>
    </section>
  )
}
