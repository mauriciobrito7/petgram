import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
//components
import { ListOfFavs } from '../components/ListOfFavs/ListOfFavs.component'
import { Spinner } from '../components/Spinner/Spinner.component'

const GETS_FAVS = gql`
  query getFavs { 
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

const renderProp = ({ loading, error, data }) => {
  if(loading) return <Spinner>Loading...</Spinner>
  if(error) return <p>Error!!</p>

  const { favs } = data
  return <ListOfFavs favs={favs}/>
  
}

export const FavsWithQuery = () => (

  <Query query={GETS_FAVS} fetchPolicy={'network-only'}>
    {renderProp}
  </Query>

)