import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories/ListOfCategories.component'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards/ListOfPhotoCards.component'
import { Layout } from '../components/Layout/Layout.component'

export const Home = ({ id }) => {
  return <Layout title='Tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de animales domesticos muy bonitos'>
        <ListOfCategories/>
        <ListOfPhotoCards categoryId={id}/>
  </Layout>
}