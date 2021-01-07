import React from 'react'
import { Grid, Image, Fav } from './ListOfFavs.styles'
import PropTypes from 'prop-types'

export const ListOfFavs = ({ favs = [] }) => {
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