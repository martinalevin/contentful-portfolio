import React from 'react';

const Header = (props) => {
    <section className= {`hero ${props.color}`}>
        <div className='hero-body'>
            <div className='container'>
                <h1 className='title'>
                    {props.title}
                </h1>
            </div>
        </div>
    </section>
}

export default Header;