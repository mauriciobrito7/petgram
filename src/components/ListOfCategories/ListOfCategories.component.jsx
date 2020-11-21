import React from 'react'
import {Category} from '../Category/category.component'
import {List, Item} from './ListOfCategories.styles'

export const ListOfCategories = () => {
    return (
        <List>
            {
                [1,2,3,4,5,6,7,8,9,10].map(category => (
                    <Item key={category}>
                        <Category/>
                    </Item>
                ))
            }
        </List>
    )
}