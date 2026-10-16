// ── Datos estáticos del Sistema Nacional de Vacunación ──────────────
// Simula una base de datos en memoria. En producción vendor de una API.

export const INITIAL_USERS = [
  { id: 1, name: 'Administrador General', email: 'admin@vacunard.do', password: 'admin123', role: 'admin', cedula: '001-0000001-1', birthdate: '1980-06-15', phone: '809-000-0001', createdAt: '2024-01-01' },
  { id: 2, name: 'María Rodríguez',       email: 'maria@correo.do',   password: '123456',   role: 'user',  cedula: '001-1234567-8', birthdate: '1990-05-15', phone: '809-555-0102', createdAt: '2024-02-10' },
  { id: 3, name: 'Juan Pérez',            email: 'juan@correo.do',    password: '123456',   role: 'user',  cedula: '001-7654321-2', birthdate: '1988-11-22', phone: '809-555-0203', createdAt: '2024-03-05' },
  { id: 4, name: 'Ana Martínez',          email: 'ana@correo.do',     password: '123456',   role: 'user',  cedula: '001-9876543-4', birthdate: '1995-03-08', phone: '809-555-0304', createdAt: '2024-04-20' },
  { id: 5, name: 'Carlos Díaz',           email: 'carlos@correo.do',  password: '123456',   role: 'user',  cedula: '001-5432109-6', birthdate: '2000-07-30', phone: '809-555-0405', createdAt: '2024-05-15' },
]

export const INITIAL_VACCINES = [
  { id: 1, name: 'COVID-19 Bivalente',             requiredDoses: 3, manufacturer: 'Pfizer-BioNTech',  description: 'Vacuna bivalente contra COVID-19, cubre variante original y Ómicron.',   status: 'active' },
  { id: 2, name: 'Influenza',                       requiredDoses: 1, manufacturer: 'Sanofi Pasteur',   description: 'Vacuna tetravalente contra la gripe estacional.',                        status: 'active' },
  { id: 3, name: 'Sarampión-Rubéola-Parotiditis',   requiredDoses: 2, manufacturer: 'Merck & Co.',      description: 'Vacuna triple vírica (SRP) para sarampión, rubéola y paperas.',          status: 'active' },
  { id: 4, name: 'Hepatitis B',                     requiredDoses: 3, manufacturer: 'GlaxoSmithKline', description: 'Vacuna recombinante contra el virus de la Hepatitis B.',                  status: 'low'    },
  { id: 5, name: 'Varicela',                        requiredDoses: 2, manufacturer: 'Merck & Co.',      description: 'Vacuna de virus vivos atenuados contra la varicela.',                    status: 'active' },
  { id: 6, name: 'Meningocócica ACWY',              requiredDoses: 1, manufacturer: 'Pfizer',           description: 'Vacuna conjugada contra meningitis meningocócica serotipos A, C, W, Y.', status: 'out'   },
]

export const INITIAL_RECORDS = [
  // María (2)
  { id: 1,  userId: 2, vaccineId: 1, dose: 1, date: '2023-02-10', center: 'Clínica Cruz Jiménez',     appliedBy: 'Dr. Roberto López',    notes: '' },
  { id: 2,  userId: 2, vaccineId: 1, dose: 2, date: '2023-04-10', center: 'Clínica Cruz Jiménez',     appliedBy: 'Dr. Roberto López',    notes: '' },
  { id: 3,  userId: 2, vaccineId: 1, dose: 3, date: '2023-10-15', center: 'Hospital Ney Arias Lora',  appliedBy: 'Dra. Carmen Sánchez',  notes: '' },
  { id: 4,  userId: 2, vaccineId: 2, dose: 1, date: '2024-01-20', center: 'Hospital Ney Arias Lora',  appliedBy: 'Dra. Carmen Sánchez',  notes: '' },
  { id: 5,  userId: 2, vaccineId: 3, dose: 1, date: '2022-08-05', center: 'Centro de Salud Norte',    appliedBy: 'Dr. Marcos Fernández', notes: 'Pendiente 2da dosis' },
  // Juan (3)
  { id: 6,  userId: 3, vaccineId: 1, dose: 1, date: '2023-03-15', center: 'Hospital General Plaza',   appliedBy: 'Dr. José Castro',      notes: '' },
  { id: 7,  userId: 3, vaccineId: 1, dose: 2, date: '2023-06-15', center: 'Hospital General Plaza',   appliedBy: 'Dr. José Castro',      notes: '' },
  { id: 8,  userId: 3, vaccineId: 4, dose: 1, date: '2022-12-01', center: 'Unidad de Salud Central',  appliedBy: 'Dra. Luz Medina',      notes: '' },
  { id: 9,  userId: 3, vaccineId: 4, dose: 2, date: '2023-01-15', center: 'Unidad de Salud Central',  appliedBy: 'Dra. Luz Medina',      notes: '' },
  { id: 10, userId: 3, vaccineId: 4, dose: 3, date: '2023-07-15', center: 'Unidad de Salud Central',  appliedBy: 'Dra. Luz Medina',      notes: 'Esquema completo' },
  // Ana (4)
  { id: 11, userId: 4, vaccineId: 2, dose: 1, date: '2024-02-14', center: 'Clínica Corazones Unidos', appliedBy: 'Dr. Pedro Vargas',     notes: '' },
  { id: 12, userId: 4, vaccineId: 5, dose: 1, date: '2023-09-20', center: 'Clínica Corazones Unidos', appliedBy: 'Dr. Pedro Vargas',     notes: '' },
  { id: 13, userId: 4, vaccineId: 5, dose: 2, date: '2024-03-20', center: 'Hospital Nacional',        appliedBy: 'Dra. Rosa Torres',     notes: 'Esquema completo' },
  // Carlos (5)
  { id: 14, userId: 5, vaccineId: 1, dose: 1, date: '2024-05-20', center: 'Hospital Nacional',        appliedBy: 'Dr. Antonio Ruiz',     notes: '' },
  { id: 15, userId: 5, vaccineId: 3, dose: 1, date: '2024-06-10', center: 'Centro Sur de Salud',      appliedBy: 'Dra. Isabel García',   notes: '' },
  { id: 16, userId: 5, vaccineId: 3, dose: 2, date: '2024-08-10', center: 'Centro Sur de Salud',      appliedBy: 'Dra. Isabel García',   notes: 'Esquema completo' },
]
