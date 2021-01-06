import {useState, useEffect} from 'react'

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

        return () => ac.abort()
        
    },[])

    return [categories, loading]
}