import React from 'react'
import { Grid, Image, Link } from './ListOfFavs.styles'

export const ListOfFavs = ({ favs = [] }) => {
  return <Grid>
    { 
      favs.map(fav => {
      return <Link to={`/detail/${fav.id}`}>
        <Image src={fav.src} alt='Fav' key={fav.id} />
      </Link>  
    })
    }
  </Grid>
}