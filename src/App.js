import React, { useContext, Suspense } from 'react'
import { GlobalStyles } from './styles/GlobalStyles'

import { Router, Redirect } from '@reach/router'
import { Context } from './Context'
//Pages
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NotFound } from './pages/NotFound'

import { Logo } from './components/Logo/Logo.component'
import { NavBar } from './components/NavBar/NavBar.component'

// lazy loading
const Favs = React.lazy(() => import('./pages/Favs'))

export const App = () => {

  const { isAuth } = useContext(Context)

  return (
    <Suspense fallback='Loading...'>
      <GlobalStyles/>
      <Logo/>
      <Router>
        <NotFound default />
        <Home path='/'/>
        <Home path='/pet/:id'/>
        <Detail path='/detail/:detailId'/>
        {!isAuth && <NotRegisteredUser path='/login'/>} 
        {!isAuth && <Redirect from='/favs' noThrow to='/login'/>}
        {!isAuth && <Redirect from='/user' noThrow to='/login'/>}
        {isAuth && <Redirect from='/login' noThrow to='/'/>}

        <Favs path='/favs'/>
        <User path='/user'/>
      </Router>

      <NavBar/>
    </Suspense>)
}
