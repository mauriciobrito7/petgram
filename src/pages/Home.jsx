import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories/ListOfCategories.component'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards/ListOfPhotoCards.component'

const HomePage = ({ id }) => {
  return <>
        <ListOfCategories/>
        <ListOfPhotoCards categoryId={id}/>
  </>
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})