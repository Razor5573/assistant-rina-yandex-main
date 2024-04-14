import React, {useEffect} from 'react';
import {useHistory, useLocation} from "react-router-dom";
import ProductExample from "../components/ProductExample";
import PostService from "../API/PostService";

export function DishInfo() {
    const router = useHistory()
    const [items, setItems] = React.useState([]);
    const location = useLocation();
    console.log(location)

    useEffect(() => {
        PostService.GetDishInfo(location.state.id, location.state.title).then((response) => {
            setItems(response.data)
            console.log(response)
        });
    }, [location.state.id, location.state.title]);

    return (
        <ProductExample props={items}/>
    )
}