import React, { Fragment, useEffect, useState } from 'react'
import {Category} from '../Category/category.component'
import {List, Item} from './ListOfCategories.styles'
// import {categories} from '../../db.json'

export function useCategoriesData() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        window.fetch('https://raw.githubusercontent.com/mauriciobrito7/petgram/master/src/db.json')
        .then(res => res.json())
        .then(response => {
            setCategories(response.categories)
            setLoading(false)
        })
        
    },[])

    return {categories, loading}
}

export const ListOfCategories = () => {

    const {categories ,loading} = useCategoriesData()
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
    },)

    const renderList = (fixed) => (
        <List fixed={fixed}>
            {   
                loading ? <Item key='loading'/> :
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