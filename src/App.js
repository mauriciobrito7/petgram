import React from 'react'
import { ListOfCategories } from './components/ListOfCategories/ListOfCategories.component'
import { GlobalStyles } from './GlobalStyles'
import {PhotoCard} from './components/PhotoCard/PhotoCard.component'

export const App = () => 
  (<div>
    <GlobalStyles/>
    <ListOfCategories/>
    <PhotoCard/>
  </div>)
