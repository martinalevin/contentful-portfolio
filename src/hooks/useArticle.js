import { useEffect, useState } from 'react'
import { getArticle } from '../contentful/client'

export default function useArticle(slug) {
    const [article, setArticle] = useState(null)
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getArticle(slug).then(article => {
            setArticle(article[0].fields)
            setLoading(false)
        })
    }, [slug])
    return [article, isLoading];
}

