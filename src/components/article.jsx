
import React from 'react'
import { useParams } from 'react-router-dom'
import './article.css'
import { useArticle } from '../hooks/index'

export default function Article() {
    const { slug } = useParams();
    const [ article, isLoading ] = useArticle(slug);

    const renderArticle = () => {
        if(isLoading) return <p>Not ready just yet!</p>

        return(
            <div class='wrapper'>
                <div class='article'>
                    <h1>{article.title}</h1>
                    <p>{article.body}</p>
                </div>
            </div>
        )
    }

    return(
        <div>
            {renderArticle()}
        </div>
    )
}