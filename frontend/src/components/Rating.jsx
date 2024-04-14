import React, {useState, useEffect} from 'react';
import '../index.css';

const Rating = ({rating, setRating}) => {
    const [hoveredRating, setHoveredRating] = useState(0);

    useEffect(() => {
        console.log('Сохраненная оценка:', rating);
    }, [rating]);

    const handleRatingChange = (value) => {
        setRating(value);
    };

    const handleMouseEnter = (value) => {
        setHoveredRating(value);
    };

    const handleMouseLeave = () => {
        setHoveredRating(0);
    };

    return (
        <div>
            <h2>Оцените ресторан:</h2>
            <div>
                {[...Array(5)].map((_, index) => {
                    const value = index + 1;
                    const starClassName = value <= (hoveredRating || rating) ? 'star-active' : 'star';

                    return (
                        <span
                            key={index}
                            className={starClassName}
                            onClick={() => handleRatingChange(value)}
                            onMouseEnter={() => handleMouseEnter(value)}
                            onMouseLeave={handleMouseLeave}
                        >
              ★
            </span>
                    );
                })}
            </div>
        </div>
    );
};

export default Rating;
