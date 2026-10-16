import Badge from '../atoms/Badge'
import './VaccineTag.css'

/**
 * MOLÉCULA — VaccineTag
 * Etiqueta de vacuna con nombre, dosis y badge de disponibilidad.
 */
export default function VaccineTag({ name, doses, status = 'success' }) {
  const statusLabels = {
    success: 'Disponible',
    warning: 'Stock bajo',
    danger:  'Agotado',
    neutral: 'En revisión',
  }

  return (
    <div className="vaccine-tag">
      {/* Ícono de jeringa en chip */}
      <div className="vaccine-tag__icon-wrap" aria-hidden="true">
        <svg className="vaccine-tag__icon" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 17l-1.5 1.5M14 3l7 7-1.5 1.5L13 5 14 3z" />
          <path d="M10.5 6.5L7 10l5 5 3.5-3.5" />
          <path d="M3 21l4.5-4.5" />
          <path d="M9.5 8.5l-4 4" />
        </svg>
      </div>

      {/* Nombre + dosis */}
      <div className="vaccine-tag__info">
        <span className="vaccine-tag__name">{name}</span>
        <span className="vaccine-tag__doses">{doses} {doses === 1 ? 'dosis' : 'dosis'} requerida{doses !== 1 ? 's' : ''}</span>
      </div>

      {/* Estado como badge integrado */}
      <Badge variant={status}>{statusLabels[status]}</Badge>
    </div>
  )
}
