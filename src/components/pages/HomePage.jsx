import HomeTemplate from '../templates/HomeTemplate'

/**
 * PAGE — HomePage
 * Página de inicio del Sistema Nacional de Vacunación.
 * Provee todos los datos reales y los pasa al Template.
 * No tiene lógica de presentación propia.
 */

// ── Datos de estadísticas ──────────────────────────────────────
const STATS = [
  {
    id: 'doses',
    icon: '💉',
    value: '42,386,120',
    label: 'Dosis aplicadas en 2026',
    progress: 87,
    progressColor: 'primary',
    badge: { variant: 'success', label: '+1.2M esta semana' },
  },
  {
    id: 'coverage',
    icon: '🛡️',
    value: '74.3%',
    label: 'Cobertura poblacional',
    progress: 74,
    progressColor: 'accent',
    badge: { variant: 'info', label: 'Meta: 85%' },
  },
  {
    id: 'centers',
    icon: '🏥',
    value: '3,240',
    label: 'Centros de vacunación activos',
    progress: 96,
    progressColor: 'accent',
    badge: { variant: 'success', label: 'Operativos' },
  },
  {
    id: 'pending',
    icon: '⏳',
    value: '890,400',
    label: 'Personas con dosis pendiente',
    progress: 28,
    progressColor: 'warning',
    badge: { variant: 'warning', label: 'Recordatorio activo' },
  },
]

// ── Datos de vacunas ──────────────────────────────────────────
const VACCINES = [
  { name: 'COVID-19 (Bivalente)',   doses: 3, status: 'success' },
  { name: 'Influenza',             doses: 1, status: 'success' },
  { name: 'Sarampión (SRP)',        doses: 2, status: 'success' },
  { name: 'Hepatitis B',           doses: 3, status: 'warning' },
  { name: 'Varicela',              doses: 2, status: 'success' },
  { name: 'Meningocócica',         doses: 1, status: 'danger'  },
]

// ── Handlers de ejemplo ───────────────────────────────────────
function handleRegister() {
  alert('Redirigiendo al formulario de registro de vacunación…')
}

function handleConsult() {
  alert('Redirigiendo a la consulta de cartilla digital…')
}

// ─────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <HomeTemplate
      heroProps={{
        onRegister: handleRegister,
        onConsult:  handleConsult,
      }}
      statsProps={{
        stats:    STATS,
        vaccines: VACCINES,
      }}
    />
  )
}
