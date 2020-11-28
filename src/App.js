import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories/ListOfCategories.component'
import { ListOfPhotoCards } from './components/ListOfPhotoCards/ListOfPhotoCards.component'
import { Logo } from './components/Logo/Logo.component'


export const App = () => 
  (<div>
    <GlobalStyles/>
    <Logo/>
    <ListOfCategories/>
    <ListOfPhotoCards categoryId={1}/>
  </div>)
