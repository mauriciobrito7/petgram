import React, { Fragment, useEffect, useState } from 'react'
import {Category} from '../Category/category.component'
import {List, Item} from './ListOfCategories.styles'
import {categories} from '../../db.json'

export const ListOfCategories = () => {

    const [showFixed, setShowFixed] = useState(false);

    useEffect(() => {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200 
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }
        const eventId = document.addEventListener('scroll', onScroll)

        return () => {
            document.removeEventListener('scroll',eventId)
        };
    },);

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
        <Fragment>
            {renderList()}
            {showFixed && renderList(true)}
        </Fragment>
    )
}