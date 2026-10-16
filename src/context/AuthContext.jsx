import { createContext, useContext, useState } from 'react'
import { INITIAL_USERS, INITIAL_VACCINES, INITIAL_RECORDS } from '../data/store'

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [users,   setUsers]   = useState(INITIAL_USERS)
  const [vaccines, setVaccines] = useState(INITIAL_VACCINES)
  const [records,  setRecords]  = useState(INITIAL_RECORDS)
  const [currentUser, setCurrentUser] = useState(null)

  // ── Auth ──────────────────────────────────────────────────────
  function login(email, password) {
    const found = users.find(u => u.email === email && u.password === password)
    if (!found) return 'Credenciales incorrectas.'
    setCurrentUser(found)
    return null
  }

  function logout() { setCurrentUser(null) }

  function register(data) {
    if (users.some(u => u.email === data.email)) return 'Ese correo ya está registrado.'
    const newUser = { ...data, id: Date.now(), role: 'user', createdAt: new Date().toISOString().slice(0,10) }
    setUsers(prev => [...prev, newUser])
    setCurrentUser(newUser)
    return null
  }

  // ── Vaccines CRUD (admin) ──────────────────────────────────────
  function addVaccine(v)          { setVaccines(p => [...p, { ...v, id: Date.now() }]) }
  function updateVaccine(id, v)   { setVaccines(p => p.map(x => x.id === id ? { ...x, ...v } : x)) }
  function deleteVaccine(id)      { setVaccines(p => p.filter(x => x.id !== id)) }

  // ── Records CRUD (admin) ───────────────────────────────────────
  function addRecord(r)           { setRecords(p => [...p, { ...r, id: Date.now() }]) }
  function updateRecord(id, r)    { setRecords(p => p.map(x => x.id === id ? { ...x, ...r } : x)) }
  function deleteRecord(id)       { setRecords(p => p.filter(x => x.id !== id)) }

  // ── Helpers ───────────────────────────────────────────────────
  function getUserRecords(userId)  { return records.filter(r => r.userId === userId) }
  function getVaccineById(id)      { return vaccines.find(v => v.id === id) }
  function getUserById(id)         { return users.find(u => u.id === id) }

  return (
    <AuthContext.Provider value={{
      currentUser, users, vaccines, records,
      login, logout, register,
      addVaccine, updateVaccine, deleteVaccine,
      addRecord, updateRecord, deleteRecord,
      getUserRecords, getVaccineById, getUserById,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() { return useContext(AuthContext) }
