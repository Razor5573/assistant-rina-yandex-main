import React, {useState} from 'react';
import Rating from "../components/Rating";
import ReviewText from "../components/ReviewText";
import {Button} from "reactstrap"
import {useHistory} from "react-router-dom";
import PostService from "../API/PostService";

const AddReview = () => {
    const router = useHistory()
    const [rating, setRating] = useState(0);
    const [value, setValue] = React.useState('');

    return (
        <>
            <Rating rating={rating} setRating={setRating} />
            <ReviewText className='reviews-publish-text' value={value} setValue={setValue}/>
            <div className='review-buttons'>
                <Button className='reviews-publish-button' view={"checked"}
                        onClick={() => {
                            PostService.AddReview(rating, value).then(
                                () => router.replace("/restaurant/reviews"))
                        }}>
                    Опубликовать отзыв
                </Button>
                <Button view={"critical"}
                        onClick={() => router.replace("/restaurant/reviews")}>
                    Отмена
                </Button>
            </div>
        </>
    )
};

export default AddReview;