import { SessionStore } from './session'

export class RootStore {
  readonly session: SessionStore

  constructor () {
    this.session = new SessionStore(this)
  }
}

export default new RootStore()
