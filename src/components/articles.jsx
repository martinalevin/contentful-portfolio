import React from 'react'

import { useArticles } from '../hooks';

export default function Articles() {
    const [ articles, isLoading ] = useArticles();

    const renderArticles = () => {
        if(isLoading) return <p>Not ready just yet!</p>

        return articles.map(article => (
            <h1>{article.fields.title}</h1>
        ))
    }

    return (
        <div>
            <div>{renderArticles()}</div>
        </div>
    )
}