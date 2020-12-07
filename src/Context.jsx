import React, { createContext, useState } from 'react' 

const Context = createContext()
const Consumer = Context.Consumer

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
  const value = {
    isAuth,
    activateAuth: () => {
      setIsAuth(true)
    }
  }

  return (<Context.Provider value={value}>{children}</Context.Provider>)
}

export {
  Provider,
  Consumer
}