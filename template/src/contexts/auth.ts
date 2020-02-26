import { createContext } from 'react'

export type CurrentUser = {
  name: string;
}

export default createContext<CurrentUser | null>(null)
