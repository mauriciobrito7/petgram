import React from 'react'
import { PhotoCard } from '../PhotoCard/PhotoCard.component'
import { withPhotos } from '../../hoc/withPhotos'
import { List } from './ListOfPhotoCards.styles'

const ListOfPhotoCardComponent = ({data: { photos = []}} = {}) => {

    return (
        <List>
            <ul>
                { 
                photos.map(photo => (
                    <PhotoCard key={photo.id} {...photo}/>
                ))}
            </ul>
        </List>
    )
}

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardComponent)