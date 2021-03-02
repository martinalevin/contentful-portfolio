import React from 'react'
import { Link } from 'react-router-dom'
import { useArticles } from '../hooks';
import './articles.scss'

export default function Articles() {
    const [ articles ] = useArticles();

    const renderArticles = () => {
        return articles.map(article => (
            <div className="articles-wrapper">
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