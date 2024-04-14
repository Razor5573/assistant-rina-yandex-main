import React from 'react';
import StaticRating from "./StaticRating";
import {Input} from "reactstrap"

const ReviewContainer = ({score, review, num}) => {
    const styleObject = {
        marginTop: '0px',
        marginBottom: '0px',
    };

    return (
        <div className='review-container-boarder'>
            <h3 style={styleObject}>Посетитель #{num}</h3>
            <StaticRating filledStars={score}/>
            <Input
                type={"textarea"}
                value={review}
                disabled={true}
            />
        </div>
    )
}
export default ReviewContainer;