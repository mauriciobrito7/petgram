import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories/ListOfCategories.component'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards/ListOfPhotoCards.component'
import { Layout } from '../components/Layout/Layout.component'
import { useParams } from 'react-router-dom'

const HomePage = () => {

  let { id } = useParams();

  return <Layout title={'Categories'}>
        <ListOfCategories/>
        <ListOfPhotoCards categoryId={id}/>
  </Layout>
}

export default React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})

