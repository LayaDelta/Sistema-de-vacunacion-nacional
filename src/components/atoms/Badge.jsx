import './Badge.css'

/**
 * ÁTOMO — Badge
 * Pastilla de estado reutilizable.
 * @param {'success'|'warning'|'danger'|'info'|'neutral'} variant
 * @param {string} children
 */
export default function Badge({ variant = 'info', children }) {
  return (
    <span className={`badge badge--${variant}`}>
      <span className="badge__dot" aria-hidden="true" />
      {children}
    </span>
  )
}
