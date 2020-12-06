import React from 'react'
import { FavButton } from '../FavButton/FavButton.component'
import { ImgWrapper, Img, Article } from './PhotoCard.styles'
import { useLocalStorage } from '../../hooks/useLocalStorage.hook'
import { useNearScreen } from '../../hooks/useNearScreen.hook'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import { Link } from '@reach/router'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'


export const PhotoCard = ({id, likes = 0, src = DEFAULT_IMAGE}) => {   
    
    const key = `like-${id}`
    const [liked, setLiked] = useLocalStorage(key, false)
    const [show, element] = useNearScreen()

    return (
        <Article ref={element}>
            {show && (
                <>
                    <Link to={`/detail/${id}`}>
                    <ImgWrapper>
                        <Img src={src} />
                    </ImgWrapper>
                    </Link>
                    <ToggleLikeMutation>
                        {
                            (toggleLike) => {
                                const handleFavClick = () => {
                                    !liked && toggleLike({ variables : { 
                                        input: { id }
                                    } })
                                    setLiked(!liked)
                                }
                                return <FavButton liked={liked} likes={likes} onClick={handleFavClick}/>
                            }
                        }
                    </ToggleLikeMutation>
                </>
            )}
        </Article>
    )
}