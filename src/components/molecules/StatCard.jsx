import Badge from '../atoms/Badge'
import ProgressBar from '../atoms/ProgressBar'
import './StatCard.css'

/**
 * MOLÉCULA — StatCard
 * Tarjeta de métrica: ícono + cifra + etiqueta + progreso opcional.
 */
export default function StatCard({ icon, value, label, progress, progressColor = 'primary', badge }) {
  return (
    <article className="stat-card">
      {/* Borde superior con acento de color */}
      <div className={`stat-card__accent stat-card__accent--${progressColor}`} aria-hidden="true" />

      {/* Cabecera: ícono + badge de tendencia */}
      <div className="stat-card__header">
        <div className="stat-card__icon" aria-hidden="true">{icon}</div>
        {badge && (
          <div className="stat-card__badge">
            <Badge variant={badge.variant}>{badge.label}</Badge>
          </div>
        )}
      </div>

      {/* Cifra principal + etiqueta */}
      <div className="stat-card__body">
        <span className="stat-card__value">{value}</span>
        <span className="stat-card__label">{label}</span>
      </div>

      {/* Barra de progreso de fondo integrada */}
      {progress !== undefined && (
        <div className="stat-card__footer">
          <div className="stat-card__progress-header">
            <span className="stat-card__progress-label">Progreso</span>
            <span className="stat-card__progress-value">{progress}%</span>
          </div>
          <ProgressBar value={progress} color={progressColor} showLabel={false} />
        </div>
      )}
    </article>
  )
}
