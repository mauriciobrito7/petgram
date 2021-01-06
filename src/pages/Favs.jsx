import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout/Layout.component'

const Favs = () => (
  <Layout title='Your Favorites' >
    <FavsWithQuery/>
  </Layout>
)

export default Favs;