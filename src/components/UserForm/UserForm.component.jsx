import React from 'react'

import { useInputValue } from '../../hooks/useInputValue.hook'
import { Form, Input, Button, Title } from './UserForm.styles'

export const UserForm = ({ onSubmit, title }) => {

  const email = useInputValue('')
  const password = useInputValue('')

  return  (
  <>
    <Title>{title}</Title>
    <Form onSubmit={onSubmit}> 
      <Input placeholder='Email' {...email} type="email"/>
      <Input placeholder='Password' {...password}  type="password"/>

      <Button>{title}</Button>
    </Form>
  </>
  )
}