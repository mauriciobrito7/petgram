import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm }  from '../components/UserForm/UserForm.component'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'
import { Layout } from '../components/Layout/Layout.component'

const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)
  return <Layout title='Login'>
  <RegisterMutation>
    {
      (register, { data, loading, error }) => {
        const onSubmit = ({ email, password }) => {
          const input  = { email, password }
          const variables = { input }
          register({ variables }).then(({data}) => {
            const { signup } = data
            activateAuth(signup)
          })
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
          login({ variables }).then(({data}) => {
            const { login } = data
            activateAuth(login)
          })
        }
        const errorMsg = error && 'the password is wrong or the user does not exist' 
        return  <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Iniciar sesion' />
      }
    }
  </LoginMutation>
</Layout>
}

export default NotRegisteredUser