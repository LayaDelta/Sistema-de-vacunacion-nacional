import './ProgressBar.css'

/**
 * ÁTOMO — ProgressBar
 * Barra de progreso animada con valor y color.
 * @param {number} value  0–100
 * @param {'primary'|'accent'|'warning'|'danger'} color
 * @param {boolean} showLabel
 */
export default function ProgressBar({ value = 0, color = 'primary', showLabel = true }) {
  const clamped = Math.min(100, Math.max(0, value))

  return (
    <div className="progress-bar" role="progressbar" aria-valuenow={clamped} aria-valuemin={0} aria-valuemax={100}>
      <div className={`progress-bar__track`}>
        <div
          className={`progress-bar__fill progress-bar__fill--${color}`}
          style={{ width: `${clamped}%` }}
        />
      </div>
      {showLabel && (
        <span className="progress-bar__label">{clamped}%</span>
      )}
    </div>
  )
}
