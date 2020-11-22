import React from 'react'
import { PhotoCard } from '../PhotoCard/PhotoCard.component'

export const ListOfPhotoCard = () => {
    return (
        <div>
            <ul>
                { [1,2,3,4,5,6,7].map(id => (
                    <PhotoCard key={id}/>
                ))}
            </ul>
        </div>
    )
}