import React, { Fragment, useEffect, useState } from 'react'
import { Category } from '../Category/Category.component'
import { List, Item, Nav } from './ListOfCategories.styles'
import { useCategoriesData } from '../../hooks/useCategoriesData.hook'
import { ShadowSpinner } from '../ShadowSpinner/ShadowSpinner.component'

const ListOfCategoriesComponent = () => {

    const [categories ,loading] = useCategoriesData()
    const [showFixed, setShowFixed] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            const newShowFixed = window.scrollY > 200 
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }
        const eventScrollId = document.addEventListener('scroll', onScroll)
        const ac = new AbortController()

        return () => {
            document.removeEventListener('scroll',eventScrollId)
            return () => ac.abort()

        }
    },[showFixed])

    const renderList = (fixed) => (
        <Nav>
            <List fixed={fixed}>
                {   
                    loading ? <ShadowSpinner shape={'circle'} width='75px' height='75px' orientation='row'/> :
                    categories.map(category => (
                        <Item key={category.id}>
                            <Category {...category} path={`/pet/${category.id}`}/>
                        </Item>
                    ))
                }
            </List>
        </Nav>
    )

    return (
        <Fragment>

            {renderList()}
            {showFixed && renderList(true)}
        </Fragment>
    )
    
}
export const ListOfCategories = React.memo(ListOfCategoriesComponent)
