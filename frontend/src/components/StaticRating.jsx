import React from 'react';

const StaticRating = ({filledStars}) => {
    return (
        <>
            {[...Array(5)].map((_, index) => (
                <span key={index} className={index < filledStars ? 'star-active-static' : 'star-static'}>★</span>
            ))}
        </>
    );
};

export default StaticRating;
