import React from 'react';
import Article from '../components/articles/article';
import "./home.css"
<style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@500&display=swap');
</style>

const Home = () => {
  return (
    <div>
      <div className='hero-image'>
      <div className='hero-text'>Epicenter</div>
      </div>
      <div className='container'>
      <Article />
      </div>
    </div>
  );
};

export default Home;