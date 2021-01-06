import React from 'react'
import { PhotoCard } from '../PhotoCard/PhotoCard.component'
import { withPhotos } from '../../hoc/withPhotos'

const ListOfPhotoCardComponent = ({data: { photos = []}} = {}) => {

    return (
        <>
            <ul>
                { 
                photos.map(photo => (
                    <PhotoCard key={photo.id} {...photo}/>
                ))}
            </ul>
        </>
    )
}

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardComponent)