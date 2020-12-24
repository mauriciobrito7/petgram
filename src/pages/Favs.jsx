import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout/Layout.component'

export const Favs = () => (
  <Layout title='Tus favoritos' subtitle='Aqui puedes encontrar tus favoritos'>
    <h1>Favs</h1>
    <FavsWithQuery/>
  </Layout>
)