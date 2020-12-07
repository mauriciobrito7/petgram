import React from 'react'

import { useInputValue } from '../../hooks/useInputValue.hook'

export const UserForm = ({ onSubmit }) => {

  const email = useInputValue('')
  const password = useInputValue('')

  return  <form onSubmit={onSubmit}> 
    <input placeholder='Email' {...email} type="email"/>
    <input placeholder='Password' {...password}  type="password"/>

    <button>Login</button>
  </form>
}