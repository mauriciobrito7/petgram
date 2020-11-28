import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories/ListOfCategories.component'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards/ListOfPhotoCards.component'

export const Home = ({ id }) => {
  return <>
        <ListOfCategories/>
        <ListOfPhotoCards categoryId={id}/>
  </>
}