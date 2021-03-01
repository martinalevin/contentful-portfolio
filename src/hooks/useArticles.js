import { useEffect, useState } from 'react'
import { getArticles } from '../contentful/client'

const promise = getArticles();

export default function useArticles() {
    const [articles, setArticles] = useState([])
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        promise.then(articles => {
            setArticles(articles)
            setLoading(false)
        })
    }, [])
    return [articles, isLoading];
}

