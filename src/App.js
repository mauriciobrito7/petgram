import React, { useContext, Suspense } from 'react'
import { GlobalStyles } from './styles/GlobalStyles'

import { Route, Switch, Redirect } from "react-router-dom";

import { Context } from './Context'

//Pages
import { Detail } from './pages/Detail'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NotFound } from './pages/NotFound'

import { ScrollToTop } from './components/ScrollToTop/ScrollToTop.component'
import { Logo } from './components/Logo/Logo.component'
import { NavBar } from './components/NavBar/NavBar.component'
import { Spinner } from './components/Spinner/Spinner.component'

// lazy loading
const Favs = React.lazy(() => import('./pages/Favs'))
const Home = React.lazy(() => import('./pages/Home'))

export const App = () => {

  const { isAuth } = useContext(Context)

  const logoWrapper = {
    width: "100%",
    height: "50px",
    display:"flex",
    justifyContent:"left",
    alignItems: "center"
  }

  return (
    <Suspense fallback={<Spinner style={{marginTop:"45%"}}/>} >
      <GlobalStyles/>
      <div style={logoWrapper}>
        <Logo/>
      </div>
          <ScrollToTop/>
          <Switch>
            <Route  exact path="/" component={Home}/>
            <Route exact path="/pet/:id" component={Home}/>
            <Route exact path="/detail/:detailId" component={Detail}/>
            
            {!isAuth && <Route exact path="/login" component={NotRegisteredUser}/>} 
            {!isAuth && <Redirect from='/favs' to='/login'/>}
            {!isAuth && <Redirect from='/user' to='/login'/>}
            {isAuth && <Redirect from='/login' to='/'/>}
            <Route exact path='/favs' component={Favs}/>
            <Route exact path='/user'component={User}/>
            <Route component={NotFound}/>

          </Switch>
      <NavBar/>
    </Suspense>)
}
