import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Home } from './pages/Home'
import { Logo } from './components/Logo/Logo.component'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'

import { Router } from '@reach/router'


export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)

  const detailId = urlParams.get('detail')

  return (<div>
    <GlobalStyles/>
    <Logo/>
    { 
      detailId ? <PhotoCardWithQuery id={detailId} /> 
      : <Router>
          <Home path='/'/>
          <Home path='/pet/:id'/>
        </Router>
    }
    
  </div>)
}
