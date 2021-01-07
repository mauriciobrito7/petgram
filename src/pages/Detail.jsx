import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'
import { Layout } from '../components/Layout/Layout.component'

export const Detail = ({ detailId }) => 
(
<Layout title='Detail'>
  <PhotoCardWithQuery id={detailId} />
</Layout>
)

 