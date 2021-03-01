
import React from 'react'
import { useParams } from 'react-router-dom'

import { useArticle } from '../hooks/index'

export default function Article() {
    const { id } = useParams();
    const [ article, isLoading ] = useArticle(id);

    const renderArticle = () => {
        if(isLoading) return <p>Not ready just yet!</p>

        return(
            <h1>{renderArticle()}</h1>
        )
    }

    return(
        <div>
            {renderArticle()}
        </div>
    )
}