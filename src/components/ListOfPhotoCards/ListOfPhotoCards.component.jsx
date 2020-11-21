import React from 'react'
import { PhotoCard } from '../PhotoCard/PhotoCard.component'

export const ListOfPhotoCard = () => {
    return (
        <div>
            <ul>
                { [1,2].map(id => (
                    <PhotoCard key={id}/>
                ))}
            </ul>
        </div>
    )
}