import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories/ListOfCategories.component'
import { ListOfPhotoCards } from './components/ListOfPhotoCards/ListOfPhotoCards.component'
import { Logo } from './components/Logo/Logo.component'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'


export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)

  const detailId = urlParams.get('detail')

  return (<div>
    <GlobalStyles/>
    <Logo/>
    { 
      detailId ? <PhotoCardWithQuery id={detailId} /> 
      :
      <>
        <ListOfCategories/>
        <ListOfPhotoCards categoryId={1}/>
      </>
    }
    
  </div>)
}
