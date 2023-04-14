import React from 'react';
import './Catchy.css';

const Catchy = () => {
    return (
        <>
            <div className="banner">
                <span className="banner-text">Explore the best blogs</span>
                <span className="banner-text">on any topic and </span>
                <span className="banner-text">broaden your horizons!</span>
            </div>
            <div className="trending">
                <span className="trending1">The content everyone's talking about minus the noise.</span>
                <span className="trending2">Ranked by machines, curated by humans, updated hourly</span> 
            </div>
        </>
    );
};

export default Catchy;
