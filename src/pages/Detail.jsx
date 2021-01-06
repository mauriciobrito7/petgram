import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'
import { Layout } from '../components/Layout/Layout.component'

export const Detail = ({ detailId }) => 
(
<Layout title='Detail' style={{diplay:'flex'}}>
  <PhotoCardWithQuery id={detailId} />
</Layout>
)

 