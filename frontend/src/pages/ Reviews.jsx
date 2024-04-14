import React, {useEffect} from 'react';
import PostService from "../API/PostService";
import ReviewsList from "../components/ReviewsList";
import {Button} from "reactstrap"
import {useHistory} from "react-router-dom";
import '../index.css';

const Reviews = () => {
    const [items, setItems] = React.useState(null);
    const router = useHistory()

    useEffect(() => {
        PostService.GetReviews().then((response) => {
            if (response) {
                setItems(response.data)
                console.log(response)
            }
        })
    }, []);

    return (
        <div style={{ marginBottom: '25px' }}>
            <Button
                className='add-review-button'
                color="warning"
                onClick={() => router.replace("/restaurant/reviews/add")}
            >
                Добавить отзыв
            </Button>
            <ReviewsList reviews={items}/>
        </div>
    )
};

export default Reviews;