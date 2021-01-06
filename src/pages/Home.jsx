import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories/ListOfCategories.component'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards/ListOfPhotoCards.component'
import { Layout } from '../components/Layout/Layout.component'
const HomePage = ({ id }) => {
  return <Layout>
        <ListOfCategories/>
        <ListOfPhotoCards categoryId={id}/>
  </Layout>
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})