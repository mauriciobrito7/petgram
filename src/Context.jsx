import React, { createContext, useState } from 'react' 

const Context = createContext()
const Consumer = Context.Consumer

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })
  const value = {
    isAuth,
    activateAuth: token => {
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
    }
  }

  return (<Context.Provider value={value}>{children}</Context.Provider>)
}

export {
  Provider,
  Consumer,
  Context
}