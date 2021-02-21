import React from 'react';

import Article from '../components/articles/article';
import "./home.css"

const Home = () => {
  return (
    <body>
      <div className='header'>Epicenter</div>
    <div className='container'>
    <Article />
    </div>
    <footer>Footer!</footer>
    </body>
  );
};

export default Home;