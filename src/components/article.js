import React, { useEffect, useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { Client } from '../contentful/client';
import { Redirect, useParams } from 'react-router-dom';
import "./article.css"

const Article = () => {
  const [article, setArticle] = useState({});
  const [error, setError] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    // Get data from CMS
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
  }, []);

  if (error) {
    return <Redirect to="/404" />;
  }

  if (!article) {
    return <p>loading..</p>;
  }

  const { title, body } = article;
  return (
      <div className="container">
        <h2>{title}</h2>
        <div class='content'>{documentToReactComponents(body)}</div>
      </div>
  );
};

export default Article;