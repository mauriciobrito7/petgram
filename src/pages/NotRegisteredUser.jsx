import React from 'react'
import {Consumer} from '../Context'
import { UserForm }  from '../components/UserForm/UserForm.component'
import { RegisterMutation } from '../container/RegisterMutation'

export const NotRegisteredUser = () => (
  <Consumer>
    {
      ({ activateAuth}) => {
        return (
          <>
            <RegisterMutation>
              {
                (register) => {
                  const onSubmit = ({ email, password }) => {
                    const input  = { email, password }
                    const variables = { input }
                    register({ variables }).then(activateAuth)
                  }
                  return <UserForm onSubmit={onSubmit} title='Registrarse' />
                }
              }
            </RegisterMutation>
            
            <UserForm onSubmit={activateAuth} title='Iniciar sesion' />

          </>
        )
      }
    }
  </Consumer>
)