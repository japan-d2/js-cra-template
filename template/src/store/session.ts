import { observable, action, runInAction } from 'mobx'
import { create, persist } from 'mobx-persist'
import { RootStore } from './index'
import { CurrentUser } from './types'
import * as remote from '../remote'

export class SessionStore {
  @persist('object')
  @observable
  currentUser: CurrentUser | null = null

  @observable
  loaded = false

  constructor (private readonly root: RootStore) {
    const hydrate = create()

    hydrate('store.session', this)
      .then(() => this.setLoaded())
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.error(e)
      })
  }

  @action
  setLoaded (): void {
    this.loaded = true
  }

  @action
  async signIn (params: remote.SignInParams): Promise<void> {
    const user = await remote.signIn(params)

    runInAction(() => {
      this.currentUser = user
    })
  }

  @action
  async signOut (): Promise<void> {
    this.currentUser = null
  }
}
