import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'

import { Router } from '@reach/router'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'

import { Logo } from './components/Logo/Logo.component'
import { NavBar } from './components/NavBar/NavBar.component'

export const App = () => {

  return (<div>
    <GlobalStyles/>
    <Logo/>
    <Router>
      <Home path='/'/>
      <Home path='/pet/:id'/>
      <Detail path='/detail/:detailId'/>
    </Router>
    <NavBar/>
  </div>)
}
