import React, {useEffect, useState} from 'react';
import {Spinner} from "reactstrap"
import ReviewContainer from "./ReviewContainer";

const ReviewsList = ({reviews}) => {
    const [data, setData] = useState(reviews)

    useEffect(() => {
        setData(reviews)
    }, [reviews]);

    if (data === null) {
        return (
            <div className="spinner">
                <Spinner/>
            </div>
        )
    }

    if (data.length === 0) {
        return (
            <h2>Отзывов нет</h2>
        )
    }

    return (
        <>
            {data.map((review, index) => (
                    <>
                        <ReviewContainer review={review.text} score={review.score} num={index + 1}/>
                    </>
                ))}
        </>
    )
}

export default ReviewsList;