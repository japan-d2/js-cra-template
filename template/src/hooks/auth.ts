import { useContext } from 'react'
import AuthContext, { CurrentUser } from '../contexts/auth'

const useAuth = (): CurrentUser | null => useContext(AuthContext)

export default useAuth
