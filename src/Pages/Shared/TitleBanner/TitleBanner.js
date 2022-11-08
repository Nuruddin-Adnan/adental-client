import React from 'react';
import './TitleBanner.css';

const TitleBanner = ({ title }) => {
    return (
        <section className='titleBanner'>
            <div className="title-banner-overlay">
                <div className="container">
                    <h2 className='titleText'>{title}</h2>
                </div>
            </div>
        </section>
    );
};

export default TitleBanner;