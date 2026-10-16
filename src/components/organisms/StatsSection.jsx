import StatCard from '../molecules/StatCard'
import VaccineTag from '../molecules/VaccineTag'
import './StatsSection.css'

/**
 * ORGANISMO — StatsSection
 * Sección de estadísticas nacionales + lista de vacunas disponibles.
 * Compone: StatCard (molécula), VaccineTag (molécula)
 */
export default function StatsSection({ stats, vaccines }) {
  return (
    <section className="stats-section" aria-labelledby="stats-heading">
      <div className="stats-section__header">
        <span className="stats-section__eyebrow">Cobertura Nacional 2026</span>
        <h2 id="stats-heading" className="stats-section__title">
          Impacto en números reales
        </h2>
        <p className="stats-section__subtitle">
          Datos actualizados en tiempo real desde el sistema integrado de salud.
        </p>
      </div>

      {/* Grid de métricas */}
      <div className="stats-section__grid">
        {stats.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </div>

      {/* Lista de vacunas */}
      <div className="stats-section__vaccines">
        <h3 className="stats-section__vaccines-title">Vacunas disponibles</h3>
        <div className="stats-section__vaccines-list">
          {vaccines.map((v) => (
            <VaccineTag key={v.name} {...v} />
          ))}
        </div>
      </div>
    </section>
  )
}
