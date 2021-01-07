import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories/ListOfCategories.component'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards/ListOfPhotoCards.component'
import { Layout } from '../components/Layout/Layout.component'

const HomePage = ({ id }) => {
  return <Layout title={'Categories'}>
        <ListOfCategories/>
        <ListOfPhotoCards categoryId={id}/>
  </Layout>
}

export default React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})

