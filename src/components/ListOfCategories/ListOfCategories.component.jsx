import React, { Fragment, useEffect, useState } from 'react'
import {Category} from '../Category/Category.component'
import {List, Item} from './ListOfCategories.styles'
// import {categories} from '../../db.json'

export function useCategoriesData() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    const url = 'https://petgram-server-23xyhmeq5.vercel.app/categories'

    useEffect(()=>{
        setLoading(true)
        const ac = new AbortController()
        window.fetch(url)
        .then(res => res.json())
        .then(response => {
            setCategories(response)
            setLoading(false)
        })
        .catch(e => console.log(e))

        return ac.abort()
        
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