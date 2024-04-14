import React, {useEffect, useState} from 'react';
import PostService from "../API/PostService";
import {Cart2} from "../components/Cart2";

function Cart1() {
    const [items, setItems] = React.useState(null);

    useEffect(() => {
        PostService.GetCart(1).then((response) => {
            setItems(response.data)
            if (response)
                console.log(response.data)
        })
    }, []);

    return (
        <Cart2 items={items}/>
    )
}

export default Cart1;
