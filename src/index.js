import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import getArticles from './contentful/fetchArticles'

console.log(getArticles);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
