import { useContext } from 'react'
import { RootStore } from '../store'
import StoreContext from '../contexts/store'

export default (): RootStore => useContext(StoreContext)
