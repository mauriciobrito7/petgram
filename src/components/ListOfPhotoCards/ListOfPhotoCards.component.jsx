import React from 'react'
import { PhotoCard } from '../PhotoCard/PhotoCard.component'

import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const withPhotos = graphql(gql`
    query getPhotos {
        photos {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`)

const ListOfPhotoCardComponent = ({data: { photos = []}} = {}) => {

    return (
        <div>
            <ul>
                { 
                photos.map(photo => (
                    <PhotoCard key={photo.id} {...photo}/>
                ))}
            </ul>
        </div>
    )
}

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardComponent)