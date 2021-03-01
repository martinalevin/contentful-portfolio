import React from 'react'
import { Link } from 'react-router-dom'
import { useArticles } from '../hooks';
import './articles.css'

export default function Articles() {
    const [ articles, isLoading ] = useArticles();

    const renderArticles = () => {
        if(isLoading) return <p>Not ready just yet!</p>

        return articles.map(article => (
            <div class="articles-wrapper">
                <Link className="link" key={article.fields.slug} to={article.fields.slug}>
                    <h1>{article.fields.title}</h1>
                    <p>{article.fields.description}</p>
                </Link>
            </div>
        ))
    }

    return (
        <div>
            <div>{renderArticles()}</div>
        </div>
    )
}