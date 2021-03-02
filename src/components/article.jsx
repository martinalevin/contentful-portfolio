
import React from 'react'
import { useParams } from 'react-router-dom'
import './article.scss';
import { useArticle } from '../hooks/index'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function Article() {
    const { slug } = useParams();
    const [ article, isLoading ] = useArticle(slug);

    const renderArticle = () => {
        if(isLoading) return <p>Not ready just yet!</p>
        return(
            <div className="container">
                <div className='article'>
                    <div className='header'>{article.title}</div>
                    <div className='content'>{documentToReactComponents(article.body)}</div>	
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