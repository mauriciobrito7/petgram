import React, { Fragment, useEffect, useState } from 'react'
import {Category} from '../Category/Category.component'
import {List, Item} from './ListOfCategories.styles'
import { useCategoriesData } from '../../hooks/useCategoriesData.hook'
// import {categories} from '../../db.json'

const ListOfCategoriesComponent = () => {

    const [categories ,loading] = useCategoriesData()
    const [showFixed, setShowFixed] = useState(false)

    useEffect(() => {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200 
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }
        const eventId = document.addEventListener('scroll', onScroll)

        return () => {
            document.removeEventListener('scroll',eventId)
        }
    },[showFixed])

    const renderList = (fixed) => (
        <List fixed={fixed}>
            {   
                loading ? <Item key='loading'/> :
                categories.map(category => (
                    <Item key={category.id}>
                        <Category {...category} path={`/pet/${category.id}`}/>
                    </Item>
                ))
            }
        </List>
    )

    return (
        <Fragment>

            {renderList()}
            {showFixed && renderList(true)}
        </Fragment>
    )
    
}
export const ListOfCategories = React.memo(ListOfCategoriesComponent)
