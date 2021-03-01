import { useEffect, useState } from 'react'
import { getArticle } from '../contentful/client'

const promise = getArticle();

export default function useArticle() {
    const [article, setArticle] = useState()
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        promise.then(article => {
            setArticle(article)
            setLoading(false)
        })
    }, [])
    return [article, isLoading];
}

