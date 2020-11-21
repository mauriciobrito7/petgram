import React from 'react'
import {Category} from '../Category/category.component'
import {List, Item} from './ListOfCategories.styles'
import {categories} from '../../db.json'

export const ListOfCategories = () => {
    return (
        <List>
            {
                categories.map(category => (
                    <Item key={category.id}>
                        <Category {...category}/>
                    </Item>
                ))
            }
        </List>
    )
}