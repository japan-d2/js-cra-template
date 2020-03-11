import defer from '../helpers/defer'

export type User = {
  name: string;
}

export type SignInParams = {
  name: string;
  password: string;
}

export const signIn = async (params: SignInParams): Promise<User> => {
  await defer(1000)

  return {
    name: params.name,
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const signInWithError = async (_params: SignInParams): Promise<User> => {
  await defer(1000)

  throw new Error('Unauthenticated')
}
