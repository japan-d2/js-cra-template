import React, { useState, useCallback } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { useForm, OnSubmit } from 'react-hook-form'
import { CurrentUser } from '../contexts/auth'
import * as remote from '../remote'
import useAuth from '../hooks/auth'
import Center from '../components/Center'

export type Props = {
  onSignIn: (user: CurrentUser) => Promise<void> | void;
}

export type FormValues = {
  name: string;
  password: string;
}

const SignIn: React.FC<Props> = ({ onSignIn }) => {
  const [formError, setFormError] = useState<string | null>(null)
  const currentUser = useAuth()
  const { register, handleSubmit, errors } = useForm<FormValues>()
  const history = useHistory()

  const handleSignIn = useCallback<OnSubmit<FormValues>>(async (data) => {
    try {
      setFormError(null)
      await onSignIn(await remote.signIn(data))
      history.push('/')
    } catch (error) {
      setFormError(error.message)
    }
  }, [onSignIn, history])

  if (currentUser) {
    return <Redirect to="/" />
  }

  return (
    <>
      <main className="app-content">
        <Center>
          <form className="app-form sign-in-form" onSubmit={handleSubmit(handleSignIn)}>
            <div className="app-form-title">Sign In Form</div>
            {formError && <div className="app-form-error">{formError}</div>}
            <div className={`app-form-item ${errors.name ? 'error' : ''}`.trim()}>
              <label>
                <span className="app-form-label">Name</span>
                <input
                  name="name"
                  type="text"
                  ref={register({ required: 'Name is required.' })}
                />
              </label>
              {errors.name && <div className="app-form-item-error">{errors.name.message}</div>}
            </div>
            <div className={`app-form-item ${errors.password ? 'error' : ''}`.trim()}>
              <label>
                <span className="app-form-label">Password (Dummy)</span>
                <input
                  name="password"
                  type="password"
                  ref={register({
                    required: 'Password is required.',
                    minLength: {
                      value: 8,
                      message: 'Password must contain at least 8 characters',
                    },
                  })}
                />
              </label>
              {errors.password && <div className="app-form-item-error">{errors.password.message}</div>}
            </div>
            <div className="app-form-item submit">
              <input type="submit" value="Sign In" />
            </div>
          </form>
        </Center>
      </main>
    </>
  )
}

export default SignIn
