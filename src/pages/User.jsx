import React, { useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton/SubmitButton.componet' 
import { Layout } from "../components/Layout/Layout.component"

const User = () => {
  const { removeAuth } = useContext(Context);
  
  return <Layout>
    <h1>User</h1>
    <SubmitButton onClick={removeAuth} >Sign out</SubmitButton>
  </Layout>
}

export default User