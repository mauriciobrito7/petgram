import React from 'react'
import { Grid, Image, Fav, Empty, Title, Icon } from './ListOfFavs.styles'
import PropTypes from 'prop-types'
import { FaSadCry } from 'react-icons/fa'


export const ListOfFavs = ({ favs = [] }) => {
  
  if(favs.length === 0) {
    return <Empty>
      <Icon/>
      <Title>You don't have favorites</Title>
    </Empty>
  }

  return <Grid>
    { 
      favs.map(fav => {
        return <Fav to={`/detail/${fav.id}`} key={fav.id} >
            <Image src={fav.src} alt='Fav'  />
        </Fav>  
     })
    }
  </Grid>
}

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  )
}