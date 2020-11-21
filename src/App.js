import React from 'react'
import { GlobalStyles } from './GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories/ListOfCategories.component'
import { ListOfPhotoCard } from './components/ListOfPhotoCards/ListOfPhotoCards.component'


export const App = () => 
  (<div>
    <GlobalStyles/>
    <ListOfCategories/>
    <ListOfPhotoCard/>
  </div>)
