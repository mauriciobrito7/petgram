import React from 'react'
import {Consumer} from '../Context'
import { UserForm }  from '../components/UserForm/UserForm.component'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => (
  <Consumer>
    {
      ({ activateAuth}) => {
        return (
          <>
            <RegisterMutation>
              {
                (register, { data, loading, error }) => {
                  const onSubmit = ({ email, password }) => {
                    const input  = { email, password }
                    const variables = { input }
                    register({ variables }).then(activateAuth)
                  }
                  const errorMsg = error && 'the user have already exist'

                  return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Registrarse' />
                }
              }
            </RegisterMutation>

            <LoginMutation>
              {
                (login, { data, loading, error }) => {
                  const onSubmit = ({ email, password }) => {
                    const input  = { email, password }
                    const variables = { input }
                    login({ variables }).then(activateAuth)
                  }
                  const errorMsg = error && 'the password is wrong or the user does not exist' 
                  return  <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Iniciar sesion' />
                }
              }
            </LoginMutation>

          </>
        )
      }
    }
  </Consumer>
)