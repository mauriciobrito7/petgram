import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'
import { Layout } from '../components/Layout/Layout.component'
import { useParams } from 'react-router-dom'

export const Detail = () => 
{
  let { detailId } = useParams(); 
return <Layout title='Detail'>
  <PhotoCardWithQuery id={detailId} />
</Layout>
}
