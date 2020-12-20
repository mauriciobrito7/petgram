import React from 'react'

import { useInputValue } from '../../hooks/useInputValue.hook'
import { Form, Input, Title, Error } from './UserForm.styles'
import { SubmitButton } from '../SubmitButton/SubmitButton.componet'

export const UserForm = ({ onSubmit, title, error, disabled }) => {

  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ 
      email: email.value, 
      password: password.value
    })
  }

  return  (
  <>
    <Form disabled={disabled} onSubmit={handleSubmit}> 
      <Title>{title}</Title>
      <Input disabled={disabled} placeholder='Email' {...email} type="email"/>
      <Input disabled={disabled} placeholder='Password' {...password}  type="password"/>

      <SubmitButton disabled={disabled}>{title}</SubmitButton>
    </Form>

    {error && <Error>{error}</Error>}
  </>
  )
}