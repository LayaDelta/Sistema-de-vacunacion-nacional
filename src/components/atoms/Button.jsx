import './Button.css'

/**
 * ÁTOMO — Button
 * Botón reutilizable con variantes y tamaños.
 * @param {'primary'|'outline'|'ghost'|'secundary'} variant
 * @param {'sm'|'md'|'lg'} size
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  ...props
}) {
  return (
    <button
      className={`btn btn--${variant} btn--${size}`}
      {...props}
    >
      {icon && <span className="btn__icon" aria-hidden="true">{icon}</span>}
      <span className="btn__label">{children}</span>
    </button>
  )
}
