import React, { useEffect, useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { Client } from '../../contentful/client';
import { Redirect, useParams } from 'react-router-dom';
import "./article.css"

const Article = () => {
  const [article, setArticle] = useState({});
  const [error, setError] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    Client
      .getEntries({
        content_type: 'article',
        'fields.slug[in]': slug,
      })
      .then(({ items }) => {
        const { fields } = items[0];
        const { title, body } = fields;
        setArticle({
          title,
          body,
        });
      })
      .catch(() => {
        setError(true);
      });
  });

  if (error) {
    return <Redirect to="/404" />;
  }

  const { title, body } = article;
  return (
      <div className="container">
        <h2 className='title'>{title}</h2>
        <div className='content'>{documentToReactComponents(body)}</div>
      </div>
  );
};

export default Article;