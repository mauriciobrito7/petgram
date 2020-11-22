import React from 'react'
import {Category} from '../Category/category.component'
import {List, Item} from './ListOfCategories.styles'
import {categories} from '../../db.json'

export const ListOfCategories = () => {

    const renderList = (fixed) => (
        <List className= {fixed? 'fixed': ''}>
            {
                categories.map(category => (
                    <Item key={category.id}>
                        <Category {...category}/>
                    </Item>
                ))
            }
        </List>
    )

    return (
        <div>
            renderList()
            renderList(true)
        </div>
    )
}