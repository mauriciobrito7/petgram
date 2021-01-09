import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout/Layout.component'
import { GoBack } from '../components/GoBack/GoBack.component'

const Favs = () => (
  <Layout title='Your Favorites' >
    <GoBack/>
    <FavsWithQuery/>
  </Layout>
)

export default Favs;